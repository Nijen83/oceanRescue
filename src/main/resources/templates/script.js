const msgArea = document.querySelector("#message-area");
const gameArea = document.querySelector("#game-area");
const title = document.querySelector("h1");


function startGame(){
    msgArea.innerHTML = "";
    msgArea.classList.add("hidden");

    var rand = Math.floor(Math.random() * 6000);
    setInterval(addfishLeft, rand);
}

function addfishLeft(){
    var arr = ["fish_4", "fish_5", "seahorse", "fish_4", "stingray"];

    const fishLeft = document.createElement("div");
    fishLeft.classList.add(arr[Math.floor(Math.random() * arr.length)]);
    fishLeft.style.position = "absolute";
    fishLeft.style.left = "-200px";
    fishLeft.style.top = Math.floor(Math.random() * 550) + "px";
    fishLeft.appendChild(document.createElement("div"));

    gameArea.appendChild(fishLeft);
}

function updateScore(){
    title.innerHTML = "Alien Shooter<span>Score: " + score + "</span>";
}
