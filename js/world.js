/*global Tube, Tile, Bird, Background, Ground */

'use strict';

function World(canvas) {
    this.objects = [
        new Background(),
        new Ground(),
        new Bird()
    ];
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
}

World.prototype.step = function () {
    var object;
    for (object = 0; object < this.objects.length; object += 1) {
        if (this.objects[object].step) {
            this.objects[object].step(this);
        }
    }
};

World.prototype.draw = function () {
    var object;
    for (object = 0; object < this.objects.length; object += 1) {
        if (this.objects[object].draw) {
            this.objects[object].draw(this.context, this.canvas);
        }
    }
};

World.prototype.collision = function (a, b) {
    if (a.y + a.height <= b.y) {
        return false;
    }
    if (a.y >= b.y + b.height) {
        return false;
    }
    if (a.x + a.width <= b.x) {
        return false;
    }
    if (a.x >= b.x + b.width) {
        return false;
    }
    return true;
};

World.prototype.has = function (type) {
    var object;
    for (object = 0; object < this.objects.length; object += 1) {
        if (this.objects[object] instanceof type) {
            return true;
        }
    }
    return false;
};

World.prototype.addTube = function () {
    var gap, height;
    gap = 50;
    height = (this.canvas.height - gap) * Math.random();
    this.objects.push(new Tube(gap, this.canvas.width, 20, height));
    this.objects.push(new Tile(this.canvas.width - 200, height, 107, 107, 2));
};

World.prototype.remove = function (type) {
    var object;
    for (object = 0; object < this.objects.length; object += 1) {
        if (this.objects[object] instanceof type) {
            this.objects.splice(object);
            break;
        }
    }
}
