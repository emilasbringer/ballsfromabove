const gamewindow = document.querySelector("#gamewindow");
var map = document.querySelector("#map");
var keylogger = document.querySelector("#keylogger");
var playerCharacterTexture = document.createElement("img");
playerCharacterTexture.setAttribute("src", "assets/player/knightFrontView.png")

var gamestate = 0;
var fps = 30;
var tickspeed = 1000/fps;
var isRunning = false;
var usernameInput;
var passwordInput;
var username = "";
var password = "";
var tick = 0;
var mapcords = [0,0];
var pastmousexchords;
var pastmouseychords;
var keypresseddown;
var time;
var deltatime;
var playerMs = 5;

var movedirection = [true,false,false,false,false];


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
        gamestate = 1;
    }
    console.log("The gamestate is " + gamestate)
    if (gamestate == 1) {
        document.getElementById("titlescreenid").remove();
        initilize();
        isRunning = true;
        console.log(isRunning);
    }
}

function initilize() {
    console.log("initilizing game!")
    initilizeElements()
    setInterval(() => {
        tick++;
        playerMovement();
    }, 1000/fps);
}

function initilizeElements() {
    map.style.display = "block";
    map.style.width = "300%";

    var playerhead = document.createElement("div");
    gamewindow.appendChild(playerhead);
    playerhead.setAttribute("class", "playerapperance")
    playerhead.setAttribute("id", "cuck")

    var playerpoint1 = document.createElement("div");
    playerhead.appendChild(playerpoint1);
    playerpoint1.setAttribute("class", "playerpointcss1")

    var playerpoint2 = document.createElement("div");
    playerhead.appendChild(playerpoint2);
    playerpoint2.setAttribute("class", "playerpointcss2")

    playerhead.appendChild(playerCharacterTexture);
}

function uniKeyCode(event) {
    var key = event.keyCode;
    document.getElementById("keylogger").innerHTML = "Keycode: " + key;
    if(key == 87) {movedirection[1] = true; movedirection[0] = false;};
    if(key == 83) {movedirection[2] = true; movedirection[0] = false;};
    if(key == 65) {movedirection[3] = true; movedirection[0] = false;};
    if(key == 68) {movedirection[4] = true; movedirection[0] = false;};
    if(key == 16) {playerMs = 14};
}

function logkeyup(event) {
    var keyup = event.keyCode;
    document.getElementById("keyuplogger").innerHTML = "Keycode: " + keyup;
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


    document.querySelector("#cuck").style.transform = "rotate(" + Math.atan2((pastmousexchords - 955),-(pastmouseychords -520)) + "rad)";

}