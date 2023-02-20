const msgArea = document.querySelector("#message-area");
const gameArea = document.querySelector("#game-area");
const title = document.querySelector("h1");
let score = 0

function startGame(){
    msgArea.innerHTML = "";
    msgArea.classList.add("hidden");

    addTarget();
    updateScore();
}

function addTarget(){
    const target = document.createElement("div");
    target.classList.add("target");
    target.style.position = "absolute";
    target.style.top = "-100px";
    target.style.top = Math.floor(Math.random() * 520) + "px";

    target.style.left = "0px";
    target.appendChild(document.createElement("div"));

    gameArea.appendChild(target);

    target.addEventListener('click', ()=> {
        document.querySelector(".target").remove();
        addTarget();
        score++;
        updateScore();
    });
}

function updateScore(){
    title.innerHTML = "Alien Shooter<span>Score: " + score + "</span>";
}





