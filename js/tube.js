'use strict';

function Tube(gap, x, width, height) {
    this.gap = gap;
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.color = '#bbada0';
}

Tube.prototype.step = function (world) {
    var object;
    this.x -= 1;
    if (this.x < 0) {
        world.remove(Tube);
    }
};

Tube.prototype.draw = function (context, canvas) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillRect(this.x, this.height + this.gapHeight, this.width, canvas.height - this.height - this.gap);
};
