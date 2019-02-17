var wins = 0;
var losses = 0;
var playerNumber = 0;
var computerNumber = 0;
var buttonValue1;
var buttonValue2;
var buttonValue3;
var buttonValue4;    
     
     
$(document).ready(function(){
    startGame();

    $('#crystal1').click(function(){
        playerNumber = (buttonValue1 + playerNumber) 
        $('#pnumber').html(playerNumber);
        console.log(buttonValue1);
        endGame();
        
    });

    $('#crystal2').click(function(){
        playerNumber = (buttonValue2 + playerNumber) 
        $('#pnumber').html(playerNumber);
        console.log(buttonValue2);
        endGame();
        
    });

    $('#crystal3').click(function(){
        playerNumber = (buttonValue3 + playerNumber) 
        $('#pnumber').html(playerNumber);
        console.log(buttonValue3);
        endGame();
        
    });

    $('#crystal4').click(function(){
        playerNumber = (buttonValue4 + playerNumber) 
        $('#pnumber').html(playerNumber);
        console.log(buttonValue4);
        endGame();
        
    });
});
    

function startGame(){
    computerNumber = Math.floor(Math.random() * 102) + 19;
    console.log(computerNumber);
    $("#number").html(computerNumber);
    buttonValue1 = Math.floor(Math.random() * 12) + 1;
    buttonValue2 = Math.floor(Math.random() * 12) + 1;
    buttonValue3 = Math.floor(Math.random() * 12) + 1;
    buttonValue4 = Math.floor(Math.random() * 12) + 1;
    playerNumber = 0;
    $('#pnumber').html(playerNumber);
    
};

function endGame() {
    console.log(computerNumber);
    if (playerNumber === computerNumber){
        alert("You Win!")
        startGame();
        
        
    }
    
    if (playerNumber > computerNumber){
        alert('you lose');
        startGame();
    }
}


//









 











    
    