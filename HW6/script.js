/*
Author: Anabel Assante
File Name: HW4 index.html
Date: 02/22/2026
Purpose: HW 6 - Starting Memory Game
*/

//defining my set amount of images, card back, and flip.
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];

var backImage = "images/back.png";

var trueImage = new Array();

//printing the required amount of card backs, so later function can assign front img
function printBlankCard()
{
    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src = backImage;
    }
}

//assigning of front image.
function createRandomImageArray()
{
    //respective image paths 6 pairs for 12 cards
    var frontImage = ["images/water.png", "images/fire.png", "images/dark.png", "images/grass.png", "images/steel.png", "images/electric.png"];
    //6 0's -> 12/2 = 6.  Required for arrays to work properly.
    var count = [0,0,0,0,0,0];
    //12 image tags, start with 0 
    while(trueImage.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * frontImage.length)
        //each img can only be used 2 times respectively
        if(count[randomNumber] < 2)
        {
            trueImage.push(frontImage[randomNumber]);
            //math includes 0, adding 1 makes us get to 2
            count[randomNumber] = count[randomNumber] + 1;
        }
    }

}

//flipping the card
function flipImage(number)
{
    document.getElementById(imageTags[number]).src = trueImage[number];
}
//refresh board button for quick replayability/bug fixes
function refreshPage(){
    window.location.reload();
}


