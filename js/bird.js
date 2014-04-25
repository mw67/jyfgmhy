/*global Tile, Ground, Tube */

'use strict';

function Bird() {
    this.tiles = [new Tile(80, 20, 107, 107, 2)];
}

Bird.prototype.step = function (world) {
    var tile, object;
    for (tile = 0; tile < this.tiles.length; tile += 1) {
        this.tiles[tile].y -= 1;
        for (object = 0; object < world.objects.length; object += 1) {
            if (world.objects[object] instanceof Ground || world.objects[object] instanceof Tube) {
                if (world.collision(this.tiles[tile], world.objects[object])) {
                    this.die(world);
                    return;
                }
            } else if (world.objects[object] instanceof Tile) {
                if (world.collision(this.tiles[tile], world.objects[object])) {
                    this.addTile(world, object);
                }
            }
        }
    }
};

Bird.prototype.draw = function (context, canvas) {
    var tile;
    for (tile = 0; tile < this.tiles.length; tile += 1) {
        this.tiles[tile].draw(context, canvas);
    }
};

Bird.prototype.jump = function () {
    var tile;
    if (!this.tiles) {
        return;
    }
    for (tile = 0; tile < this.tiles.length; tile += 1) {
        this.tiles[tile].jump();
    }
};

Bird.prototype.addTile = function (world, index) {
    var tile = world.objects[index];
    world.objects.splice(index);
    this.tiles.push(tile);
};

Bird.prototype.die = function (world) {
    world.remove(Bird);
};
