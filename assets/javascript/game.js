
//function added to make sure the code doesn't start until the page loads
$(document).ready(function() { ;





    //global variables
    var wins = 0;
    var loses = 0;
    var totalNumber
    var yourNumber = 0;
    var blueGem;
    var greenGem;
    var redGem;
    var yellowGem;

    //append the wins and loses to the HTML
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
    //buttons that add the gemstone values
    $("#blue-gemstone").on("click", function() {
        yourNumber = yourNumber + blueGem;

        console.log(yourNumber);

        $("#your-total").text(yourNumber);
            if(yourNumber === totalNumber){
                winner();
            }
            else if(yourNumber > totalNumber){
                loser();
            }
        
    });
    $("#green-gemstone").on("click", function() { 
        yourNumber = yourNumber + greenGem;
        console.log(yourNumber);
    
        $("#your-total").text(yourNumber);
            if(yourNumber === totalNumber) {
            winner();
            }
            else if(yourNumber > totalNumber){
            loser();
            }
    });
    $("#red-gemstone").on("click", function() {
        yourNumber = yourNumber + redGem;
        console.log(yourNumber);
        $("#your-total").text(yourNumber);
            if(yourNumber === totalNumber) {
                winner();
            }
            else if(yourNumber > totalNumber) {
                loser();
            }
    });
    $("#yellow-gemstone").on("click", function() {
        yourNumber = yourNumber + yellowGem;
        console.log(yourNumber);
        $("#your-total").text(yourNumber);
            if(yourNumber === totalNumber) {
                winner();
            }
            else if(yourNumber > totalNumber) {
                loser();
            }
        });
        
        
    function winner() {
    alert ("Winner!");
    wins++;
    $("#wins").text(wins);
    reset();
    }

    function loser() {
    alert ("Loser!");
    loses++;
    $("#loses").text(loses);
    reset();
    }


    function reset() {
    totalNumber = Math.floor(Math.random() * 101 + 19);
    $("#totalNumber").text(totalNumber);
    blueGem = Math.floor(Math.random() * 12 + 1);
    greenGem = Math.floor(Math.random() * 12 + 1);
    redGem = Math.floor(Math.random() * 12 + 1);
    yellowGem = Math.floor(Math.random() * 12 + 1);
    yourNumber = 0;
    $("#your-total").text(yourNumber);
    console.log(totalNumber , blueGem , greenGem , redGem , yellowGem)
    }










});

