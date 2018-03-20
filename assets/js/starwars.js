// JavaScript Document
// Document load start JS process 
$(document).ready(function () {
    startScreen();
});

/*::::::DOM CACHE::::::*/


/*::::::GLOBALS::::::*/

// Fighter stats
var fighterObj = {
    obiWan: {
        health: 100,
        power: 120,
        counter: 100,
        img: "obi-wan.png"
    },
    luke: {
        health: 100,
        power: 120,
        counter: 100,
        img: "luke-skywalker.png",
    },
   darth: {
        health: 100,
        power: 120,
        counter: 100,
        img: "darth-vader.png"
    },
    sidious: {
        health: 100,
        power: 120,
        counter: 100,
        img: "darth-sidious.png",
    },
};

var activeObj = {

};

// Object to push non-chosen fighters into as Enemies Available to Attack
var enemyObj = {

};
// Object to push defeated fighter too. 
var defeatedFighterObj = {

};

// Checking that the objects can be called correctly
//console.log("Luke's Health: " + fighterObj,[1]);
//console.log("Palpatine's Counter: " + fighterObj.palpatine.counter);

// Global variables for fighter stats to be updated depending on which the player chooses
var fighterHealth = 100;
var enemyHealth = 100;
var fighterPower;
// Test to show I can create an object inside enemyObj equal to Luke's stats in fighterObj
enemyObj.luke = fighterObj.luke;
//console.log("This is the luke enemyObj health: " + enemyObj.luke.health);

function startScreen() {
    //window.empty();  Brian depending on how you get your function done his might or might not be needed. As of now the HTML for the game is hard coded. Games generate the content. Let us know how you are going to do it. 
   // console.log("I'm in startScreen");
    gameSetup();
}

function startFight() {
    //var fighterHealth =  fighterObj.chosenFighter.Health;
    //var fighterPower =  fighterObj.chosenFighter.Power;
    //var enemyHealth =  enemyObj.chosenEnemy.Health;
    //var enemyPower = enemyObj.chosenEnemy.Power;
    //chosenEnemy = fighterObj.palpatine; 

    var chosenFighter = $(".fighter").on("click", function (){
        var id = $(this).attr("id");
        var fightCont = $("#fighters");
        $("#yourCharacter").replaceWith( "<h3>Your Character</h3>" + "<div class='col-12 py-2'>" + "<img src='../Star-Wars-Responsive-JQuery-Game/assets/images/" + fighterObj[id].img + "'" +  "class='img-fluid d-block fighter reg_border px-2 py-1 mr-1' id='" + id + "'>"  + "</div>");
        $(this).addClass("d-none");
        $("#EATA").html("<h3>Choose Your Enemy</h3>" + "<div id='enemy' class='col-12 d-block py-2'>" + fightCont.html() + "</div>");
        fightCont.html("");
    // $("#fighters").replaceWith("");
        $.extend(activeObj, fighterObj[id]);
        delete fighterObj[id];
      //  console.log(fighterObj);
    //    console.log(activeObj);   
    });
    
   // var chosenEnemy = $("#enemy").on("click", function (){
     //  console.log(chosenEnemy);
        // var idEn = $(this).attr("id");
       // console.log(idEn);
   // });
  


}

function scoreBoard() {
    $("#scoreBoard").toggle("fast");
    $("#fighterHAlert").html("<strong>Fighters Health:</strong>" + " " + fighterHealth + "%");
    $("#enemyHAlert").html("<strong>Enemies Health:</strong>" + " " + enemyHealth + "%");
}

function nextRound() {
    console.log("in nextRound();");
}

function endGame() {
    console.log("endGame()");
}



function attack() {
    scoreBoard();
    $("#scoreBoard").removeClass("d-none").addClass("d-block sticky-top");
    $("#attack-btn").text("Attack");
    console.log("I'm in attack");
    // Animation complete.
    var fighterPower = 120;
    var enemyPower = 100;
    var fighterNumb = Math.floor(Math.random() * fighterPower);
    var enemyNumb = Math.floor(Math.random() * enemyPower);
    console.log(fighterNumb);
    console.log(enemyNumb);
    if ((fighterNumb >= enemyNumb) && ((fighterHealth > 0) && (enemyHealth > 0))) {
        console.log("Fighter Won");
        enemyHealth = parseInt(enemyHealth) - 10;


    } else if ((fighterNumb <= enemyNumb) && ((fighterHealth > 0) && (enemyHealth > 0))) {
        console.log("Fighter Loss");

        fighterHealth = parseInt(fighterHealth) - 10;
        $.extend(defeatedFighterObj, chosenEnemies);
        console.log(defeatedFighterObj);

    } else {
        if ((fighterHealth > enemyHealth) && (!isEmpty(fighterObj))) {
            console.log("Fighter WIIIINNNS");
            $("#enemyHAlert").html("");
            $("#fighterHAlert").html("<strong>You won with:</strong>" + " " + fighterHealth + "%" + " left");
            var delayNextRound = setTimeout(function () {
                $("#scoreBoard").removeClass("d-block").addClass("d-none");
                nextRound();

            }, 5000);


        } else
            console.log("Fighter LOSSES");
        $("#fighterHAlert").html("");
        $("#enemyHAlert").html("<strong>You lost with:</strong>" + " " + fighterHealth + "%" + " left");
        var delayEndGame = setTimeout(function () {
            $("#scoreBoard").removeClass("d-block").addClass("d-none");
            endGame();

        }, 5000);
    }
}
//console.log("OUT OF LOOP");

function gameSetup() {
    //console.log("I'm in gameSetup");
    // function loadCharcters
    // onclick chosen character is added to  
    // set player power/health.100 value
    //  remove rest of the Object to 
    // onclick chosen defender  is added to  
    // set defender power/health.100 value
    $("#attack-btn").text("Start Game");
    startFight();
}