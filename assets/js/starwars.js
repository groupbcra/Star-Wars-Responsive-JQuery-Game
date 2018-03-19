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

// Checking that the objects can be called correctly
console.log("Luke's Health: " + fighterObj.luke.health);
console.log("Palpatine's Counter: " + fighterObj.palpatine.counter);

// Global variables for fighter stats to be updated depending on which the player chooses
var fighterHealth;
var fighterPower;

// Object to push non-chosen fighters into as Enemies Available to Attack
var enemyObj = {

};

// Test to show I can create an object inside enemyObj equal to Luke's stats in fighterObj
enemyObj.luke = fighterObj.luke;
console.log("This is the luke enemyObj health: " + enemyObj.luke.health);

function startScreen() {
    //window.empty();  Brian depending on how you get your function done his might or might not be needed. As of now the HTML for the game is hard coded. Games generate the content. Let us know how you are going to do it. 
    gameSetup();
}