'use strict';

function Tile(x, y, width, height, value) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.value = value;

    this.backgrounds = {
        2: '#eee4da',
        4: '#ede0c8',
        8: '#f78e48',
        16: '#fc5e2e',
        32: '#ff3333',
        64: '#ff0000',
        128: '#edcf72',
        256: '#edcc61',
        512: '#edc850',
        1028: '#edc53f'
    };

    this.color = "black";
    this.font = "55px Arial";
}

Tile.prototype.step = function () {
    this.x -= 1;
};

Tile.prototype.draw = function (context) {
    context.fillStyle = this.backgrounds[this.value];
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.color;
    context.font = this.font;
    context.fillText(this.value, this.x + this.width / 2 - 20, this.y + this.height / 2 + 20);
};

Tile.prototype.jump = function () {
    this.y += 1;
};
