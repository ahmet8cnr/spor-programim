'use strict';
function initApp(){
  renderWorkout('A');
  renderWorkout('B');
  updateDashboard();
  updateProgress();
  renderProgramEditor();
  setTimeout(applyLastSetHints,0);
}

document.addEventListener('DOMContentLoaded',initApp);
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=8').catch(()=>{}));
}
