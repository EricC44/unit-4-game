//global variables
var wins = 0;
var loses = 0;
var totalNumber;
var yourNumber;
var newGame = true;
var minTotal = 19;
var maxTotal = 120;
const min = 19;
const max = 120;
var blueGem;
var greenGem;
var redGem;
var yellowGem;



//This is going to be picking my total number at random
var randomNumberTotal = randomNumberTotal(minTotal , maxTotal);
function randomNumberTotal() {

    
    
    return Math.floor(Math.random() * 101) + 19; 
     

}
console.log(randomNumberTotal);




//This is for picking random values for each gemstone

//For the blue gem
var blueGem = randomBlueGem();

function randomBlueGem() {

    return Math.floor(Math.random() * 12) + 1;
}

console.log(blueGem);

//For the green gem
var greenGem = randomGreenGem();

function randomGreenGem() {

    return Math.floor(Math.random() * 12) + 1;
}

console.log(greenGem)

//For the red gem
var redGem = randomRedGem();

function randomRedGem() {

    return Math.floor(Math.random() * 12) + 1;
}

console.log(redGem);

//For the yellow gem
var yellowGem = randomYellowGem();

function randomYellowGem() {

    return Math.floor(Math.random() * 12) + 1;
}

console.log(yellowGem);

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










