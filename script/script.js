const gamewindow = document.querySelector("#gamewindow");
var map = document.querySelector("#map");
var keylogger = document.querySelector("#keylogger");
var playerCharacterTexture = document.createElement("img");
playerCharacterTexture.setAttribute("src", "assets/player/bluecube.png")

var gamestate = 0;
var fps = 30;
var tickspeed = 1000/fps;
var isRunning = false;
var usernameInput;
var passwordInput;
var username = "";
var password = "";
var isclasschosen = false;
var playerclasswarrior = false;
var playerclassarcher = false;
var playerclassassassin = false;
var tick = 0;
var mapcords = [0,0];
var pastmousexchords;
var pastmouseychords;
var keypresseddown;
var time;
var deltatime;
var playerMs = 5;
var playerability1activated = false;
var goblinnumber = 0;
var movedirection = [true,false,false,false,false];
playerChords = [0,0];
var goblinEnemy = {healthpoints:"100",movespeed:"10",knockbackresistance:"10",attackdamage:"5"};


function uniKeyCode(event) {
    console.log("attempting to log key")
    var key = event.keyCode;
    keylogger.innerHTML = "The Unicode KEY code is: " + key;
  }

function logkeyup(event) {
    console.log("attempting to log key")
    var key = event.keyCode;
    keylogger.innerHTML = "The Unicode KEY code is: " + key;
}

if(gamestate == 0) {    
    document.createElement("titlediv");
}

function checklogin() {
    usernameInput = document.getElementById("usernameid").value;
    passwordInput = document.getElementById('passwordid').value;
    
    if (usernameInput == username && passwordInput == password) {
        if(isclasschosen == false){
            document.getElementById("titlescreenid").remove();
            initializeclassselection();
        }
        if(classchosen == true){
            gamestate = 1;
        }
    }
    console.log("The gamestate is " + gamestate)
    if (gamestate == 1) {
        document.getElementById("titlescreenid").remove();
        initialize();
        isRunning = true;
        console.log(isRunning);
    }
}

function initialize() {
    console.log("initilizing game!");
    initializeElements();
    initializeUI();
    setInterval(() => {
        tick++;
        playerMovement();
    }, 1000/fps);
}

function initializeElements() {
    map.style.display = "block";
    map.style.width = "300%";

    var playerhead = document.createElement("div");
    gamewindow.appendChild(playerhead);
    playerhead.setAttribute("class", "playerapperance")
    playerhead.setAttribute("id", "cuck")

    playerhead.appendChild(playerCharacterTexture);
    playerCharacterTexture.style.width = "100%";
}
function initializeclassselection(){

    const classselectionwindow = document.createElement("div");
    classselectionwindow.setAttribute("class", "classselectionwindowcss");
    classselectionwindow.setAttribute("id", "classselectionwindowid");
    gamewindow.appendChild(classselectionwindow);

    const class1button = document.createElement("button");
    class1button.setAttribute("class", "classselectioncss");
    class1button.onclick = function() { selectwarrior() };

    const class2button = document.createElement("button");
    class2button.setAttribute("class", "classselectioncss");
    class2button.onclick = function() { selectarcher() };

    const class3button = document.createElement("button");
    class3button.setAttribute("class", "classselectioncss");
    class3button.onclick = function() { selectassassin() };

    const class4button = document.createElement("button");
    class4button.setAttribute("class", "classselectioncss");
    class4button.onclick = function() { selecttank() };

    const warriortext = document.createTextNode("Warrior");
    const archertext = document.createTextNode("Archer");
    const assassintext = document.createTextNode("Assassin");
    const tanktext = document.createTextNode("Tank");

    class1button.appendChild(warriortext);
    class2button.appendChild(archertext);
    class3button.appendChild(assassintext);
    class4button.appendChild(tanktext);

    classselectionwindow.appendChild(class1button);
    classselectionwindow.appendChild(class2button);
    classselectionwindow.appendChild(class3button);
    classselectionwindow.appendChild(class4button);

}
function initializeUI(){

    const healthbar = document.createElement("div");
    healthbar.setAttribute("class", "healthbarcss");

    const abilitycontainerul = document.createElement("ul");
    abilitycontainerul.setAttribute("class", "abilitycontainerulcss");

    const abilitycontainerli = document.createElement("li");
    abilitycontainerli.setAttribute("class", "abilitycontainerlicss");

    const abilityleftclick = document.createElement("div");
    abilityleftclick.setAttribute("class", "abilityleftclickcss");
    document.getElementsByClassName("abilityleftclickcss").innerHTML = "MB1";
    abilityleftclick.setAttribute("src", "/assets/abilityimages/fist.png");

    const abilityrightclick = document.createElement("div");
    abilityrightclick.setAttribute("class", "abilityrightclickcss");
    
    const ability1 = document.createElement("div");
    ability1.setAttribute("class", "abilitycss");
    ability1.setAttribute("id", "ability1id");
    ability1.onclick = function() { ability1function() };
    const ability1image = document.createElement("img");
    ability1image.setAttribute("class", "abilityimagecss");
    ability1image.setAttribute("id", "ability1imageid");
    ability1image.setAttribute("src", "/assets/abilityimages/hermesboots.png");


    const ability2 = document.createElement("div");
    ability2.setAttribute("class", "abilitycss");
    
    const ability3 = document.createElement("div");
    ability3.setAttribute("class", "abilitycss");

    const mb1text = document.createTextNode("MB1");
    const mb2text = document.createTextNode("MB2");
    const ability1text = document.createTextNode("1");
    const ability2text = document.createTextNode("2");
    const ability3text = document.createTextNode("3");


    abilityleftclick.appendChild(mb1text);
    abilityrightclick.appendChild(mb2text);

    ability2.appendChild(ability2text);
    ability3.appendChild(ability3text);

    ability1.appendChild(ability1image);


    abilitycontainerli.appendChild(abilityleftclick);
    abilitycontainerli.appendChild(abilityrightclick);

    abilitycontainerli.appendChild(ability1);
    abilitycontainerli.appendChild(ability2);
    abilitycontainerli.appendChild(ability3);
    
    abilitycontainerul.appendChild(abilitycontainerli);

    gamewindow.appendChild(healthbar);
    gamewindow.appendChild(abilitycontainerul);
}

function ability1function(ability1image){
    if(playerclasswarrior == true){
        if(playerability1activated == false){
        playerMs = 20;
        playerability1activated = true;
        document.getElementById("ability1imageid").classList.add("abilitycooldownanimation");
        setTimeout(() => {
            playerMs = 10;
        }, 2000);
        }
        setTimeout(() => {
            playerability1activated = false;
            document.getElementById("ability1imageid").classList.remove("abilitycooldownanimation");
        }, 4000);
    
    }
}
function selectwarrior(){
    isclasschosen = true;
    playerclasswarrior = true;
    gamestate = 1;
    document.getElementById("classselectionwindowid").remove();
    initialize();
}

//keyboard input here
function uniKeyCode(event) {
    var key = event.keyCode;
    if(key == 87) {movedirection[1] = true; movedirection[0] = false;};
    if(key == 83) {movedirection[2] = true; movedirection[0] = false;};
    if(key == 65) {movedirection[3] = true; movedirection[0] = false;};
    if(key == 68) {movedirection[4] = true; movedirection[0] = false;};
    if(key == 16) {playerMs = 14};
    if(key == 49) {ability1function()};
    if(key == 50) {console.log(goblinEnemy)};
    if(key == 51);
}

function logkeyup(event) {
    var keyup = event.keyCode;
    if(keyup == 87) {movedirection[1] = false; movedirection[0] = true;}
    if(keyup == 83) {movedirection[2] = false; movedirection[0] = true;}
    if(keyup == 65) {movedirection[3] = false; movedirection[0] = true;}
    if(keyup == 68) {movedirection[4] = false; movedirection[0] = true;}
    if(keyup == 16) {playerMs = 8};
  }

window.addEventListener("mousemove", (event) => {
    pastmousexchords = event.clientX;
    pastmouseychords = event.clientY;
});

function playerMovement() {
    if(movedirection[1] == true) {mapcords[1] += playerMs} 
    if(movedirection[2] == true) {mapcords[1] -= playerMs} 
    if(movedirection[3] == true) {mapcords[0] += playerMs} 
    if(movedirection[4] == true) {mapcords[0] -= playerMs} 
    var moveammountx = mapcords[0];
    var moveammounty = mapcords[1];
    map.style.transform = "translate(" + moveammountx + "px, " + moveammounty + "px)";
   playerChords[0] += playerMs;
   playerChords[1] += playerMs;
   console.log(playerChords[0]+ " " + playerChords[1]);

    document.querySelector("#cuck").style.transform = "rotate(" + Math.atan2((pastmousexchords - (window.innerWidth/2) ),-(pastmouseychords - (window.innerHeight/2))) + "rad)";
}

function createGoblinEnemy() {
   document.createElement("div");
}