/*
  __version__: loadingindicatorjslibrary v1.0.0
  __author__ : mohammad ahshan danish
  __detail__:  Loading indicator JS library
  __copyright__: 2022 
  __licence__: MIT license 
  */
'use strict';

function Constructor(elementId, options = {}) {
    let settings = Object.assign({
            innerText: "Loading",
            uniqueId: Math.random(),
        },
        options
    );

    Object.freeze(settings);

    Object.defineProperties(this, {
        dom: { value: document.getElementById(elementId) },
        settings: { value: settings },
        loadingDom: { value: this.createLoadingIcon(settings) },
        timeCounter: { value: null },
    });
}

Constructor.prototype.createLoadingIcon = function(settings) {
    let loadingIndicatorElement = document.createElement("div");
    loadingIndicatorElement.setAttribute(
        "id",
        `loading-icon-${settings.uniqueId}`
    );
    loadingIndicatorElement.innerText = settings.innerText;
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
        `loading-time-counter-${settings.uniqueId}`
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

Constructor.prototype.countTimeTaken = function() {
    this.timeCounter;
    let settings = this.settings;

    function start() {
        setTimeout(() => {
            let time_count = document.getElementById(
                `loading-time-counter-${settings.uniqueId}`
            );
            if (time_count) time_count.innerHTML = `${parseInt(time_count.innerHTML) + 1} sec`;
            start();
        }, 1000);
    }
    start();
};

Constructor.prototype.display = function() {
    this.dom.style.filter = "blur(5px)";
    if (!this.dom.parentElement) {
        console.error("Element dont have any parent element");
    }
    this.dom.parentElement.appendChild(this.loadingDom);
    this.countTimeTaken();
};

Constructor.prototype.remove = function() {
    this.dom.style.filter = "unset";
    clearInterval(this.timeCounter);
    this.loadingDom.remove();

};

module.exports = Constructor;
