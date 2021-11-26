new p5();
var Img;
function preload(){
    
    
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    Img=loadImage('https://www.animatedimages.org/data/media/492/animated-fireworks-image-0065.gif');
    
}
function draw() {
    background(0,0, 0);
    image(Img,100, 100);
}