'use strict';

function Ground() {
    this.height = 20;
    this.color = '#bbada0';
}

Ground.prototype.draw = function (context, canvas) {
    context.fillStyle = this.color;
    context.fillRect(0, canvas.height - this.height, canvas.width, this.height);
};
