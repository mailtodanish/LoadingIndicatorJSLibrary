/*
  __version__: loadingindicatorjslibrary v1.0.0
  __author__ : mohammad ahshan danish
  __detail__:  Loading indicator JS library
  __copyright__: 2022 
  __licence__: MIT license 
  */
'use strict';

class Loader {

    constructor(elementId,options={}){
         let settings = Object.assign({
             innerText: "Loading",
             uniqueId: Math.random()
         },options);
         Object.freeze(settings);
 
         this.dom = document.getElementById(elementId);
         this.settings=settings;
         this.loadingDom= this.createLoadingIcon();
         
    }
 
    createLoadingIcon=()=>{
         let loadingIndicatorElement = document.createElement("div");
         loadingIndicatorElement.setAttribute(
             "id",
             `loading-icon-${this.settings.uniqueId}`
         );
         loadingIndicatorElement.innerText = this.settings.innerText;
         loadingIndicatorElement.setAttribute(
             "style",
             `position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%); font-weight: 600;
             background: white;      
             padding: 5px;
             padding-left: 10px;
             padding-right: 10px;`
         );
         let timeCounterElement = document.createElement("div");
         timeCounterElement.setAttribute(
             "id",
             `loading-time-counter-${this.settings.uniqueId}`
         );
         timeCounterElement.setAttribute(
             "style",
             `font-weight: 400;
         font-size: 12px;`
         );
         timeCounterElement.innerText = 0;
         loadingIndicatorElement.appendChild(timeCounterElement);
         return loadingIndicatorElement;
 };
 
 start =()=>{
     this.timeCounter = setTimeout(()=>{
         let time_count = document.getElementById( `loading-time-counter-${this.settings.uniqueId}`);
         if(time_count)time_count.innerHTML=`${parseInt(time_count.innerHTML) + 1} sec`;
         this.start();
     },1000);
 }
 countTimeTaken=()=>{
     this.start();
 }
 
 display=()=>{
     this.dom.style.filter="blur(5px)";
     if(!this.dom.parentElement){
         console.error("Element don't have any parent element");
     }
     this.dom.parentElement.appendChild(this.loadingDom);
     this.countTimeTaken();
 }
 
 remove = () =>{
     this.dom.style.filter = "unset";
     clearInterval(this.timeCounter);
     this.loadingDom.remove();
 }
 
 }

module.exports = Loader;
