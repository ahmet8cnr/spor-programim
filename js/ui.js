'use strict';
function showPage(id){document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.page===id));if(id==='progress')updateProgress();requestAnimationFrame(()=>document.getElementById(id).scrollIntoView({behavior:'smooth',block:'start'}))}
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>showPage(t.dataset.page));document.getElementById('chartExercise').onchange=drawChart;document.getElementById('chartMetric').onchange=drawChart;window.addEventListener('resize',()=>document.getElementById('progress').classList.contains('active')&&drawChart());
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='antrenman-yedek-'+new Date().toISOString().slice(0,10)+'.json';a.click();URL.revokeObjectURL(a.href)}
function importData(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);save();location.reload()}catch{toast('Yedek dosyası okunamadı.')}};r.readAsText(f)}
function resetData(){if(confirm('Tüm antrenman kayıtları silinsin mi?')){storage.remove();location.reload()}}

function showInstallHelp(){document.getElementById('installModal').classList.add('show');document.body.style.overflow='hidden'}
function closeInstallHelp(){document.getElementById('installModal').classList.remove('show');document.body.style.overflow=''}
function isIOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)}
function isStandalone(){return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone===true}
