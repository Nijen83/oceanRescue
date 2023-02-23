const msgArea = document.querySelector("#message-area");
const gameArea = document.querySelector("#game-area");
const title = document.querySelector("h1");
const rules = document.querySelector(".rules");
const scoreboard = document.querySelector(".scoreboard");

let score = 0;
let healthCount = 10;


// For health bar
let health = document.getElementByID("health");
// Update health bar by inserting "health.value = (value)" in the functions

function startGame(){
    msgArea.innerHTML = "";
    msgArea.classList.add("hidden");

    setInterval(collide, 1);
    var rand = Math.floor(Math.random() * 8000);
    setInterval(addfishLeft, rand);
    setInterval(addfishRight, rand);
    setInterval(addTrash, 8000);
    updateScore();
}

function showRules(){
    rules.style.display = "block";
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
    });
}

function collide() {

    let trash1 = document.GetElementByClassName("trash_1").getBoundingClientRect();

    let fish1 = document.GetElementByClassName("fish_1").getBoundingClientRect();
    let fish2 = document.GetElementByClassName("fish_2").getBoundingClientRect();
    let fish3 = document.GetElementByClassName("fish_3").getBoundingClientRect();
    let fish4 = document.GetElementByClassName("fish_4").getBoundingClientRect();
    let fish5 = document.GetElementByClassName("fish_5").getBoundingClientRect();
    let fish6 = document.GetElementByClassName("fish_6").getBoundingClientRect();
    let fish7 = document.GetElementByClassName("fish_7").getBoundingClientRect();
    let fish8 = document.GetElementByClassName("fish_8").getBoundingClientRect();

     if (trash1.left < fish1.left + fish1.width  && trash1.left + trash1.width  > fish1.left &&
     trash1.top < fish1.top + fish1.height && trash1.top + trash1.height > fish1.top) {
        score ++;
        updateScore;
     }

     if (trash1.left < fish2.left + fish2.width  && trash1.left + trash1.width  > fish2.left &&
     trash1.top < fish2.top + fish2.height && trash1.top + trash1.height > fish2.top) {
        score ++;
        updateScore;
     }

     if (trash1.left < fish3.left + fish3.width  && trash1.left + trash1.width  > fish3.left &&
     trash1.top < fish3.top + fish3.height && trash1.top + trash1.height > fish3.top) {
        score ++;
        updateScore;
     }

     if (trash1.left < fish4.left + fish4.width  && trash1.left + trash1.width  > fish4.left &&
     trash1.top < fish4.top + fish4.height && trash1.top + trash1.height > fish4.top) {
        score ++;
        updateScore;
     }

     if (trash1.left < fish5.left + fish5.width  && trash1.left + trash1.width  > fish5.left &&
     trash1.top < fish5.top + fish5.height && trash1.top + trash1.height > fish5.top) {
        score ++;
        updateScore;
     }
     if (trash1.left < fish6.left + fish6.width  && trash1.left + trash1.width  > fish6.left &&
     trash1.top < fish6.top + fish6.height && trash1.top + trash1.height > fish6.top) {
        score ++;
        updateScore;
     }
     if (trash1.left < fish7.left + fish7.width  && trash1.left + trash1.width  > fish7.left &&
     trash1.top < fish7.top + fish7.height && trash1.top + trash1.height > fish7.top) {
        score ++;
        updateScore;
     }
     if (trash1.left < fish8.left + fish8.width  && trash1.left + trash1.width  > fish8.left &&
     trash1.top < fish8.top + fish8.height && trash1.top + trash1.height > fish8.top) {
        score ++;
        updateScore;
     }
}

function updateScore(){
    title.innerHTML = "<span>Score: " + score +  " </br> Health: " + healthCount + "</span>";
}


