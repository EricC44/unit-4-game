//global variables
var wins = 0;
var loses = 0;
var totalNumber;
var yourNumber;
var newGame = true;
var minTotal = 19;
var maxTotal = 120;



//This is going to be picking my total number at random
var randomNumberTotal = randomNumberFromRange(minTotal, maxTotal);
function randomNumberFromRange(min , max) {


    return Math.Floor(Math.random() * (max-min+1)+min);

}
console.log(randomNumberTotal);

//four buttons that will have images of gemstones







//need a random number generator for the crystal and starting values


//when the player clicks on a crystal, it will give them a certian amount of points
//The game will hide the value of the crystal at all times

//player wins when number matches target, player loses when they go over









