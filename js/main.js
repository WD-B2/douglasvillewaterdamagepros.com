(function(){
  var root=document.documentElement;
  var btn=document.getElementById("menu-btn");
  var drawer=document.getElementById("drawer");
  function setMenu(open){
    root.classList.toggle("menu-open",open);
    if(btn){btn.setAttribute("aria-expanded",open?"true":"false");}
    if(drawer){drawer.setAttribute("aria-hidden",open?"false":"true");}
  }
  if(btn){btn.addEventListener("click",function(){setMenu(!root.classList.contains("menu-open"));});}
  var close=document.getElementById("drawer-close");
  if(close){close.addEventListener("click",function(){setMenu(false);});}
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){setMenu(false);}});
  var mq=window.matchMedia("(max-width:768px)");
  function onMq(){if(!mq.matches){setMenu(false);}}
  if(mq.addEventListener){mq.addEventListener("change",onMq);}else if(mq.addListener){mq.addListener(onMq);}
  var qs=document.querySelectorAll(".faq-q");
  for(var i=0;i<qs.length;i++){
    qs[i].addEventListener("click",function(){
      var a=document.getElementById(this.getAttribute("aria-controls"));
      var open=this.getAttribute("aria-expanded")==="true";
      this.setAttribute("aria-expanded",open?"false":"true");
      if(a){a.style.maxHeight=open?"0px":a.scrollHeight+"px";}
    });
  }
})();
