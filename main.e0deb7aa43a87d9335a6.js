(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);var i=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],s={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")};function a(){var t,n,e=(t=0,n=i.length-1,Math.floor(Math.random()*(n-t+1)+t));s.body.style.background=i[e]}var o={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){a()}),1e3),s.startBtn.setAttribute("disabled","disabled"))},stop:function(){clearInterval(this.intervalId),this.intervalId=null,this.isActive=!1,s.startBtn.removeAttribute("disabled")}};s.startBtn.addEventListener("click",o.start.bind(o)),s.stopBtn.addEventListener("click",o.stop.bind(o));e("L1EO")}},[["QfWi",1]]]);
//# sourceMappingURL=main.e0deb7aa43a87d9335a6.js.map