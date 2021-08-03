var gamestate = 0;
var usernameInput;
var passwordInput;
var username = "piss";
var password = "korv";



if(gamestate == 0) {    
    document.createElement("titlediv");
}

function checklogin() {
    usernameInput = document.getElementById("usernameid").value;
    passwordInput = document.getElementById('passwordid').value;
    
    if (usernameInput == username && passwordInput == password) {
        gamestate = 1;
    }
    console.log(gamestate)
    if (gamestate == 1) {
        document.getElementById("titlescreenid").remove();
    }
}