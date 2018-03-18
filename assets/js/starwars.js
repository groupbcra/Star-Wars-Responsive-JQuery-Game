$(document).ready(function() {

    // startScreen();

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
    var fighterHealth ;
    var fighterPower ;

    // Object to push non-chosen fighters into as Enemies Available to Attack
    var enemyObj = {

    };

    // Test to show I can create an object inside enemyObj equal to Luke's stats in fighterObj
    enemyObj.luke = fighterObj.luke;
    console.log("This is the luke enemyObj health: " + enemyObj.luke.health);

    function startScreen() {
        window.empty();
        gameSetup();
    }
});