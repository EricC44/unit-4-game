$(document).ready(function() { ;





//global variables
var wins = 0;
var loses = 0;
var totalNumber
var yourNumber;
var blueGem;
var greenGem;
var redGem;
var yellowGem;


$("#wins").text(wins);
$("#wins").text(loses);


//This is going to be picking my total number at random

var totalNumber = Math.floor(Math.random() * 101 + 19)

console.log(totalNumber);
//This should append our value to the totalNumber div
$("#totalNumber").text(totalNumber);






//This is for picking random values for each gemstone
var blueGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;
var redGem = Math.floor(Math.random() * 12) + 1;
var yellowGem = Math.floor(Math.random() * 12) + 1;

$(document).ready(function() {
    $("#blue-gemstone").on("click", function() {
       
        yourNumber += blueGem;
    
        
    });

});

$(document).ready(function() {
    $("#green-gemstone").on("click", "#green-gemstone.jpg", function() {

        yourNumber += greenGem;
    });
});

$(document).ready(function() {
    $("#red-gemstone").on("click", function() {

        yourNumber += redGem;


    });
 
});

$(document).ready(function() {
    $("#yellow-gemstone").on("click", function() {

        yourNumber += yellowGem;


    });


});

function gameOver() {

    if(yourNumber > totalNumber) {
        alert("You Lose")
        newGame = true;
    }

    if(yourNumber === totalNumber) {
        alert("You Win")
        newGame = true;
    }

    if(yourNumber < totalNumber) {
        newGame = false;
    }
}








});

