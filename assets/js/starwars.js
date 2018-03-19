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
    },
    luke: {
        health: 100,
        power: 120,
        counter: 100,
    },
    palpatine: {
        health: 100,
        power: 120,
        counter: 100,
    },
    maul: {
        health: 100,
        power: 120,
        counter: 100,
    },
};

// Object to push non-chosen fighters into as Enemies Available to Attack
var enemyObj = {

};
// Object to push defeated fighter too. 
var defeatedFighterObj = {

};

// Checking that the objects can be called correctly
console.log("Luke's Health: " + fighterObj.luke.health);
console.log("Palpatine's Counter: " + fighterObj.palpatine.counter);

// Global variables for fighter stats to be updated depending on which the player chooses
var fighterHealth = 100;
var enemyHealth = 100;
var fighterPower;
var chosenEnemy;


// Test to show I can create an object inside enemyObj equal to Luke's stats in fighterObj
enemyObj.luke = fighterObj.luke;
console.log("This is the luke enemyObj health: " + enemyObj.luke.health);

function startScreen() {
    //window.empty();  Brian depending on how you get your function done his might or might not be needed. As of now the HTML for the game is hard coded. Games generate the content. Let us know how you are going to do it. 
    console.log("I'm in startScreen");
    gameSetup();
}

function startFight() {
    //  var fighterHealth =  fighterObj.chosenFighter.Health
    //  var fighterPower =  fighterObj.chosenFighter.Power
    //  var enemyHealth =  enemyObj.chosenEnemy.Health
    //  var enemyPower = enemyObj.chosenEnemy.Power
    // onclick  $(attack) function
    chosenEnemy = fighterObj.palpatine; //<avi>  I need to be able to grab the specifc chosen character    </>
    console.log(chosenEnemy);

    $("#attack-btn").on("click", attack);

}

function scoreBoard() {
    $("#scoreBoard").toggle("fast");
    $("#fighterHAlert").html("<strong>Fighters Health:</strong>" + " " + fighterHealth + "%");
    $("#enemyHAlert").html("<strong>Enemies Health:</strong>" + " " + enemyHealth + "%");
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
    for (var j = 0; j < fighterHealth; j++) {
        if (fighterNumb >= enemyNumb) {
            console.log("Fighter Won");
            enemyHealth = parseFloat(enemyHealth) - 10;


        } else if (fighterNumb === enemyNumb) {
            console.log("Fighter Tied");

        } else {
            console.log("Fighter Lost");
            fighterHealth = parseFloat(fighterHealth) - 10;
            $.extend(defeatedFighterObj, chosenEnemy);
            console.log(defeatedFighterObj);
        }
    }
}

function gameSetup() {
    console.log("I'm in gameSetup");
    // function loadCharcters
    // onclick chosen character is added to  
    // set player power/health.100 value
    //  remove rest of the Object to 
    // onclick chosen defender  is added to  
    // set defender power/health.100 value
    $("#attack-btn").text("Start Game");
    startFight();
}