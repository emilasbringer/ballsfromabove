const gamewindow = document.querySelector("#gamewindow");
var map = document.querySelector("#map");

var gamestate = 0;
var fps = 30;
var tickspeed = 1000/fps;
var isRunning = false;
var usernameInput;
var passwordInput;
var username = "";
var password = "";
var tick = 0;

const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
 }

const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
 }
 
 document.addEventListener("keydown", (e) => {
    var dir = keys[e.which];
    if (dir && held_directions.indexOf(dir) === -1) {
       held_directions.unshift(dir)
    }
 })
 
 document.addEventListener("keyup", (e) => {
    var dir = keys[e.which];
    var index = held_directions.indexOf(dir);
    if (index > -1) {
       held_directions.splice(index, 1)
    }
 });

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
    }
}

function initilize() {
    console.log("initilizing game!")
    initilizeElements()
}

function initilizeElements() {
    map.style.display = "block";
    var player = document.createElement("div");
    gamewindow.appendChild(player);
    player.setAttribute("class", "playerapperance")
}



