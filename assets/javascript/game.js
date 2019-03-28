
//function added to make sure the code doesn't start until the page loads
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
    $("#loses").text(loses);


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
    console.log(blueGem , greenGem , redGem , yellowGem);
    
    $("#blue-gem").on("click", function() {
        yourNumber = yourNumber + blueGem;

        console.log("New yourNumber= " + yourNumber);
    });












});

