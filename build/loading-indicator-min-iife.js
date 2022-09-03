/*
  __version__: loadingindicatorjslibrary v1.0.0
  __author__ : mohammad ahshan danish
  __detail__:  Loading indicator JS library
  __copyright__: 2022 
  __licence__: MIT license 
  */
(function () {
    'use strict';

    function Constructor(elementId, options = {}) {

        Object.defineProperties(this, {
            dom: { value: document.getElementById(elementId) },

        });
    }

    Constructor.prototype.init = function() {
        this.dom.style.filter = 'blur(5px)';
        let loading = document.createElement("div");
        loading.innerText = "Loading";
        loading.setAttribute("style", `position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);`);
        this.dom.parentElement.appendChild(loading);
    };

    Constructor.prototype.remove = function() {

    };

    return Constructor;

})();
