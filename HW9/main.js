/*
Author: Anabel Assante
File Name: HW9 index.html
Date: 03/23/2026
Purpose: HW 9 - Animation Intro
*/
//image constants
var seasonSelector = "#seasons";
const images = ["images/winter.jpg", "images/spring.jpg", "images/summer.jpeg", "images/fall.jpg"];
//varying Text Array
var allText = new Array();
class textInfo{
    constructor(selector, description)
    {
        this.selector = selector;
        this.desc = description;
   }

    get theSelector(){
       return this.selector;
    }

   get theDescription(){
       return this.description + "...";
   }
};
//assigning text to Array
function presArray()
{   
    //var randomNumber = Math.floor(Math.random() * imagePath.length);
    let text = new textInfo(".stuff", "Breathe");
    let text1 = new textInfo(".stuff", "Close your eyes");
    let text2 = new textInfo(".stuff", "Relax");
    let text3 = new textInfo(".stuff", "Imagine easier times");
    let text4 = new textInfo(".stuff", "You're ok")

    allText.push(text);
    allText.push(text1);
    allText.push(text2);
    allText.push(text3);
    allText.push(text4);

//failed code , wanted to leave in for learning purposes
   // if(imageNumber===season.length-1) {
    //    imageNumber = 0;
   // } else {
    //    imageNumber++;
    //};
} ;


//calling the Dom to be edited
$(document).ready(function (){
   presArray();
//image changer/movement
    $(function(){
        var images = $("#seasons img"), index = 0;
        setInterval(looper, 5000);
        looper();
    function looper(){
        images.eq(index).fadeIn(1500).animate({left: 5}).animate({top: 15}).animate({left: 0}).animate({top: 10}).delay(3500).fadeOut(2000);
        index = (index + 1) % images.length;
    }
});
//another failed code, learned why it didn't work
    /*var words = ['one', 'two', 'three', 'four', 'five'];
    stuff = $(".stuff"), i = -1;
    var slideshow = setInterval(function(){
        var val = words[++i] || words[i=0];
        stuff.fadeIn().animate({left:10}).delay(1000).fadeOut();
    }, 2000);*/
    /*$.each(words, function(index,val){
        setTimeout(function(){
            $('#stuff').animate({left: 15}, function(){
                $(this).text(val).fadeOut();
            });
        }, index*2000);
    });*/

//intervals for animations
        $("#third").toggle();
        //loop();
        setInterval(moveShape, 1000);
        setInterval(moveCircle, 5000);
        setInterval(loop, 1000);
        setInterval(moveText, 5000);
        setInterval(cycleText, 5000);
        setInterval(cycleShape, 1000);
        setInterval(moveTriangle, 3000);

        //$("seasons").fadeOut().fadeIn();
    //});
//});

//cycle my circles
function cycleShape() {
    const shapes = ["circle", "circle1", "circle2"];
    let index = 0;
    $("#circle").fadeOut(500, function() {
        index = (index + 1) % shapes.length;
        $(this).attr("id", shapes[index]).fadeIn(500);
        cycleShape();
    });
}
//cycleShape();
//move square shape
function moveShape(){
    $("#square").hide(3000);

    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});

    $("#square").show(3000);
}

//texts
const allText = ["Breathe", "Close your eyes", "Relax", "Clear your mind", "You're doing great"]
let index = 0;

function cycleText(){
    $("#text").fadeOut(500, function() {
        index = (index + 1) % allText.length;
        $(this).text(allText[index]).fadeIn(500);
    });
}
//loop text
function loop() {
    $(".stuff").css({left:0});
    $(".stuff").animate({left: '+=400'}, 10000, 'linear', function(){
        loop();
    });
}
loop();
//move text
function moveText(){
    $("#text").animate({top:10}).animate({top:110});
}
//move Circle Shape
function moveCircle(){
    $(".circleShapes").css({top:0});
    $(".circleShapes").animate({top: '+=400'}, 10000, 'linear', function(){
    moveCircle();
    })
    }
    moveCircle();
//move Triangle
function moveTriangle(){
    var div = $("#triangle");
    div.hide(3000);
    div.show(3000);
}
});