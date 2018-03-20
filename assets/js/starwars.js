// JavaScript Document
// Document load start JS process 
$(document).ready(function () {
    startScreen();
});

/*::::::DOM CACHE::::::*/


/*::::::GLOBALS::::::*/
var fighterImages = "<div class='col-12 py-4'>" + 
"<img id='luke' class='img-fluid fighter reg_border px-2 py-1 mr-1' src='../Star-Wars-Responsive-JQuery-Game/assets/images/luke-skywalker.png' alt='' data-active='false'>" +  
"<img id='obiWan' class='img-fluid fighter reg_border px-2 py-1 mr-1' src='../Star-Wars-Responsive-JQuery-Game/assets/images/obi-wan.png' alt='' data-active='false'>" + 
"<img id='luke' class='img-fluid fighter reg_border px-2 py-1 mr-1' src='../Star-Wars-Responsive-JQuery-Game/assets/images/darth-sidious.png' alt='' data-active='false'>" + 
"<img id='sidious' class='img-fluid fighter reg_border px-2 py-1 mr-1' src='../Star-Wars-Responsive-JQuery-Game/assets/images/darth-vader.png' alt='' data-active='false'>" + "</div>";



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
var defeatedObj = {

};

// Checking that the objects can be called correctly
//console.log("Luke's Health: " + fighterObj,[1]);
//console.log("Palpatine's Counter: " + fighterObj.palpatine.counter);

// Global variables for fighter stats to be updated depending on which the player chooses
var fighterHealth = 100;
var enemyHealth = 100;
var fighterPower;
//console.log("This is the luke enemyObj health: " + enemyObj.luke.health);

function startScreen() {
    //window.empty();  Brian depending on how you get your function done his might or might not be needed. As of now the HTML for the game is hard coded. Games generate the content. Let us know how you are going to do it. 
   // console.log("I'm in startScreen");
   var fightCont = $("#fighters");
  
   fightCont.html("<h3>Choose a Fighter</h3>" + fighterImages
);

   gameSetup();

}

function startFight() {
// onclick function to move the images from one staging area to the next and to exchange data between the obj's 
    $(".fighter").click(function (){
      var id = $(this).attr("id");
        var enemyCont = $("#attackEnemies");
  
        var fightCont = $("#fighters");
      if (($(this).data("active")   === true)){ 
   
        $(this).data("active", true);
                $(this).addClass("d-none");
        console.log(($(this).data("active")));
        $("#yourCharacter").replaceWith( "<h3>Your Character</h3>" +  "<div class='col-12 py-2'>" + "<img id='" + id + "' src='../Star-Wars-Responsive-JQuery-Game/assets/images/" + fighterObj[id].img + "'" + "data-active='false'" +  "class='img-fluid d-block fighter activeFighter reg_border px-2 py-1 mr-1'>"  + "</div>");

        $("#EATA").html( "<div id='enemies' class='col-12 d-block py-2'>" + fightCont.html() + "</div>");
        fightCont.html("");
    // $("#fighters").replaceWith("");
     $.extend(activeObj, fighterObj[id]);
        delete fighterObj[id];
       
    // Test your Objects 
    var strA = JSON.stringify(activeObj, null, 4); // this turns the object into a string and makes it easy to read in the console.
    console.log("active:" + strA);
    
    var strB = JSON.stringify(fighterObj, null, 4);
    console.log("fighter:" + strB); 
    
    var strC = JSON.stringify(enemyObj, null, 4); 
    console.log("enemy:" + strC); 
    
    var strD = JSON.stringify(defeatedObj, null, 4);
    console.log("defeated:" + strD);
     } else if (($(this).data("active")   === false)){
      id = $(this).attr("id");
      console.log($(this).attr("id"));
        $(this).data("active", false);
        Object.apply(enemyObj, fighterObj[id]);
        delete fighterObj[id];
        $("#yourCharacter").replaceWith( "<h3>Your Character</h3>" + "<div class='col-12 py-2'>" + "<img id='" + id + "' src='../Star-Wars-Responsive-JQuery-Game/assets/images/" + fighterObj[id].img + "'" + "data-active='false'" +  "class='img-fluid d-block fighter activeFighter reg_border px-2 py-1 mr-1'>"  + "</div>");

        $(enemyCont).html("<h3>Active Enemies</h3>" + "<div id='enemies' class='col-12 d-block py-2'>" + fightCont.html() + "</div>");
        $(this).addClass("d-none");
        console.log(this);
        console.log("else:");
        console.log(this);


         // Test your Objects 
    var strA = JSON.stringify(activeObj, null, 4); // this turns the object into a string and makes it easy to read in the console.
    console.log("active:" + strA);
    
    var strB = JSON.stringify(fighterObj, null, 4);
    console.log("fighter:" + strB); 
    
    var strC = JSON.stringify(enemyObj, null, 4); 
    console.log("enemy:" + strC); 
    
    var strD = JSON.stringify(defeatedObj, null, 4);
    console.log("defeated:" + strD);
       
      }
       console.log("outside");

       
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
    var fighterPower = activeObj.power;
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