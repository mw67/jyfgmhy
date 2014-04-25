'use strict';

function Background() {
    this.color = '#faf8ef';
}

Background.prototype.draw = function (context, canvas) {
    context.fillStyle = this.color;
    context.fillRect(0, 0, canvas.width, canvas.height);
};
