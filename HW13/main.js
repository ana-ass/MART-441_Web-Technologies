/*
Author: Anabel Assante
File Name: HW13 index.html
Date: 04/12/2026
Purpose: HW 13 - Collisions and Collections 
*/

//building my square class, wanted the objects to be easy to scale without losing quality hence why the lack of images.
class Square{

    constructor(xCoord,yCoord,objectHeight,objectWidth, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    get mainColor()
    {
        return this.color;
    }
}

//building my Coin class, so they are separate from the squares
class Coin{

    constructor(xCoord,yCoord,objectHeight,objectWidth, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    get mainColor()
    {
        return this.color;
    }
}

//building my canvas variables
var canvas;
var ctx;
var x = 25;
var y = 25;
var square1, square2;
var score = 0;
var squareArray = [];
var coinArray = [];

//calling my document and keypress event for JS
$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);
    });
});

//setting up my canvas
function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    //making my player and another square, collision is easier with this square 2 added
    square1 = new Square(100, 100, 60, 60, "#1a001a");
    square2 = new Square(750, 550, 200, 200, "#00FFa8");
    //pulling from first JSON, my square data.objects
    $.getJSON("square.JSON", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x, data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();

    });
    //grabbing my coin/collector item information from the respective JSON
    $.getJSON("collect.JSON", function(data) {
        for(var i = 0; i < data.coins.length; i++)
        {
            coinArray.push(
                new Coin(data.coins[i].x, data.coins[i].y, data.coins[i].h, data.coins[i].w, data.coins[i].color));
            
        }
        drawSquare();
    });
}

//play movement code, and constnt collision check
function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
    }
    if(actualLetter == "s")
    {
        moveDown();
    }
    if(actualLetter == "a")
    {
        moveLeft();
    }
    if(actualLetter == "d")
    {
        moveRight();
    }

    //collision code - calling Old X and Old Y to allow for bounce back of the square upon collision.
    var test = hasCollided(square1, square2);
    var test2 = false;
    let oldX = square1.x;
    let oldY = square1.y;
    for(var i = 0; i < squareArray.length; i++)
    {
        test2 = hasCollided(square1, squareArray[i]);
        if(test2 === true)
        {
            break;
        }
    }
    if (test || test2)
    {
            square1.x = square1.x - oldX/3;
            square1.y = square1.y - oldY/3;
    }

    //checking for coin collision, counting down the collectible objects by increasing the score and lowering the index
    for(var i = 0; i < coinArray.length; i++)
    {
        if(hasCollided(square1, coinArray[i]))
        {
            coinArray.splice(i, 1);
            score++;
            i--;
        }
    }
    //game over function if no coins exist on the canvas
        if (coinArray.length === 0)
        {
            //timeout helps alert not break the canvas, giving ample time.
            setTimeout(function() {
                alert("Game Over!  You collected all coins!");
            }, 100);
        }

    
    drawSquare();
    boundCheck();
}

//player movement functions defined, 10 pixels give the smoothest movement
function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

//bound check to ensure player character cannot leave boundaries and comes back pacman style.  Easier movement with rigid objects.
function boundCheck() {
    if(square1.x + square1.width < 0) {
        square1.x = canvas.width;
    }else if (square1.x > canvas.width){
        square1.x = -square1.width;
    }

    if (square1.y + square1.height < 0) {
        square1.y = canvas.height;
    }else if (square1.y > canvas.height){
        square1.y = -square1.height;
    }
}

//drawing my squares and my coins.
function drawSquare()
{
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }
    for(var i = 0; i < coinArray.length; i++)
    {
        ctx.beginPath();
        ctx.arc(
            coinArray[i].x + coinArray[i].width / 2, coinArray[i].y + coinArray[i].height / 2, coinArray[i].width / 2, 0, 2 * Math.PI
            );
        ctx.fillStyle = coinArray[i].mainColor;
        ctx.fill();
        ctx.closePath();
        
    }
    //coin draw function, change fill style for easier to read text
    ctx.fillStyle = "#000000";
    ctx.font = "25px Arial";
    ctx.fillText("Score: " + score, 25, 50);
}

//collision function
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) || 
        (object1.y > (object2.y + object2.height)) || 
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

