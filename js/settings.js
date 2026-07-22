'use strict';
function escapeAttr(v){return String(v??'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function renderProgramEditor(){
  const root=document.getElementById('programEditor');if(!root)return;
  root.innerHTML=['A','B'].map(code=>{
    const p=programs[code];
    return `<div class="editor-workout">
      <div class="editor-workout-top"><h4>Antrenman ${code}</h4><button class="btn add-exercise" style="width:auto;margin:0" onclick="addExercise('${code}')">+ Hareket ekle</button></div>
      <div class="editor-heading">
        <div><div class="editor-label">Antrenman başlığı</div><input class="field program-title" data-code="${code}" value="${escapeAttr(p.title)}"></div>
        <div><div class="editor-label">Alt açıklama</div><input class="field program-subtitle" data-code="${code}" value="${escapeAttr(p.subtitle)}"></div>
      </div>
      ${p.exercises.map((e,i)=>`<div class="editor-exercise">
        <div class="editor-main">
          <div><div class="editor-label">${i+1}. hareket adı</div><input class="field program-name" data-code="${code}" data-index="${i}" value="${escapeAttr(e.name)}"></div>
          <div><div class="editor-label">YouTube / video bağlantısı</div><input class="field program-video" data-code="${code}" data-index="${i}" value="${escapeAttr(e.video||'')}"></div>
        </div>
        <div class="editor-numbers">
          <div><div class="editor-label">Set sayısı</div><input class="field program-sets" type="number" min="1" max="20" data-code="${code}" data-index="${i}" value="${Number(e.sets)||1}"></div>
          <div><div class="editor-label">Tekrar / süre</div><input class="field program-reps" data-code="${code}" data-index="${i}" value="${escapeAttr(e.reps||'')}"></div>
          <div><div class="editor-label">Dinlenme (sn)</div><input class="field program-rest" type="number" min="0" step="5" data-code="${code}" data-index="${i}" value="${Number(e.rest)||0}"></div>
          <div><div class="editor-label">RIR / yoğunluk</div><input class="field program-rir" data-code="${code}" data-index="${i}" value="${escapeAttr(e.rir||'')}"></div>
        </div>
        <div class="editor-note"><div><div class="editor-label">Hareket notu</div><input class="field program-note" data-code="${code}" data-index="${i}" value="${escapeAttr(e.note||'')}"></div></div>
        <div class="editor-actions">
          <button class="mini-btn" onclick="moveExercise('${code}',${i},-1)" ${i===0?'disabled':''}>↑ Yukarı</button>
          <button class="mini-btn" onclick="moveExercise('${code}',${i},1)" ${i===p.exercises.length-1?'disabled':''}>↓ Aşağı</button>
          <button class="mini-btn danger" onclick="deleteExercise('${code}',${i})">Hareketi sil</button>
        </div>
      </div>`).join('')}
      <button class="btn add-exercise" onclick="addExercise('${code}')">+ Yeni hareket ekle</button>
    </div>`;
  }).join('');
}
function syncProgramEditor(){
  document.querySelectorAll('.program-title').forEach(x=>programs[x.dataset.code].title=x.value.trim()||programs[x.dataset.code].title);
  document.querySelectorAll('.program-subtitle').forEach(x=>programs[x.dataset.code].subtitle=x.value.trim());
  const fields=[
    ['program-name','name',v=>v.trim()||'Yeni Hareket'],
    ['program-video','video',v=>v.trim()],
    ['program-sets','sets',v=>Math.max(1,Math.min(20,Number(v)||1))],
    ['program-reps','reps',v=>v.trim()||'8-12'],
    ['program-rest','rest',v=>Math.max(0,Number(v)||0)],
    ['program-rir','rir',v=>v.trim()||'1-2 RIR'],
    ['program-note','note',v=>v.trim()]
  ];
  fields.forEach(([cls,key,parse])=>document.querySelectorAll('.'+cls).forEach(x=>{
    const e=programs[x.dataset.code].exercises[Number(x.dataset.index)];
    if(e)e[key]=parse(x.value);
  }));
  state.programs=programs;
}
function saveProgramSettings(){
  syncProgramEditor();save();renderWorkout('A');renderWorkout('B');updateProgress();renderProgramEditor();toast('Program, set ve tekrar ayarları kaydedildi.');
}
function addExercise(code){
  syncProgramEditor();
  const id=`custom-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;
  programs[code].exercises.push({id,name:'Yeni Hareket',sets:3,reps:'8-12',rest:90,rir:'1-2 RIR',video:'',note:''});
  state.programs=programs;save();renderProgramEditor();
  setTimeout(()=>document.querySelectorAll(`.program-name[data-code="${code}"]`)[programs[code].exercises.length-1]?.focus(),0);
}
function deleteExercise(code,index){
  syncProgramEditor();
  const e=programs[code].exercises[index];if(!e)return;
  if(!confirm(`"${e.name}" hareketi programdan silinsin mi? Geçmiş antrenman kayıtları silinmez.`))return;
  programs[code].exercises.splice(index,1);state.programs=programs;save();renderProgramEditor();renderWorkout(code);updateProgress();toast('Hareket programdan silindi.');
}
function moveExercise(code,index,direction){
  syncProgramEditor();
  const target=index+direction;if(target<0||target>=programs[code].exercises.length)return;
  [programs[code].exercises[index],programs[code].exercises[target]]=[programs[code].exercises[target],programs[code].exercises[index]];
  state.programs=programs;save();renderProgramEditor();renderWorkout(code);
}
function resetProgramSettings(){
  if(!confirm('Program başlıkları, hareketler, setler, tekrarlar ve video bağlantıları varsayılana dönsün mü? Geçmiş kayıtların korunur.'))return;
  programs=ensureProgramShape(clone(defaultPrograms));state.programs=programs;save();renderWorkout('A');renderWorkout('B');updateProgress();renderProgramEditor();toast('Program varsayılana döndürüldü.');
}
