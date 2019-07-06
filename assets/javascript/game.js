
var runningScore = 0;
var desiredNumber = 0;
var wins = 0;
var losses = 0;
var jewelValue1 = 0;
var jewelValue2 = 0;
var jewelValue3 = 0;
var jewelValue4 = 0;



desiredNumber = Math.floor((Math.random() * 120) + 1);

$(document).ready(function () {
    
    $(".desired-score").html(desiredNumber);
});



jewelValue1 = Math.floor((Math.random() * 12) + 1);

$("#jewel1").on("click", function () {

    
    $(".running-score").html(runningScore += jewelValue1);
    gamePlay();
});

jewelValue2 = Math.floor((Math.random() * 12) + 1);

$("#jewel2").on("click", function () {
    
    $(".running-score").html(runningScore += jewelValue2);
    gamePlay();
});

jewelValue3 = Math.floor((Math.random() * 12) + 1);

$("#jewel3").on("click", function () {
    
    $(".running-score").html(runningScore += jewelValue3);
    gamePlay();
});

jewelValue4 = Math.floor((Math.random() * 12) + 1);

$("#jewel4").on("click", function () {
    
    $(".running-score").html(runningScore += jewelValue4);
    gamePlay();
});


function gamePlay() {
    if (runningScore === desiredNumber) {
        wins += 1;
        $("#wins").html(wins);
        $("#winner-loser").text("You Won!");
        runningScore = 0;
        $(".running-score").text(runningScore);
        desiredNumber = Math.floor((Math.random() * 120) + 1);
        $(".desired-score").html(desiredNumber);
        jewelValue1 = Math.floor((Math.random() * 12) + 1);
        jewelValue2 = Math.floor((Math.random() * 12) + 1);
        jewelValue3 = Math.floor((Math.random() * 12) + 1);
        jewelValue4 = Math.floor((Math.random() * 12) + 1);

       

}


    else if (runningScore > desiredNumber) {
        losses += 1;
        $("#losses").html(losses);
        $("#winner-loser").text("You Lost")
        runningScore = 0;
        $(".running-score").text(runningScore);
        desiredNumber = Math.floor((Math.random() * 120) + 1);
        $(".desired-score").html(desiredNumber);
        jewelValue1 = Math.floor((Math.random() * 12) + 1);
        jewelValue2 = Math.floor((Math.random() * 12) + 1);
        jewelValue3 = Math.floor((Math.random() * 12) + 1);
        jewelValue4 = Math.floor((Math.random() * 12) + 1);

       
    };


};


       
       
            

