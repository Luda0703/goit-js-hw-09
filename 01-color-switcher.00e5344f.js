!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body");e.addEventListener("click",(function(){d=setInterval(n,1e3),e.disabled=!0,e.disabled&&(t.disabled=!1)})),t.addEventListener("click",(function(){clearInterval(d),t.disabled=!0,t.disabled&&(e.disabled=!1)}));var d=null;function n(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.00e5344f.js.map