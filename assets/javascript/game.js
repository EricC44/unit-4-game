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


//need a random number generator for the crystal and starting values


//when the player clicks on a crystal, it will give them a certian amount of points
//The game will hide the value of the crystal at all times

//player wins when number matches target, player loses when they go over









