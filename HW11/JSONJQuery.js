/*
Author: Anabel Assante
File Name: HW11 index.html
Date: 03/30/2026
Purpose: HW 11 - JSON and AJAX data
*/

//Making my plug-in that will change the content and make it fadein/fadeout
(function($){
    $.fn.fadeChange = function(contentHTML, fadeOutDuration = 600, fadeInDuration = 600){
        return this.each(function() {
            var $transition = $(this);

            $transition.fadeOut(fadeOutDuration, function(){
                $transition.html(contentHTML);

                $transition.fadeIn(fadeInDuration);
            });
        });
    };
})(jQuery);

//button click function to laod Pokemon Information
function loadPokemon() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
//parsing and grabbing the JSON information to make the code run

            //debugging code, helped if the code broke or could not display information
            var pokemon = data.pokemon || data;
            console.log ("Pokemon Array:", pokemon);
            if(!pokemon || pokemon.length === 0) {
                console.error("Pokemon Array is empty or undefined");
                return;
            }

            //generate a random pokemon number from 1-151
            var randomIndex = Math.floor(Math.random() * pokemon.length);
            var p = pokemon[randomIndex];
    //changing HTML content var bc plug-in does the rest
    var contentHTML = 
            "<h1>" + p.name + "  #" + p.num + "</h1>" +
            "<br><img src ='" + p.img + "' width='120'>" +
            "<table class='info-table'>" +
            "<tr><td><h4>Type:</td></h4><td>" + p.type.join(", ") + "</td></tr>" +
            "<tr><td><h4>Height:</td></h4><td>" + p.height + "</td></tr>" +
            "<tr><td><h4>Weight:</td></h4><td>" + p.weight + "</td></tr>" +
            "</table>";
    //application of plug-in
    $("#pokemonInfo").fadeChange(contentHTML, 600, 600);
        }
    };
    xhttp.open("GET", "pokemon.json", true);
    xhttp.send();
}

//original code trying to get the plug in and transition to work smoothly
/*

            $("#pokemonInfo").displayEdit().fadeOut(600, function (){

            
           $(this).html(
            "<h1>" + p.name + "  #" + p.num + "</h1>" +
            "<br><img src ='" + p.img + "' width='120'>" +
            "<table class='info-table'>" +
            "<tr><td>Type:</td><td>" + p.type.join(", ") + "</td></tr>" +
            "<tr><td>Height:</td><td>" + p.height + "</td></tr>" +
            "<tr><td>Weight:</td><td>" + p.weight + "</td></tr>"
           );

           $(this).fadeIn(600);
        });
        }
    }; */

//original original code, figuring out how to get data to change.  Wanted to keep it because it originally did work but ultiimately pivoted.


/*let pokemonData = [];
const button = document.getElementById("btnSubmit");
const container = document.getElementById("pokemonInfo");


fetch("pokemon.JSON")
    .then(response => response.json())
    .then(data => {pokemonData = data;})
    .catch(error=> console.error("Error loading Data:", error));

button.addEventListener("click", () => {
    if (pokemonData.length === 0) return;


    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    const p = pokemonData[randomIndex];

    container.innerHTML = `
    <h2>${p.name} (#${p.num})</h2>
    <img src="${p.img}" alt="${p.name}">
    <p><strong>Type:</strong> ${p.type.join(", ")}</p>
    <p><strong>Height:</strong> ${p.height}</p>
    <p><strong>Weight:</strong> ${p.weight}</p>
`;
});*/

/*$(document).ready(function () {
    $("button").click(function () {
        $("#pokemonInfo").load("pokemon.json", function(responseText){
            $("#pokemonInfo").html("Pokedex Number: " + p.num + "<br>Name:" + p.name + "<br>Type:" + p.type + "<br>Height:" + p.height + "<br>Weight:" + p.weight);
});
});
})
});*/




/*$(function () {
    $("button").click(function () {
        choosePokemon();
    });
});*/

/*function choosePokemon()
{
    $("#pokemonInfo").html("Pokedex Number: " + pokemon.num + "<br>Name:" + pokemon.name + "<br>Type:" + pokemon.type + "<br>Height:" + pokemon.height + "<br>Weight:" + pokemon.weight);
}*/