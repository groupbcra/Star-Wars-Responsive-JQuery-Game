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

    // Global variables for fighter stats to updated depending on which the player chooses
    var fighterHealth ;
    var fighterPower ;

    
});