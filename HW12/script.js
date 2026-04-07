/*
Author: Anabel Assante
File Name: HW12 index.html
Date: 04/06/2026
Purpose: HW 12 - Game Building Start/Audio 
*/

//sprite maker
class Sprites{
    constructor(x, y, height, width, src)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.img = new Image();
        this.img.src = src;
    }
  
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setHeight(height)
    {
       this.height = height;
    }
    setWidth(width)
    {
       this.width = width;
    }
    setImage(src)
    {
        this.img.src = src;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theImage()
    {
        return this.img.src;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
const sprite1 = new Sprites(50, 50, 50, 50, "images/ghost.png");
const sprite2 = new Sprites(300, 150, 75, 75, "images/Pacman.png");

//setting collision animations with frames
let collisionFrames = 0;
const maxCollisionFrames = 10;
const sizeFlux = 20;
//draw();


//drawing the sprites and collision animation
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onCollision();
    sprite1.draw(ctx);
    sprite2.draw(ctx);

}
//prep the document and get the key event
$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
  //grabbing the key function
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);

  if(actualLetter == "w")
    {
        moveUp();
    }
  else if(actualLetter == "s")
    {
        moveDown();
    }
  else if(actualLetter == "d")
    {
        moveRight();
    }
  else if(actualLetter == "a")
    {
        moveLeft();
    }
  }
  //movement functions at a reasonable speed
function moveUp()
{
    sprite1.y-=10;
}
function moveDown()
{
    sprite1.y+=10;
}
function moveLeft()
{
    sprite1.x-=10;
}
function moveRight()
{
    sprite1.x+=10;
}
//colliding function, to check coordinates
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

//enemy movement, made to track sprite 1's movement
function moveEnemy(){
    let dx = sprite1.x - sprite2.x;
    let dy = sprite1.y - sprite2.y;

    let distance = Math.sqrt(dx * dx + dy * dy);
    //challenge but not impossible,
    let speed = 1.5;

    if (distance > 0) {
        sprite2.x += (dx / distance) * speed;
        sprite2.y += (dy / distance) * speed;
    }
}

//check if sprite is going out of bounds, will check and either bounce back or continue through
//like original pacman
function boundCheck(sprite) {
    if(sprite.x + sprite.width < 0) {
        sprite.x = canvas.width;
    }else if (sprite.x > canvas.width){
        sprite.x = -sprite.width;
    }

    if (sprite.y + sprite.height < 0) {
        sprite.y = canvas.height;
    }else if (sprite.y > canvas.height){
        sprite.y = -sprite.height;
    }
}

//collision animation set up: searched forumns to help figure this out
function onCollision() {
    if(collisionFrames > 0) {
        ctx.fillStyle = "rgba(210, 38, 38, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let scale = 1 + (sizeFlux/150) * (collisionFrames/maxCollisionFrames);
        sprite1.width = 50 * scale;
        sprite1.height = 50 * scale;
        sprite2.width = 75 * scale;
        sprite2.height = 75 * scale;

        collisionFrames--;
    } else {
        sprite1.width = 50;
        sprite1.height = 50;
        sprite2.width = 75;
        sprite2.width = 75;
    }
}

//game loop so no need for reload at each collision
function loopGame(){

    var didCollide = hasCollided(sprite1, sprite2);
    let oldX = sprite1.x;
    let oldY = sprite1.y;

    moveEnemy();

    boundCheck(sprite1);
    boundCheck(sprite2);

    if(didCollide)
    {
        sprite1.x = sprite1.x - oldX/2;
        sprite1.y = sprite1.y - oldY/2;

        collisionFrames = maxCollisionFrames;
    }
    draw();

    requestAnimationFrame(loopGame);

}
//draw();
loopGame();

//making sure the images are drawn/loaded
sprite1.img.onload = draw;
sprite2.img.onload = draw;
