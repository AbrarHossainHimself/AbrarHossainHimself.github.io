(function(){
  var r=document.documentElement;
  var tb=document.getElementById('theme');
  if(tb)tb.addEventListener('click',function(){
    var dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
    var n=dark?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}
  });
  var nl=document.getElementById('news-list'),nb=document.getElementById('news-toggle');
  if(nl&&nb){
    var label=nb.textContent;
    nb.addEventListener('click',function(){
      var o=nl.classList.toggle('all');nb.setAttribute('aria-expanded',o);nb.textContent=o?'Show fewer':label;
    });
  }
  document.querySelectorAll('[data-abs]').forEach(function(b){
    b.addEventListener('click',function(){
      var el=document.getElementById(b.getAttribute('aria-controls')),o=el.classList.toggle('open');
      b.setAttribute('aria-expanded',o);b.textContent=o?'hide abstract':'abstract';
    });
  });
})();
