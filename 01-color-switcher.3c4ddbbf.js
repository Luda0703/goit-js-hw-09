const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(){a=setInterval(l,1e3),e.disabled=!0,e.disabled&&(t.disabled=!1)})),t.addEventListener("click",(function(){clearInterval(a),t.disabled=!0,t.disabled&&(e.disabled=!1)}));let a=null;function l(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.3c4ddbbf.js.map
