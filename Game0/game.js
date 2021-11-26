new p5();
//The size of whole game
var Size = 100;
//Player
class Player {
    constructor(x, y, life, power) {
        this.x = x;
        this.y = y;
        this.VAx = window.innerWidth / 2;
        this.VAy = window.innerHeight / 2;
        this.life = life;
        this.power = power;
        this.direction;
    }
}

//maze construct
class MazeBrick {
    constructor(x, y, entity) {
        this.x = x;
        this.VAx = this.x - Link.x;
        this.y = y;
        this.VAy = this.y - Link.y;
        this.size = Size;
        this.entity = entity;
    }
}
class Weapon {
    constructor(name, activated, x, y, sizeX, sizeY) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.VAx;
        this.VAy;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.activation = activated;
        this.Image;
    }
}
class OperatingSystem {
    constructor() {
        this.x;
        this.y;
        this.pause = false;
        this.lifeImg;
        this.powerImg;
        this.arrowImg;
    }
}
//UI information
var Game0_OS = new OperatingSystem();
//Player
var Link = new Player(24.5 * Size, 49.5 * Size, 1, 1);
//Weapon
var Bow = new Weapon("Bow", false, 1, 21, 100, 26);
var Sword = new Weapon("Sword", false, 48, 22, 100, 30);

// image(BowImg,100 - Link.x + Link.VAx,2100 - Link.y + Link.VAy,100,26);
// image(SwordImg,4800 - Link.x + Link.VAx,2200 - Link.y + Link.VAy,100,30);
//Maza
var Maze = new Array(50);
for (let i = 0; i < 50; i++) {
    Maze[i] = new Array(50);
}
(function () {
    let entity = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    for (let i = 0; i < 50; i++) {
        for (let ii = 0; ii < 50; ii++) {
            Maze[ii][i] = new MazeBrick(ii * Size, i * Size, entity[i][ii]);
        }
    }
})();
//Image
var MazeBrickImg, Floor = new Array(5), LinkUpward;
//Game finish signal
var Game0finish = false;

function preload() {
    //soundFormats('mp3', 'ogg');

    MazeBrickImg = loadImage('/Game0/image/brick.png');
    for (let i = 0; i < 5; i++) {
        Floor[i] = loadImage('/Game0/image/' + 'FloorCross' + (i + 1) + '.png');
    }
    LinkUpward = loadImage("/Game0/image/Link.png");
    Bow.Image = loadImage("/Game1/image/Bow.png");
    Sword.Image = loadImage("/Game1/image/Sword.png");
    Game0_OS.lifeImg = loadImage("/ShareResourse/image/life.png");
    Game0_OS.powerImg = loadImage("/ShareResourse/image/power.png");
    Game0_OS.arrowImg = loadImage("/Game1/image/Arrow.png");
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}
function draw() {

    //Game0 part
    if (!Game0finish) {
        noStroke();
        background(128, 128, 128);
        Game0Part();
    } 
    if(Game0finish){
        background(0, 0, 0);
        Game0End();
    }
    UserInterface();


}
//main body
function Game0Part() {
    //the scope Link can see
    if (!Game0_OS.pause) PlayerMove();
    MapView();
    //the position of Link
    LinkView();
    Shadow();
    //Game finish
    if ((Link.x > 2500 && Link.x < 2600) && (Link.y > 0 && Link.y < 100)) Game0finish = true;
}
function Game0End() {
    textSize(70);
    fill(255, 255, 255);
    text("Congratulations! You have passed the Maze!", 100, window.innerHeight / 2 + 00);
    text("You have the permission to finish your mission!", 100, window.innerHeight / 2+ 100);
    text("Do not forget to make yourself stronger on the way!", 100, window.innerHeight / 2 + 200);
    if (!mouseIsPressed && !((mouseX > window.innerWidth / 2 - 200 && mouseX < window.innerWidth / 2 + 200) && (mouseY > window.innerHeight - 100 && mouseY < window.innerHeight))) {
        fill(30, 144, 255);
        rect(window.innerWidth / 2 - 200, window.innerHeight - 100, 400, 100, 20);
        fill(255, 255, 255);
        textSize(50);
        text("Continue!", window.innerWidth / 2 - 110, window.innerHeight - 30);
    } else if (!mouseIsPressed && ((mouseX > window.innerWidth / 2 - 200 && mouseX < window.innerWidth / 2 + 200) && (mouseY > window.innerHeight - 100 && mouseY < window.innerHeight))) {
        fill(60, 174, 285);
        rect(window.innerWidth / 2 - 200, window.innerHeight -100, 400, 100, 20);
        fill(255, 255, 255);
        textSize(60);
        text("Continue!", window.innerWidth / 2 - 130, window.innerHeight  - 30);
    } else if (mouseIsPressed && ((mouseX > window.innerWidth / 2 - 200 && mouseX < window.innerWidth / 2 + 200) && (mouseY > window.innerHeight - 100 && mouseY < window.innerHeight))) {
        fill(0, 114, 225);
        rect(window.innerWidth / 2 - 200, window.innerHeight - 100, 400, 100, 20);
        fill(128, 128, 128);
        textSize(60);
        text("Continue!", window.innerWidth / 2 - 130, window.innerHeight  - 30);
        Game0_OS.pause = false;
    }
}
function UserInterface() {
    LinkInformation();
    if (Game0_OS.pause) PauseUI();
}
//game part analysis
function PlayerMove() {
    if (keyIsDown(87) && TouchWall(Link.x, Link.y - 2)) { Link.y -= 2; Link.direction = "up"; }
    if (keyIsDown(83) && TouchWall(Link.x, Link.y + 2)) { Link.y += 2; Link.direction = "down"; }
    if (keyIsDown(65) && TouchWall(Link.x - 2, Link.y)) { Link.x -= 2; Link.direction = "left"; }
    if (keyIsDown(68) && TouchWall(Link.x + 2, Link.y)) { Link.x += 2; Link.direction = "right"; }
    if (keyIsDown(87) && keyIsDown(16) && TouchWall(Link.x, Link.y - 4)) { Link.y -= 4; Link.direction = "up"; }
    if (keyIsDown(83) && keyIsDown(16) && TouchWall(Link.x, Link.y + 4)) { Link.y += 4; Link.direction = "down"; }
    if (keyIsDown(65) && keyIsDown(16) && TouchWall(Link.x - 4, Link.y)) { Link.x -= 4; Link.direction = "left"; }
    if (keyIsDown(68) && keyIsDown(16) && TouchWall(Link.x + 4, Link.y)) { Link.x += 4; Link.direction = "right"; }
}
function MapView() {
    //measure position of bricks
    for (let i = 0; i < 50; i++) {
        for (let ii = 0; ii < 50; ii++) {
            Maze[i][ii].VAx = Maze[i][ii].x - Link.x + Link.VAx;
            Maze[i][ii].VAy = Maze[i][ii].y - Link.y + Link.VAy;
        }
    }
    //draw map
    for (let i = 0; i < 50; i++) {
        for (let ii = 0; ii < 50; ii++) {
            if (Maze[i][ii].entity == 1) {
                image(MazeBrickImg, Maze[i][ii].VAx, Maze[i][ii].VAy);
            } else {
                let Up = (i >= 0 && i < 50 && (ii - 1) >= 0 && (ii - 1) < 50) ? Maze[i][ii - 1].entity : 1,
                    Down = (i > 0 && i < 50 && (ii + 1) >= 0 && (ii + 1) < 50) ? Maze[i][ii + 1].entity : 1,
                    Left = ((i - 1) >= 0 && (i - 1) < 50 && ii >= 0 && ii < 50) ? Maze[i - 1][ii].entity : 1,
                    Right = ((i + 1) >= 0 && (i + 1) < 50 && ii >= 0 && ii < 50) ? Maze[i + 1][ii].entity : 1;
                push();
                translate(Maze[i][ii].VAx, Maze[i][ii].VAy);
                switch ((Up + Down + Left + Right)) {
                    case 0: {
                        image(Floor[3], 0, 0);
                        break;
                    }
                    case 1: {
                        if (Left == 1) { rotate(0); image(Floor[2], 0, 0); }
                        else if (Right == 1) { rotate(PI); image(Floor[2], -100, -100); }
                        else if (Up == 1) { rotate(PI / 2); image(Floor[2], 0, -100); }
                        else if (Down == 1) { rotate(3 * PI / 2); image(Floor[2], -100, 0); }
                        break;
                    }
                    case 2: {
                        if (Left == 1 && Right == 1) { rotate(0); image(Floor[4], 0, 0); }
                        else if (Up == 1 && Down == 1) { rotate(PI / 2); image(Floor[4], 0, -100); }
                        else if (Left == 1 && Up == 1) { rotate(PI / 2); image(Floor[1], 0, -100); }
                        else if (Left == 1 && Down == 1) { rotate(0); image(Floor[1], 0, 0); }
                        else if (Right == 1 && Up == 1) { rotate(PI); image(Floor[1], -100, -100); }
                        else if (Right == 1 && Down == 1) { rotate(3 * PI / 2); image(Floor[1], -100, 0); }
                        break;
                    }
                    case 3: {
                        if (Up == 0) { rotate(0); image(Floor[0], 0, 0); }
                        else if (Down == 0) { rotate(PI); image(Floor[0], -100, -100); }
                        else if (Right == 0) { rotate(PI / 2); image(Floor[0], 0, -100); }
                        else if (Left == 0) { rotate(3 * PI / 2); image(Floor[0], -100, 0); }
                        break;
                    }
                }
                pop();
            }
        }
    }
    //the view of weapons
    if (Link.x > 100 && Link.x < 200 && Link.y > 2100 && Link.y < 2200) {
        Bow.activation = true;
    }
    if (Link.x > 4800 && Link.x < 4900 && Link.y > 2200 && Link.y < 2300) {
        Sword.activation = true;
    }
    if (!Bow.activation) image(Bow.Image, 100 - Link.x + Link.VAx, 2100 - Link.y + Link.VAy, 100, 26);
    if (!Sword.activation) image(Sword.Image, 4800 - Link.x + Link.VAx, 2200 - Link.y + Link.VAy, 100, 30);
    if (Bow.activation && Sword.activation) Maze[25][0].entity = 0;
}
function LinkView() {
    push();
    translate(Link.VAx - 20, Link.VAy - 20);
    let LinkX, LinkY;
    switch (Link.direction) {
        case "up": { rotate(0); LinkX = 0; LinkY = 0; break; }
        case "down": { rotate(PI); LinkX = -40; LinkY = -40; break; }
        case "left": { rotate(3 * PI / 2); LinkX = -40; LinkY = 0; break; }
        case "right": { rotate(PI / 2); LinkX = 0; LinkY = -40; break; }
    }
    image(LinkUpward, LinkX, LinkY, 40, 40);
    pop();
}
function Shadow() {
    //cover shadow
    fill(0, 0, 0, 255);
    rect(0, 0, window.innerWidth, (window.innerHeight / 8));
    rect(0, (7 * window.innerHeight / 8), window.innerWidth, (window.innerHeight / 8));
    rect(0, (window.innerHeight / 8), (window.innerWidth / 8), (6 * window.innerHeight / 8));
    rect((7 * window.innerWidth / 8), (window.innerHeight / 8), (window.innerWidth / 8), (6 * window.innerHeight / 8));
    fill(0, 0, 0, 150);
    rect(0, 0, window.innerWidth, (window.innerHeight / 4));
    rect(0, (3 * window.innerHeight / 4), window.innerWidth, (window.innerHeight / 4));
    rect(0, (window.innerHeight / 4), (window.innerWidth / 4), (window.innerHeight / 2));
    rect((3 * window.innerWidth / 4), (window.innerHeight / 4), (window.innerWidth / 4), (window.innerHeight / 2));
    fill(0, 0, 0, 100);
    rect(0, 0, window.innerWidth, (3 * window.innerHeight / 8));
    rect(0, (5 * window.innerHeight / 8), window.innerWidth, (3 * window.innerHeight / 8));
    rect(0, (3 * window.innerHeight / 8), (3 * window.innerWidth / 8), (window.innerHeight / 4));
    rect((5 * window.innerWidth / 8), (3 * window.innerHeight / 8), (3 * window.innerWidth / 8), (window.innerHeight / 4));
}
//UI part
function LinkInformation() {
    //life
    for (let i = 0; i < Link.life; i++) {
        image(Game0_OS.lifeImg, 30 + i * 50, 50, 40, 40);
    }
    //power
    for (let i = 0; i < Link.power; i++) {
        image(Game0_OS.powerImg, (30 + i * 50), 100, 40, 40);
    }
    //weapon
    image(Sword.Image, 30, 150, 100, 30);
    textSize(32);
    fill(255, 255, 255);
    text("Activation: " + Sword.activation, 180, 180);
    image(Bow.Image, 30, 200, 100, 26);
    text("Activation: " + Bow.activation, 180, 225);
    image(Game0_OS.arrowImg, 30, 250, 100, 23);
    text("    Remain: 0", 180, 270);
}
function PauseUI() {
    fill(0, 0, 0, 128);
    textSize(150);
    fill(30, 144, 255);
    text("Paused!", 100, window.innerHeight / 2);
    (function () {
        if (!mouseIsPressed && !((mouseX > window.innerWidth / 2 - 200 && mouseX < window.innerWidth / 2 + 200) && (mouseY > window.innerHeight / 2 - 50 && mouseY < window.innerHeight / 2 + 50))) {
            fill(30, 144, 255);
            rect(window.innerWidth / 2 - 200, window.innerHeight / 2 - 50, 400, 100, 20);
            fill(255, 255, 255);
            textSize(50);
            text("Continue!", window.innerWidth / 2 - 110, window.innerHeight / 2 + 20);
        } else if (!mouseIsPressed && ((mouseX > window.innerWidth / 2 - 200 && mouseX < window.innerWidth / 2 + 200) && (mouseY > window.innerHeight / 2 - 50 && mouseY < window.innerHeight / 2 + 50))) {
            fill(60, 174, 285);
            rect(window.innerWidth / 2 - 200, window.innerHeight / 2 - 50, 400, 100, 20);
            fill(255, 255, 255);
            textSize(60);
            text("Continue!", window.innerWidth / 2 - 130, window.innerHeight / 2 + 20);
        } else if (mouseIsPressed && ((mouseX > window.innerWidth / 2 - 200 && mouseX < window.innerWidth / 2 + 200) && (mouseY > window.innerHeight / 2 - 50 && mouseY < window.innerHeight / 2 + 50))) {
            fill(0, 114, 225);
            rect(window.innerWidth / 2 - 200, window.innerHeight / 2 - 50, 400, 100, 20);
            fill(128, 128, 128);
            textSize(60);
            text("Continue!", window.innerWidth / 2 - 130, window.innerHeight / 2 + 20);
            Game0_OS.pause = false;
        }
    })();
}
//function use many times
function TouchWall(x, y) {
    let ifTouch = 1;
    for (let i = Math.floor(x / Size) - 1; (i <= Math.floor(x / Size) + 1 && (i < 50 && i>-1)); i++) {
        for (let ii = Math.floor(y / Size) - 1; (ii <= Math.floor(y / Size) + 1 && ii < 50 && ii>-1); ii++) {
            if (Maze[i][ii].entity == 1) {
                if (x > Maze[i][ii].x - 20 && x < (Maze[i][ii].x + 20 + Size) && y > Maze[i][ii].y - 20 && y < (Maze[i][ii].y + 20 + Size)) {
                    ifTouch *= 0;
                } else {
                    ifTouch *= 1;
                }
            }
        }
    }
    if (ifTouch) return true;
    else return false;
}
//system functions
function keyPressed() {
    if (keyCode == 32) Game0_OS.pause = true;
    //testfiguera
    if (keyCode == 13) {
        Link.x = 2500;
        Link.y = 150;
        Bow.activation = true;
        Sword.activation = true;
    }
}