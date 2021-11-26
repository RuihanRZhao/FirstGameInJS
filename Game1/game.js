new p5();
const GolobalSize = 100;
//Player Natures
class Player {
    constructor(x, y, life, power) {
        //position
        this.x = x;
        this.y = y;
        this.VAx = window.innerWidth / 2;
        this.VAy = window.innerHeight / 3 * 2;
        //body size
        this.height = 200;
        this.width = 100;
        //move figure
        this.verticalmovement = 0;
        this.horizontalmovement = 0;
        this.verticalforce = 0;
        this.horizontalforce = 0;
        this.LastStopX = x;
        this.LastStopY = y;
        this.order = true;
        //nature of Player
        this.life = life;
        this.power = power;
        this.jumplimit = new Boolean(0);
        this.WeaponHold = "Hand";
        //Weapon
        this.Bow;
        this.Sword;
        this.Hand;
        this.arrow = 0;
    }
}
//weapon
class Weapon {
    constructor(type, range, harm) {
        this.type = type;
        this.x = Link.x;
        this.y = Link.y;
        this.range = range;
        this.harm = harm;
        this.CD = 0;
        this.image;
    }
}
//Brick
class WallBrick {
    constructor(x, y, life) {
        this.x = x;
        this.y = y;
        this.VAx;
        this.VAy;
        this.life = life;
        this.size = GolobalSize;
    }
}
//LuckyBox
class Box {
    constructor(x, y, treasure, num) {
        this.x = x * 100;
        this.y = y * 100;
        this.treasure = treasure;
        this.number = num;
        this.usage = false;
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
class Monster {
    constructor() {
        this.life = 100;
        this.headImg;
        this.bodyImg;
        this.headX = 4100;
        this.headY = 3900;
        this.bodyX;
        this.bodyY;
        this.die = false;
    }
}
//arrow
class Arrow {
    constructor() {
        this.x;
        this.y;
        this.direction;
        this.speed = 15;
        this.shot = false;
    }
}
////create objectes
//Bricks
var Wall = new Array(62);
for (let i = 0; i < 62; i++) {
    Wall[i] = new Array(50);
}
let WallLife = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, 0],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, 0],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +1, +0, +0, -0, +0, +0, +1, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +0, +0, +0, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +0, +0, +0, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +1, +1, +0, +0, -1, +0, +0, +0, +0, +1, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +0, +0, +0, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +1, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +1, +0, +0, +0, +0, +1, +1, +1, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +1, +1, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +1, +1, +1, +1, +1, +1, +1, +0, +0, +1, +1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +1, -1, +1, +1, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +1, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +1, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +1, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +1, +0, +0, +0, +1, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +1, +1, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +1, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +1, +1, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +1, +0, +0, +1, +1, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +1, +0, +0, +0, +0, -1, +0, +0, +1, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +1, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, -1, +0, +1, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +1, +1, +1, +0, +0, +0, +1, +0, +0, +0, +0, +0, +1, +0, +0, +1, +0, +0, +0, +0, +0, +1, +1, +0, -1, +0, +0, +0, +0, +1, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +1, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +1, +1, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +1, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +1, +1, +1, +1, +1, +1, -1, +1, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +1, +0, +0, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +1, +1, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +0, +0, +0, +1, -1, +0, +0, +0, +0, +1, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, -1, +0, +0, +0, +1, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +1, +1, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +1, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +1, +0, +0, -1, +0, +0, +1, +0, +0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, +0, +0, +0, -1, -1, -1],
    [-1, +0, +1, +1, +0, +0, +0, +0, +0, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, -1, +0, +0, +0, +0, +1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, +0, +0, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +1, +0, +0, +0, +0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, +0, +0, +0, -1],
    [-1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +1, +1, +0, +0, +0, -1, +0, +0, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [+0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +1, +1, +1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1],
    [+0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, -1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, +1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];
function Life(x) {
    let L = (Math.floor(Math.random() * 3) + 3);
    switch (x) {
        case -1: { L = -1; break; }
        case +1: { break; }
        case 0: { L = 0; break; }
    }
    return L;
}
for (let i = 0; i < 62; i++) {
    for (let ii = 0; ii < 50; ii++) {
        Wall[i][ii] = new WallBrick(i * 100, ii * 100, Life(WallLife[ii][i]));
    }
}
//Player
var Link = new Player(0, 4700, 1, 1);
//Final Boss
var Gano = new Monster();
GanobodyX = [4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100, 4100];
GanobodyY = [3855, 3810, 3765, 3720, 3675, 3630, 3585, 3540, 3495, 3450, 3405, 3360, 3315, 3270, 3225, 3180, 3135, 3090, 3045, 3000, 2955, 2910, 2865, 2820, 2775, 2730, 2685, 2640, 2595, 2550, 2505, 2460, 2415, 2370, 2325, 2280, 2235, 2190, 2145, 2100, 2055, 2010, 1965, 1920, 1875, 1830, 1785, 1740, 1695, 1650];

//Weapon
Link.Sword = new Weapon("Sword", 2 * GolobalSize, 1);
Link.Bow = new Weapon("Bow", -1, 1);
Link.Hand = new Weapon("Hand", 1 * GolobalSize, 1);
//boxes and treasures
var boxQ = new Array();
boxQ[00] = new Box(01, 38, "power", +1);
boxQ[01] = new Box(06, 41, "arrow", +2);
boxQ[02] = new Box(12, 38, "life", +1);
boxQ[03] = new Box(18, 37, "arrow", +1);
boxQ[04] = new Box(27, 41, "power", -1);
boxQ[05] = new Box(24, 39, "life", -1);
boxQ[06] = new Box(02, 34, "life", +1);
boxQ[07] = new Box(24, 07, "arrow", +2);
boxQ[08] = new Box(29, 07, "arrow", +1);
boxQ[09] = new Box(05, 07, "power", +15);
boxQ[10] = new Box(04, 08, "life", -5);
boxQ[11] = new Box(05, 08, "arrow", +20);
boxQ[12] = new Box(06, 08, "life", -5);
boxQ[13] = new Box(13, 14, "life", +15);
boxQ[14] = new Box(24, 12, "arrow", +1);
boxQ[15] = new Box(28, 13, "life", +2);
boxQ[16] = new Box(22, 16, "power", -1);
boxQ[17] = new Box(30, 22, "life", +1);
boxQ[18] = new Box(08, 24, "arrow", +2);
boxQ[19] = new Box(22, 24, "arrow", +1);
boxQ[20] = new Box(26, 24, "life", -1);
boxQ[21] = new Box(12, 30, "life", +2);
boxQ[22] = new Box(16, 28, "arrow", +5);
boxQ[23] = new Box(25, 26, "power", -1);
boxQ[24] = new Box(29, 27, "life", +3);
boxQ[25] = new Box(22, 27, "power", +3);
boxQ[26] = new Box(35, 11, "arrow", +1);
boxQ[27] = new Box(36, 26, "arrow", +5);
boxQ[28] = new Box(33, 39, "power", +1);
boxQ[29] = new Box(36, 46, "life", -1);
//UI information
var Game1_OS = new OperatingSystem();
//images
var LinkStand, LinkRun = new Array(8), LinkJump = new Array(6), ArrowImg, BrickImg = new Array(5), BoxImg;

//////------------------------------------system part---------------------------
function preload() {
    ////images
    ///Link
    //stand
    LinkStand = loadImage("Game1/image/stand.png");
    //walk
    for (let i = 0; i < 8; i++) {
        LinkRun[i] = loadImage("Game1/image/" + "walk" + (i + 1) + ".png");
    }
    //jump
    for (let i = 0; i < 6; i++) {
        LinkJump[i] = loadImage("Game1/image/" + "jump" + (i + 1) + ".png");
    }
    ///Monster
    Gano.headImg = loadImage("Game1/image/Head.png");
    Gano.bodyImg = loadImage("Game1/image/Body.png");
    ///Weapon
    Link.Bow.image = loadImage("Game1/image/" + "Bow" + ".png");
    Link.Sword.image = loadImage("Game1/image/" + "Sword" + ".png");
    Link.Hand.image = loadImage("Game1/image/" + "Hand" + ".png");
    //Arrow
    ArrowImg = loadImage("Game1/image/" + "Arrow" + ".png");
    //Brick
    for (let i = 0; i < 5; i++) {
        BrickImg[i] = loadImage("Game1/image/" + "brick" + (i + 1) + ".png");
    }
    BrickImgBas = loadImage("Game1/image/" + "brickBas" + ".png");
    //box
    BoxImg = loadImage("Game1/image/" + "box.png");
    //UI
    Game1_OS.lifeImg = loadImage("ShareResourse/image/life.png");
    Game1_OS.powerImg = loadImage("ShareResourse/image/power.png");
    Game1_OS.arrowImg = loadImage("Game1/image/Arrow.png");
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}
function draw() {
    noStroke();
    background(135, 206, 235);
    //Write new code below, make a new function while new part finished
    if (!Game1_OS.pause) Game1part();
    UserInterface();

}
//-------------------------main parts-----------------------------
function Game1part() {
    if (!Gano.die) {
        /////the scope Link can see
        MovementForceJudging();
        //ArrowMove();
        BoxView();
        Wallview(Link.WeaponHold);
        /////the position of Link
        LinkView(Link.WeaponHold);
        ArrowWalk();
        MonsterViewAttack();
    }

    //If died, replay this part
    GanoDie();
    ////reset values
    Link.horizontalmovement = 0;
    Link.verticalmovement = 0;
}
function UserInterface() {
    if (!Game1_OS.pause) LinkInformation();
    if (Game1_OS.pause) PauseUI();
}
////---------------------functions------------
//game1 part
function MovementForceJudging() {
    ////basic movement
    //Left & Right
    if (keyIsDown(65)) {
        Link.horizontalmovement -= 5;
        Link.order = false;
    }
    if (keyIsDown(68)) {
        Link.horizontalmovement += 5;
        Link.order = true;
    }
    if (keyIsDown(65) && keyIsDown(16)) {
        Link.horizontalmovement -= 10;
        Link.order = false;
    }
    if (keyIsDown(68) && keyIsDown(16)) {
        Link.horizontalmovement += 10;
        Link.order = true;
    }
    //gravity
    Link.verticalforce += 5;
    //jump force
    let No1, No2;
    Link.jumplimit = 0;
    if ((Wall[Math.floor((Link.x) / 100)][Math.floor((Link.y) / 100) + 2].life) == 0) {
        No1 = -1;
    } else {
        No1 = (Link.y + 200 - Wall[Math.floor((Link.x) / 100)][Math.floor((Link.y) / 100) + 2].y);
    }
    if ((Wall[Math.floor((Link.x + 99) / 100)][Math.floor((Link.y) / 100) + 2].life) == 0) {
        No2 = -1;
    } else {
        No2 = (Link.y + 200 - Wall[Math.floor((Link.x + 99) / 100)][Math.floor((Link.y) / 100) + 2].y);
    }
    Link.jumplimit += (No1 * No2);

    if (keyIsDown(87) && !Boolean(Link.jumplimit)) {
        Link.verticalforce = -55;
    }
    ////force to movement
    Link.horizontalmovement += Link.horizontalforce;
    Link.verticalmovement += Link.verticalforce;
    ////Judging the impact and make sure the final movement
    for (let ix = Math.floor((Link.x + Link.horizontalmovement) / 100); (ix <= Math.floor((Link.x + Link.horizontalmovement + 100) / 100) && ix < 62); ix++) {
        for (let iy = Math.floor((Link.y + Link.verticalmovement) / 100); (iy <= Math.floor((Link.y + Link.verticalmovement + 200) / 100) && iy < 50); iy++) {
            if (ix < 0 || iy < 0) continue;

            if (Wall[ix][iy].life == 0) continue;
            //left
            if (((Link.x + Link.horizontalmovement) < (Wall[ix][iy].x + 100) && (Link.x + Link.horizontalmovement) > (Wall[ix][iy].x)) && ((Link.y) > (Wall[ix][iy].y - 100) && (Link.y) < (Wall[ix][iy].y + 100))) {
                Link.horizontalmovement = (Wall[ix][iy].x + 100 - Link.x);
                Link.horizontalforce = 0;
            }
            //right
            if (((Link.x + Link.horizontalmovement + 100) > (Wall[ix][iy].x) && (Link.x + Link.horizontalmovement + 100) < (Wall[ix][iy].x + 100)) && ((Link.y) > (Wall[ix][iy].y - 100) && (Link.y) < (Wall[ix][iy].y + 100))) {
                Link.horizontalmovement = (Wall[ix][iy].x - 100 - Link.x);
                Link.horizontalforce = 0;
            }
            //ground
            if (((Link.y + Link.verticalmovement + 200) > (Wall[ix][iy].y) && (Link.y + Link.verticalmovement + 200) < (Wall[ix][iy].y + 100)) && ((Link.x + Link.horizontalmovement) > (Wall[ix][iy].x - 100) && (Link.x + Link.horizontalmovement) < (Wall[ix][iy].x + 100))) {
                Link.verticalmovement = (Wall[ix][iy].y - 200 - Link.y);
                Link.verticalforce = 0;
            }
            //roof
            if (((Link.y + Link.verticalmovement) < (Wall[ix][iy].y + 100) && (Link.y + Link.verticalmovement) > (Wall[ix][iy].y)) && ((Link.x + Link.horizontalmovement) > (Wall[ix][iy].x - 100) && (Link.x + Link.horizontalmovement) < (Wall[ix][iy].x + 100))) {
                Link.verticalmovement = (Wall[ix][iy].y + 100 - Link.y);
                Link.verticalforce = 0;
            }
        }
    }
    ////Moving
    Link.x += Link.horizontalmovement;
    Link.y += Link.verticalmovement;
    //boundary
    if (Link.y > 4800) Link.y = 4700;
}
//Wall print
function Wallview() {
    //genrate the position of map
    for (let i = 0; i < 62; i++) {
        for (let ii = 0; ii < 50; ii++) {
            Wall[i][ii].VAx = Wall[i][ii].x - Link.x + Link.VAx;
            Wall[i][ii].VAy = Wall[i][ii].y - Link.y + Link.VAy;
        }
    }
    //show the view
    for (let i = 0; i < 62; i++) {
        for (let ii = 0; ii < 50; ii++) {
            switch (Math.round(Wall[i][ii].life)) {
                case -1: { image(BrickImgBas, Wall[i][ii].VAx, Wall[i][ii].VAy, Wall[i][ii].size, Wall[i][ii].size); break; }
                case +0: { break; }
                case +1: { image(BrickImg[0], Wall[i][ii].VAx, Wall[i][ii].VAy, Wall[i][ii].size, Wall[i][ii].size); break; }
                case +2: { image(BrickImg[1], Wall[i][ii].VAx, Wall[i][ii].VAy, Wall[i][ii].size, Wall[i][ii].size); break; }
                case +3: { image(BrickImg[2], Wall[i][ii].VAx, Wall[i][ii].VAy, Wall[i][ii].size, Wall[i][ii].size); break; }
                case +4: { image(BrickImg[3], Wall[i][ii].VAx, Wall[i][ii].VAy, Wall[i][ii].size, Wall[i][ii].size); break; }
                case +5: { image(BrickImg[4], Wall[i][ii].VAx, Wall[i][ii].VAy, Wall[i][ii].size, Wall[i][ii].size); break; }
            }
        }
    }
}
function BoxView() {
    for (let i = 0; i < 30; i++) {
        if (!boxQ[i].usage) {
            if (Link.x > boxQ[i].x - 100 && Link.x < boxQ[i].x + 100 && Link.y > boxQ[i].y - 200 && Link.y < boxQ[i].y + 100) {
                boxQ[i].usage = true;
                switch (boxQ[i].treasure) {
                    case "life": { Link.life += boxQ[i].number; break; }
                    case "power": { Link.power += boxQ[i].number; break; }
                    case "arrow": { Link.arrow += boxQ[i].number; break; }
                }
            }
            image(BoxImg, boxQ[i].x - Link.x + Link.VAx, boxQ[i].y - Link.y + Link.VAy);
        }

    }

}
//Link and Weapon
function LinkView(WeaponType) {
    let StandImage, MoveGif, JumpGif, Weapon;
    StandImage = LinkStand;
    MoveGif = LinkRun;
    JumpGif = LinkJump;
    switch (WeaponType) {
        case "Hand": { Weapon = Link.Hand.image; break; }
        case "Sword": { Weapon = Link.Sword.image; break; }
        case "Bow": { Weapon = Link.Bow.image; break; }
    }
    //Player move
    let X, Y, scaleS, scaleY, WeaponX, WeaponY, WeaponR;
    switch (Link.order) {
        case true: {
            X = Link.VAx;
            Y = Link.VAy;
            scaleS = 1;
            scaleY = 1;
            break;
        }
        case false: {
            X = -Link.VAx - 100;
            Y = Link.VAy;
            scaleS = -1;
            scaleY = 1;
            break;
        }
    }
    (function () {
        push();
        scale(scaleS, scaleY);
        if (Link.horizontalmovement == 0 && Link.verticalforce == 0) {
            Link.LastStopX = Link.x;
            Link.LastStopY = Link.y;
            image(StandImage, X, Y, Link.width, Link.height);
        }
        else if ((Link.x - Link.LastStopX) % 200 < -175 && Link.verticalforce == 0) image(MoveGif[7], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < -150 && Link.verticalforce == 0) image(MoveGif[6], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < -125 && Link.verticalforce == 0) image(MoveGif[5], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < -100 && Link.verticalforce == 0) image(MoveGif[4], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < -75 && Link.verticalforce == 0) image(MoveGif[3], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < -50 && Link.verticalforce == 0) image(MoveGif[2], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < -25 && Link.verticalforce == 0) image(MoveGif[1], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 0 && Link.verticalforce == 0) image(MoveGif[0], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 25 && Link.verticalforce == 0) image(MoveGif[0], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 50 && Link.verticalforce == 0) image(MoveGif[1], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 75 && Link.verticalforce == 0) image(MoveGif[2], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 100 && Link.verticalforce == 0) image(MoveGif[3], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 125 && Link.verticalforce == 0) image(MoveGif[4], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 150 && Link.verticalforce == 0) image(MoveGif[5], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 175 && Link.verticalforce == 0) image(MoveGif[6], X, Y, Link.width, Link.height);
        else if ((Link.x - Link.LastStopX) % 200 < 200 && Link.verticalforce == 0) image(MoveGif[7], X, Y, Link.width, Link.height);
        if (Link.verticalforce != 0) {
            if (Link.verticalforce <= -50) image(JumpGif[0], X, Y, Link.width, Link.height);
            else if (Link.verticalforce <= -30) image(JumpGif[1], X, Y, Link.width, Link.height);
            else if (Link.verticalforce <= -10) image(JumpGif[2], X, Y, Link.width, Link.height);
            else if (Link.verticalforce <= 10) image(JumpGif[3], X, Y, Link.width, Link.height);
            else if (Link.verticalforce <= 30) image(JumpGif[4], X, Y, Link.width, Link.height);
            else if (Link.verticalforce <= 50) image(JumpGif[5], X, Y, Link.width, Link.height);
        }
        pop();
    })();
    push();
    scale(scaleS, scaleY);
    image(Weapon, X + 50, Y + 100);
    pop();
}
//restart
function GanoDie() {
    if (Gano.life <= 0) {
        Gano.die = true;
        fill(0, 0, 0, 128);
        textSize(150);
        fill(30, 144, 255);
        text("You Won!", 100, window.innerHeight / 2);

    }
    console.log(Gano.life);
}
//arrow
var ArrowShot = new Arrow();
function ArrowStart(direct) {
    ArrowShot.x = Link.x + 50;
    ArrowShot.y = Link.y + 100;
    switch (direct) {
        case 38: {
            ArrowShot.direction = 38;
            ArrowShot.y -= ArrowShot.speed;
            break;
        }
        case 40: {
            ArrowShot.direction = 40;
            ArrowShot.y += ArrowShot.speed;
            break;
        }
        case 37: {
            ArrowShot.direction = 37;
            ArrowShot.x -= ArrowShot.speed;
            break;
        }
        case 39: {
            ArrowShot.direction = 39;
            ArrowShot.x += ArrowShot.speed;
            break;
        }
    }
}
function ArrowWalk() {
    push();
    if (ArrowShot.shot) {
        switch (ArrowShot.direction) {
            case 38: {
                ArrowShot.y -= ArrowShot.speed;
                translate(ArrowShot.x - Link.x + Link.VAx, ArrowShot.y - Link.y + Link.VAy);
                rotate(3 * PI / 2);
                if (ArrowShot.shot) { image(ArrowImg, 0, -20); }
                break;
            }
            case 40: {
                ArrowShot.y += ArrowShot.speed;
                translate(ArrowShot.x - Link.x + Link.VAx, ArrowShot.y - Link.y + Link.VAy);
                rotate(PI / 2);
                if (ArrowShot.shot) { image(ArrowImg, 0, -20); }
                break;
            }
            case 37: {
                ArrowShot.x -= ArrowShot.speed;
                scale(-1, 1);
                if (ArrowShot.shot) { image(ArrowImg, -(ArrowShot.x - Link.x + Link.VAx), ArrowShot.y - Link.y + Link.VAy); }
                break;
            }
            case 39: {
                ArrowShot.x += ArrowShot.speed;
                scale(1, 1);
                if (ArrowShot.shot) { image(ArrowImg, ArrowShot.x - Link.x + Link.VAx, ArrowShot.y - Link.y + Link.VAy); }
                break;
            }
        }
    }
    pop();
    if (ArrowShot.x < 0 || ArrowShot.x > 6200 || ArrowShot.y < 0 || ArrowShot.y > 5000) ArrowShot.shot = false;

}
function MonsterViewAttack() {
    for (let i = Math.round(Gano.life / 2); i > 0; i--) {
        image(Gano.bodyImg, GanobodyX[i] - Link.x + Link.VAx, GanobodyY[i] - Link.y + Link.VAy);
        GanobodyX[i] = GanobodyX[i - 1];
        GanobodyY[i] = GanobodyY[i - 1];
        if (ArrowShot.x > GanobodyX[i] && ArrowShot.x < GanobodyX[i] + 50 && ArrowShot.y > GanobodyY[i] && ArrowShot.y < GanobodyY[i] + 50) {
            Gano.life -= Link.power * Link.Bow.harm;
        }
    }
    image(Gano.bodyImg, GanobodyX[0] - Link.x + Link.VAx, GanobodyY[0] - Link.y + Link.VAy);
    GanobodyX[0] = Gano.headX; GanobodyY[0] = Gano.headY;
    if (ArrowShot.x > GanobodyX[0] && ArrowShot.x < GanobodyX[0] + 50 && ArrowShot.y > GanobodyY[0] && ArrowShot.y < GanobodyY[0] + 50) {
        Gano.life -= Link.power * Link.Bow.harm;
    }
    //move
    if (Gano.headX >= 4100 && Gano.headX < 5700 && Gano.headY == 3900) {
        Gano.headX += 25;
    } else if (Gano.headX > 4100 && Gano.headX <= 5700 && Gano.headY == 400) {
        Gano.headX -= 25;
    } else if (Gano.headY >= 400 && Gano.headY < 3900 && Gano.headX == 4100) {
        Gano.headY += 25;
    } else if (Gano.headY > 400 && Gano.headY <= 3900 && Gano.headX == 5700) {
        Gano.headY -= 25;
    }
    image(Gano.headImg, Gano.headX - Link.x + Link.VAx, Gano.headY - Link.y + Link.VAy);
    if (ArrowShot.x > Gano.headX && ArrowShot.x < Gano.headX + 50 && ArrowShot.y > Gano.headY && ArrowShot.y < Gano.headY + 50) {
        Gano.life -= Link.power * Link.Bow.harm;
    }
}
//UI part
function LinkInformation() {
    //life
    for (let i = 0; i < Link.life; i++) {
        image(Game1_OS.lifeImg, 30 + i * 50, 50, 40, 40);
    }
    //power
    for (let i = 0; i < Link.power; i++) {
        image(Game1_OS.powerImg, (30 + i * 50), 100, 40, 40);
    }
    //weapon
    switch (Link.WeaponHold) {
        case "Hand": {
            image(Link.Hand.image, window.innerWidth - 100, 100);
            break;
        }
        case "Sword": {
            image(Link.Sword.image, window.innerWidth - 100, 100);
            break;
        }
        case "Bow": {
            image(Link.Bow.image, window.innerWidth - 100, 100);
            break;
        }
    }
    textSize(32);
    fill(255, 255, 255);
    image(ArrowImg, 30, 250, 100, 23);
    text("    Remain: " + Link.arrow, 180, 270);
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
            Game1_OS.pause = false;
        }
    })();
}
//-------------P5 functions-----------------
function keyPressed() {
    if (keyCode == 32) Game1_OS.pause = true;
    //Attack part
    switch (Link.WeaponHold) {
        case "Hand": {
            //up
            if (keyCode == (38)) {
                for (let i = Math.floor(Link.x / 100); i <= Math.floor((Link.x + 99) / 100); i++) {
                    if (Wall[i][Math.floor(Link.y / 100) - 1].life != -1 && Wall[i][Math.floor(Link.y / 100) - 1].life != 0) {
                        Wall[i][Math.floor(Link.y / 100) - 1].life -= Link.power * Link.Hand.harm / 10;
                        if (Wall[i][Math.floor(Link.y / 100) - 1].life <= 0) Wall[i][Math.floor(Link.y / 100) - 1].life = 0;
                    }
                }
            }
            //down
            if (keyCode == (40)) {
                for (let i = Math.floor(Link.x / 100); i < Math.floor((Link.x + 99) / 100); i++) {
                    if (Wall[i][Math.floor(Link.y / 100) + 2].life != -1 && Wall[i][Math.floor(Link.y / 100) + 2].life != 0) {
                        Wall[i][Math.floor(Link.y / 100) + 2].life -= Link.power * Link.Hand.harm / 10;
                        if (Wall[i][Math.floor(Link.y / 100) + 2].life <= 0) Wall[i][Math.floor(Link.y / 100) + 2].life = 0;
                    }
                }
            }
            //left
            if (keyCode == (37)) {
                for (let i = Math.floor(Link.y / 100); i < Math.floor((Link.y + 200) / 100); i++) {
                    if (Wall[Math.floor(Link.x / 100) - 1][i].life != -1 && Wall[Math.floor(Link.x / 100) - 1][i].life != 0) {
                        Wall[Math.floor(Link.x / 100) - 1][i].life -= Link.power * Link.Hand.harm;
                        if (Wall[Math.floor(Link.x / 100) - 1][i].life <= 0) Wall[Math.floor(Link.x / 100) - 1][i].life = 0;
                    }
                }
            }
            //right
            if (keyCode == (39)) {
                for (let i = Math.floor(Link.y / 100); i < Math.floor((Link.y + 200) / 100); i++) {
                    if (Wall[Math.floor(Link.x / 100) + 1][i].life != -1 && Wall[Math.floor(Link.x / 100) + 1][i].life != 0) {
                        Wall[Math.floor(Link.x / 100) + 1][i].life -= Link.power * Link.Hand.harm;
                        if (Wall[Math.floor(Link.x / 100) + 1][i].life <= 0) Wall[Math.floor(Link.x / 100) + 1][i].life = 0;
                    }
                }
            }
            break;
        }
        case "Sword": {
            //up
            if (keyCode == (38)) {
                for (let i = Math.floor(Link.x / 100); i <= Math.floor((Link.x + 99) / 100); i++) {
                    if (Wall[i][Math.floor(Link.y / 100) - 1].life != -1 && Wall[i][Math.floor(Link.y / 100) - 1].life != 0) {
                        Wall[i][Math.floor(Link.y / 100) - 1].life -= Link.power * Link.Hand.harm / 10;
                        if (Wall[i][Math.floor(Link.y / 100) - 1].life <= 0) Wall[i][Math.floor(Link.y / 100) - 1].life = 0;
                    }
                    if (Wall[i][Math.floor(Link.y / 100) - 2].life != -1 && Wall[i][Math.floor(Link.y / 100) - 2].life != 0) {
                        Wall[i][Math.floor(Link.y / 100) - 2].life -= Link.power * Link.Hand.harm / 10;
                        if (Wall[i][Math.floor(Link.y / 100) - 2].life <= 0) Wall[i][Math.floor(Link.y / 100) - 2].life = 0;
                    }
                }
            }
            //down
            if (keyCode == (40)) {
                for (let i = Math.floor(Link.x / 100); i < Math.floor((Link.x + 99) / 100); i++) {
                    if (Wall[i][Math.floor(Link.y / 100) + 2].life != -1 && Wall[i][Math.floor(Link.y / 100) + 2].life != 0) {
                        Wall[i][Math.floor(Link.y / 100) + 2].life -= Link.power * Link.Hand.harm / 10;
                        if (Wall[i][Math.floor(Link.y / 100) + 2].life <= 0) Wall[i][Math.floor(Link.y / 100) + 2].life = 0;
                    }
                }
            }
            //left
            if (keyCode == (37)) {
                for (let i = Math.floor(Link.y / 100); i < Math.floor((Link.y + 200) / 100); i++) {
                    if (Wall[Math.floor(Link.x / 100) - 1][i].life != -1 && Wall[Math.floor(Link.x / 100) - 1][i].life != 0) {
                        Wall[Math.floor(Link.x / 100) - 1][i].life -= Link.power * Link.Hand.harm;
                        if (Wall[Math.floor(Link.x / 100) - 1][i].life <= 0) Wall[Math.floor(Link.x / 100) - 1][i].life = 0;
                    }
                    if (Wall[Math.floor(Link.x / 100) - 2][i].life != -1 && Wall[Math.floor(Link.x / 100) - 2][i].life != 0) {
                        Wall[Math.floor(Link.x / 100) - 2][i].life -= Link.power * Link.Hand.harm;
                        if (Wall[Math.floor(Link.x / 100) - 2][i].life <= 0) Wall[Math.floor(Link.x / 100) - 2][i].life = 0;
                    }
                }

            }
            //right
            if (keyCode == (39)) {
                for (let i = Math.floor(Link.y / 100); i < Math.floor((Link.y + 200) / 100); i++) {
                    if (Wall[Math.floor(Link.x / 100) + 1][i].life != -1 && Wall[Math.floor(Link.x / 100) + 1][i].life != 0) {
                        Wall[Math.floor(Link.x / 100) + 1][i].life -= Link.power * Link.Hand.harm;
                        if (Wall[Math.floor(Link.x / 100) + 1][i].life <= 0) Wall[Math.floor(Link.x / 100) + 1][i].life = 0;
                    }
                    if (Wall[Math.floor(Link.x / 100) + 2][i].life != -1 && Wall[Math.floor(Link.x / 100) + 2][i].life != 0) {
                        Wall[Math.floor(Link.x / 100) + 2][i].life -= Link.power * Link.Hand.harm;
                        if (Wall[Math.floor(Link.x / 100) + 2][i].life <= 0) Wall[Math.floor(Link.x / 100) + 2][i].life = 0;
                    }
                }
            }
            break;
        }
        case "Bow": {
            if (Link.arrow > 0) {
                if (keyCode == (38)) {
                    ArrowShot.shot = true;
                    Link.arrow--;
                    ArrowStart(38);
                }
                //down
                if (keyCode == (40)) {
                    ArrowShot.shot = true;
                    Link.arrow--;
                    ArrowStart(40);
                }
                //left
                if (keyCode == (37)) {
                    ArrowShot.shot = true;
                    Link.arrow--;
                    ArrowStart(37);
                }
                //right
                if (keyCode == (39)) {
                    ArrowShot.shot = true;
                    Link.arrow--;
                    ArrowStart(39);
                }
            }

            break;
        }
    }
    //Weapon Change
    switch (Link.WeaponHold) {
        case "Hand": {
            if (keyCode == 81) Link.WeaponHold = "Bow";
            if (keyCode == 69) Link.WeaponHold = "Sword";
            break;
        }
        case "Sword": {
            if (keyCode == 81) Link.WeaponHold = "Hand";
            if (keyCode == 69) Link.WeaponHold = "Bow";
            console.log(Link.WeaponHold);
            break;
        }
        case "Bow": {
            if (keyCode == 81) Link.WeaponHold = "Sword";
            if (keyCode == 69) Link.WeaponHold = "Hand";
            break;
        }
    }
    //delet
    if (keyCode == 97) {
        Link.x = 4000;
        Link.y = 3900;
        Link.power = 100;
        Link.arrow = 100;
    }
}
