const msgArea = document.querySelector("#message-area");
const gameArea = document.querySelector("#game-area");
const title = document.querySelector("h1");

// For health bar
let health = document.getElementByID("health");
// Update health bar by inserting "health.value = (value)" in the functions

function startGame(){
    msgArea.innerHTML = "";
    msgArea.classList.add("hidden");

    var rand = Math.floor(Math.random() * 8000);
    setInterval(addfishLeft, rand);
    setInterval(addfishRight, rand);
    setInterval(addTrash, rand);
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
}

function addTrash(){
    var arr = ["trash_1", "trash_2", "trash_3", "trash_4", "trash_5", "trash_6"];

    const trash = document.createElement("div");
    trash.classList.add(arr[Math.floor(Math.random() * arr.length)]);
    trash.style.position = "absolute";
    trash.style.left = Math.floor(Math.random() *  1200) + "px";
    trash.style.top = "-100px";
    trash.appendChild(document.createElement("div"));

    gameArea.appendChild(trash);
}

function updateScore(){
    title.innerHTML = "Alien Shooter<span>Score: " + score + "</span>";
}


