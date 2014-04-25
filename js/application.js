/*jslint browser:true */
/*global Tube, Bird, World */

'use strict';

function gameOver(interval) {
    console.log('game over');
    clearInterval(interval);
}

function step(world, interval) {
    world.draw();
    world.step();
    if (!world.has(Tube)) {
        world.addTube();
    }
    //if (!world.has(Bird)) {
    //    gameOver(interval);
    //}
}

function newGame() {
    var canvas, world, keys, interval;

    canvas = document.getElementById("canvas");
    world = new World(canvas);

    keys = {
        32: world.objects[2].jump,
        38: world.objects[2].jump,
        'click': world.objects[2].jump
    };

    document.addEventListener("keydown", function (event) {
        event.preventDefault();
        if (keys.hasOwnProperty(event.which)) {
            keys[event.which]();
        }
    });

    document.addEventListener("click", function (event) {
        event.preventDefault();
        if (keys.click) {
            keys.click();
        }
    });

    interval = setInterval(function () { step(world, interval); }, 1);
}

newGame();
