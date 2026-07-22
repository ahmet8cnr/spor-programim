'use strict';
const KEY='ahmet_ab_training_v1';
const storage={
  get(){try{return window.localStorage.getItem(KEY)}catch(e){return null}},
  set(value){try{window.localStorage.setItem(KEY,value);return true}catch(e){return false}},
  remove(){try{window.localStorage.removeItem(KEY)}catch(e){} }
};
const clone=x=>JSON.parse(JSON.stringify(x));
const slug=s=>String(s||'').toLowerCase().replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/g,'-');
function ensureProgramShape(source){
  ['A','B'].forEach(code=>{
    if(!source[code]) source[code]={title:'Antrenman '+code,subtitle:'',exercises:[]};
    if(!Array.isArray(source[code].exercises)) source[code].exercises=[];
    source[code].exercises.forEach((e,i)=>{
      e.id=e.id||`${code.toLowerCase()}-${i+1}-${slug(e.name||'hareket')}`;
      e.name=e.name||'Yeni Hareket';
      e.sets=Math.max(1,Number(e.sets)||3);
      e.reps=String(e.reps||'8-12');
      e.rest=Math.max(0,Number(e.rest)||0);
      e.rir=String(e.rir||'1-2 RIR');
      e.video=String(e.video||'');
      e.note=String(e.note||'');
    });
  });
  return source;
}
let state;
try{state=JSON.parse(storage.get()||'null')}catch(e){state=null}
state=state||{next:'A',logs:[],drafts:{},completedSets:0};
let programs=ensureProgramShape(state.programs&&state.programs.A&&state.programs.B?state.programs:clone(defaultPrograms));
state.programs=programs;
let timerId=null,timerEnd=0;
const save=()=>storage.set(JSON.stringify(state));
