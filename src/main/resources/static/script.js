const msgArea = document.querySelector("#message-area");
const gameArea = document.querySelector("#game-area");
const title = document.querySelector("h1");
const rules = document.querySelector(".rules");
const scoreboard = document.querySelector(".scoreboard");
const music = document.querySelector(".music");
const unmuted = document.querySelector("#unmuted");
const topImage = document.querySelector(".top");
const bottomImage = document.querySelector(".bottom");
const crab = document.querySelector(".crab");
const coral_2 = document.querySelector(".coral_2");
const coral_3 = document.querySelector(".coral_3");

var intervalFishLeft;
var intervalFishRight;

let score = 0;
let healthCount = 10;



function startGame(){
    msgArea.innerHTML = "";
    msgArea.classList.add("hidden");
    music.play();
    var rand = Math.floor(Math.random() * 8000);
    setInterval(addfishLeft, rand);
    setInterval(addfishRight, rand);
    setInterval(addTrash, 8000);
    updateScore();
    changeBackground();

    if(healthCount > 0) {
        var rand = Math.floor(Math.random() * 8000);
        intervalFishLeft = setInterval(addfishLeft, rand);
        intervalFishRight = setInterval(addfishRight, rand);
        setInterval(addTrash, 8000);
        updateScore();
        changeBackground();
    }
}

function showRules(){
    rules.style.display = "block";
}

function changeBackground(){

    if(healthCount <= 5){
        topImage.classList.add("transparent");
    }

    if(healthCount <= 2) {
        bottomImage.classList.add("semiTransparent");
        crab.classList.add("transparent2");
        coral_2.classList.add("transparent2");
        coral_3.classList.add("transparent2");
    }

    if(healthCount == 0) {
        endGame();
    }
}

function showScoreboard() {
    scoreboard.style.display = "block";
}

function addfishLeft(){
    var arr = ["fish_4", "fish_5", "seahorse", "fish_4", "stingray", "fish_7", "octopus"];

    const fishLeft = document.createElement("div");
    fishLeft.classList.add(arr[Math.floor(Math.random() * arr.length)]);
    fishLeft.style.position = "absolute";
    fishLeft.style.left = "-200px";
    fishLeft.style.top = Math.floor(Math.random() * (600 - 150 + 1)) + 100 + "px";
    fishLeft.appendChild(document.createElement("div"));

    gameArea.appendChild(fishLeft);

    fishLeft.addEventListener('click', (event)=> {
        event.target.remove();
        healthCount--;
        updateScore();
        changeBackground();
    });
}

function addfishRight(){
    var arr = ["fish_1", "fish_2", "fish_3", "fish_6", "fish_8", "turtle", "fish_1"];

    const fishRight = document.createElement("div");
    fishRight.classList.add(arr[Math.floor(Math.random() * arr.length)]);
    fishRight.style.position = "absolute";
    fishRight.style.left = "1200px";
    fishRight.style.top = Math.floor(Math.random() *  (500 - 450 + 1)) + 450 + "px";
    fishRight.appendChild(document.createElement("div"));

    gameArea.appendChild(fishRight);

    fishRight.addEventListener('click', (event)=> {
        event.target.remove();
        healthCount--;
        updateScore();
        changeBackground();
    });
}

function addTrash(){
    var arr = ["trash_1", "trash_2", "trash_3", "trash_4", "trash_5", "trash_6", "trash_7", "trash_8"];

    const trash = document.createElement("div");
    trash.classList.add(arr[Math.floor(Math.random() * arr.length)]);
    trash.style.position = "absolute";
    trash.style.left = Math.floor(Math.random() *  1100) + "px";
    trash.style.top = "-100px";
    trash.appendChild(document.createElement("div"));

    gameArea.appendChild(trash);

    trash.addEventListener('click', (event)=> {
        event.target.remove();

        if(trash.getAttribute('class') === "trash_5" || trash.getAttribute('class') === "trash_6") {
            score += 10;
        } else if(trash.getAttribute('class') === "trash_7" || trash.getAttribute('class') === "trash_8") {
            score += 50;
        } else {
            score += 25;
        }
        updateScore();
        changeBackground();
    });
}

function updateScore(){
    title.innerHTML = "<span>Score: " + score +  " </br> Health: " + healthCount + "</span>";
}

function mute() {
    if (!music.paused) {
      music.pause();
    } else {
      music.play();
    }
}


function endGame() {
    clearInterval(intervalFishLeft);
    clearInterval(intervalFishRight);
}


