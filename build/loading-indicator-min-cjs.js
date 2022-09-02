/*
  __version__: loadingindicatorjslibrary v1.0.0
  __author__ : mohammad ahshan danish
  __detail__:  Loading indicator JS library
  __copyright__: 2022 
  __licence__: MIT license 
  */
'use strict';

function Constructor(elementId, options = {}) {

    this.element = document.getElementsById(elementId);
}

Constructor.prototype.init = function() {
    this.element.style.filter = 'blur(5px)';
};

module.exports = Constructor;
