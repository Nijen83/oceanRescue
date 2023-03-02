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
const crab_2 = document.querySelector(".crab_2");
const coral_2 = document.querySelector(".coral_2");
const coral_3 = document.querySelector(".coral_3");
const gameOver = document.querySelector(".gameOver");
const yourScore = document.querySelector(".your_score");
const life = document.querySelector(".life");

let score = 0;
let healthCount = 10;
let trashInterval = 2100;
let fishInterval = 2500;

//......Start click functions......
function startGame(){
    msgArea.innerHTML = "";
    msgArea.classList.add("hidden");
    music.play();

    setInterval(addfishLeft, fishInterval);
    setInterval(addfishRight, fishInterval);
    setInterval(addTrash, trashInterval);
    updateScore();
    changeBackground();
}

//......Display .rules div......
function showRules(){
    rules.style.display = "block";
}

//......Display .scoreboard div......
function displayHighscore(){
    endGame.innerHTML = score;
}

//......Change background image + end of game......
function changeBackground(){
    if(healthCount <= 5){
        topImage.classList.add("transparent");
    }
    if(healthCount <= 2) {
        bottomImage.classList.add("semiTransparent");
        crab.classList.add("transparent2");
        crab_2.classList.add("transparent2");
        coral_2.classList.add("transparent2");
        coral_3.classList.add("transparent2");
    }
    if(healthCount <= 0) {
        endGame();
    }
}
//......Display .scoreboard div......
function showScoreboard() {
    scoreboard.style.display = "block";
}
//......Adds fish from left......
function addfishLeft(){

//......Array of fish classes......
    var arr = ["fish_4_r", "fish_4", "fish_5", "seahorse", "fish_4", "stingray", "fish_7", "octopus", "fish_12_l", "fish_13_r", "fish_13_r", "fish_14_r"];

//......Creates div + adds random class from array + styling......
    const fishLeft = document.createElement("div");
    fishLeft.classList.add(arr[Math.floor(Math.random() * arr.length)]);
    fishLeft.style.position = "absolute";
    fishLeft.style.left = "-200px";
    fishLeft.style.backgroundSize = "cover";
    fishLeft.style.top = Math.floor(Math.random() * 700) + "px";

    fishLeft.appendChild(document.createElement("div"));
    gameArea.appendChild(fishLeft);

//......Fish click functions......
    fishLeft.addEventListener('click', (event)=> {
        event.target.remove();
        healthCount--;
        updateScore();
        changeBackground();
    });
}

//......Adds fish from right......
function addfishRight(){

//......Array of fish classes......
    var arr = ["fish_1", "fish_2", "fish_3", "fish_6", "fish_8", "turtle", "fish_1", "fish_9_r", "fish_10_r", "fish_10_r", "fish_10_r", "fish_11_r", "shrimp", "shrimp", "octopus_2", "seahorse_2", "seahorse_2"];

//......Creates div + adds random class from array + styling......
    const fishRight = document.createElement("div");
    fishRight.classList.add(arr[Math.floor(Math.random() * arr.length)]);
    fishRight.style.position = "absolute";
    fishRight.style.left = "1200px";
    fishRight.style.backgroundSize = "cover";
    fishRight.style.top = Math.floor(Math.random() * 700) + "px";

    fishRight.appendChild(document.createElement("div"));
    gameArea.appendChild(fishRight);

//......Fish click functions......
    fishRight.addEventListener('click', (event)=> {
        event.target.remove();
        healthCount--;
        updateScore();
        changeBackground();
   });
}
//......Adds trash from top......
function addTrash(){

//......Array of trash classes......
    var arr = ["trash_1", "trash_2", "trash_3", "trash_4", "trash_5", "trash_6", "trash_7", "trash_8"];

//......Creates div + adds random class from array + styling......
    const trash = document.createElement("div");
    trash.classList.add(arr[Math.floor(Math.random() * arr.length)]);
    trash.style.position = "absolute";
    trash.style.backgroundSize = "cover";
    trash.style.left = Math.floor(Math.random() *  1100) + "px";
    trash.style.top = "-100px";

    trash.appendChild(document.createElement("div"));
    gameArea.appendChild(trash);

//......trash click functions......
    trash.addEventListener('click', (event)=> {
        event.target.remove();

//......Checking trash for number of points awarded......
        if(trash.getAttribute('class') === "trash_5" || trash.getAttribute('class') === "trash_6") {
            score += 10;
        } else if(trash.getAttribute('class') === "trash_7" || trash.getAttribute('class') === "trash_8") {
            score += 50;
        } else {
            score += 25;
        }
        levels();
        updateScore();
        changeBackground();
    });
}

//......Displaying + updating score & health......
function updateScore(){
    title.innerHTML = "<span>Score: " + score +  " </br><img src='images/life.png' style='height: 30px; width: 30px; right: 50px; position: absolute;'> " + healthCount + "</span>";
}

//......Playing + muting background music......
function mute() {
    if (!music.paused) {
      music.pause();
    } else {
      music.play();
    }
}

//......Displaying .gameOver div + final score......
function endGame() {
    gameOver.style.display = "block";
    document.getElementById("myHighscore").value = score;
    yourScore.innerHTML = "Your score: " + score;
}

//......Updating trashInterval......
function levels() {
    if(score >= 500){
        trashInterval = 1800;
        fishInterval = 2500;
    }else
    if(score >= 1000){
        trashInterval = 1500;
        fishInterval = 2000;
    }else
    if(score >= 1500){
        trashInterval = 1200;
        fishInterval = 1500;
    }else
    if(score >= 2000){
        trashInterval = 900;
        fishInterval = 1000;
    }else
    if(score >= 2500){
        trashInterval = 600;
    }
}

//......Making bubbles on click......
gameArea.addEventListener("click", e => {
//......Position of cursor......
    const x = e.pageX;
    const y = e.pageY;
//......Random size of bubble......
    const randomSize = Math.random() * (30 - 5) + 5;
//......Creating div + adding .bubble......
    const bubble = document.createElement("div");
    bubble.classList.add('bubble');
    bubble.style.left = (x - 392) + "px";
    bubble.style.top = (y - 72) + "px";
    bubble.style.width = randomSize + "px";
    bubble.style.height = randomSize + "px";

    gameArea.appendChild(bubble);

//......Making bubbles hidden after X seconds......
    setTimeout(function(){
        bubble.style.display = 'none';
    }, 7000);
});