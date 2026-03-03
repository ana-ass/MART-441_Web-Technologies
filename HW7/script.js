/*
Author: Anabel Assante
File Name: HW4 index.html
Date: 02/22/2026
Purpose: HW 6 - Starting Memory Game
*/

//defining my set amount of images, card back, and flip.
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];

var backImage = "images/back.png";
//Match check var
var fNumber = -1;
var sNumber = -1;

//Player information storage
var user = {"firstname":"", "lastname":"", "age":""};

var moves = 0;
var counter = document.querySelector(".moves");
var matches = 0;

var final = {"attempts":"",};

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

//flipping the card and checking for a match
function flipImage(number)
{

    if(fNumber >= 0)
    {
        sNumber = number;
        document.getElementById(imageTags[number]).src = trueImage[sNumber];

    }
    else if(fNumber < 0)
    {
        fNumber = number;
        document.getElementById(imageTags[fNumber]).src = trueImage[fNumber];
    }

    //a non match
    if(trueImage[sNumber] != trueImage[fNumber] && fNumber >= 0 && sNumber >=0)
    {
        setTimeout(imageDisappear, 1000);
    }
    //a match
    else if(trueImage[sNumber] == trueImage[fNumber] && fNumber >= 0 && sNumber >= 0)
    {
        fNumber = -1;
        sNumber = -1;
        matches += 1;
        moves += 1;
        document.getElementById("moves").innerText = moves;
    }
    if (matches == 6){
        localStorage.setItem("finalScore", JSON.stringify(moves));
        window.location = "winindex.html";
    }
}



//flipping the images back over.
function imageDisappear()
{
    console.log(fNumber);
    document.getElementById(imageTags[fNumber]).src = backImage;
    document.getElementById(imageTags[sNumber]).src = backImage;
    fNumber = -1;
    sNumber = -1;
    moves += 1;
    document.getElementById("moves").innerText = moves;
}
//grab PlayerInfo from first page
function addonPlayer()
{
    var firstName = document.getElementById("txtFirst").value;
    var lastName = document.getElementById("txtLast").value;
    var userAge = document.getElementById("txtAge").value;
    user.firstname = firstName;
    user.lastname = lastName;
    user.age = userAge;
    localStorage.setItem("playerInfo", JSON.stringify(user));
    window.location = "index.html";

}
//function attemptCount()
//{ 
    //const finalScore = document.getElementById("moves");
    //const innerTextString = finalScore.innerText;
    //const value = Number(innerTextString); 
    //var finalStat = value;
    //localStorage.setItem("finalCount", JSON.stringify(finalStat));
//}

//display Play Info from first page
function playerInfo()
{
    var PlayInfo = localStorage.getItem("playerInfo");
    user = JSON.parse(PlayInfo);
    console.log(user.firstname);
    console.log(user.lastname);
    console.log(user.age);
    document.getElementById("txtFirst").innerHTML = user.firstname;
    document.getElementById("txtLast").innerHTML = user.lastname;
    document.getElementById("txtAge").innerHTML = user.age;
}
//Displaying Final Attempt Score
function finalCount()
{
    var PlayStats = localStorage.getItem("finalScore");
    moves = JSON.parse(PlayStats);
    console.log(moves);
    document.getElementById("finalMoves").innerHTML = moves;
    //document.getElementById("moves").textContent = final;
}

//refresh board button for quick replayability/bug fixes
function refreshPage(){
    window.location = "indexintro.html";
    localStorage.clear();
}


