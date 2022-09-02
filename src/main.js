function Constructor(elementId, options = {}) {

    this.element = document.getElementsById(elementId);
}

Constructor.prototype.init = function() {
    this.element.style.filter = 'blur(5px)';
}

export default Constructor;