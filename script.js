/* document.querySelectorAll("button").forEach((shake) => {
  shake.addEventListener("click", (event) => {
    document.querySelectorAll(".player").forEach((player) => {
      player.classList.toggle("shake");
      player.addEventListener("animationend", shakeResult);
    });
  });
}); */

/* Sources

https://chat.openai.com/ - Brugt til at forklare fejl ved removeEventListener
https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

 */

let ranNum;
const player2 = document.querySelector("#player2");

const player1 = document.querySelector("#player1");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

document.querySelector(".rock").addEventListener("click", shakeRock);
document.querySelector(".paper").addEventListener("click", shakePaper);
document.querySelector(".scissors").addEventListener("click", shakeScissors);

function shakeRock() {
  console.log("rock");
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");
  document.querySelectorAll(".player").forEach((player) => {
    player.classList.remove("rock", "paper", "scissors");
    player.classList.toggle("shake");
    player.removeEventListener("animationend", shakeResultRock);
    player.removeEventListener("animationend", shakeResultPaper);
    player.removeEventListener("animationend", shakeResultScissor);
    /*     player2.removeEventListener("animationend", playerTwo);*/
    player.addEventListener("animationend", shakeResultRock);
    player2.addEventListener("animationend", playerTwo);
  });
}

function shakePaper() {
  console.log("paper");
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");
  document.querySelectorAll(".player").forEach((player) => {
    player.classList.remove("rock", "paper", "scissors");
    player.classList.toggle("shake");
    player.removeEventListener("animationend", shakeResultRock);
    player.removeEventListener("animationend", shakeResultPaper);
    player.removeEventListener("animationend", shakeResultScissor);
    /*     player2.removeEventListener("animationend", playerTwo);
     */ player.addEventListener("animationend", shakeResultPaper);
    player2.addEventListener("animationend", playerTwo);
  });
}

function shakeScissors() {
  console.log("scissors");
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");
  document.querySelectorAll(".player").forEach((player) => {
    player.classList.remove("rock", "paper", "scissors");
    player.classList.toggle("shake");
    player.removeEventListener("animationend", shakeResultRock);
    player.removeEventListener("animationend", shakeResultPaper);
    player.removeEventListener("animationend", shakeResultScissor);
    /*  player2.removeEventListener("animationend", playerTwo); */
    player.addEventListener("animationend", shakeResultScissor);
    player2.addEventListener("animationend", playerTwo);
  });
}

function shakeResultRock() {
  this.classList.remove("shake");
  /*   document.querySelector(".rock").removeEventListener("click", shakeRock); */
  player1.classList.add("rock");
}

function shakeResultPaper() {
  this.classList.remove("shake");
  /*   document.querySelector(".paper").removeEventListener("click", shakePaper); */
  player1.classList.add("paper");
}

function shakeResultScissor() {
  this.classList.remove("shake");
  /*   document.querySelector(".scissors").removeEventListener("click", shakeScissors); */
  player1.classList.add("scissors");
}

function playerTwo() {
  ranNum = Math.floor(Math.random() * 3) + 1;

  if (ranNum > 2) {
    console.log(ranNum);
    player2.classList.add("scissors");
  } else if (ranNum < 2) {
    console.log(ranNum);
    player2.classList.add("rock");
  } else {
    console.log(ranNum);
    player2.classList.add("paper");
  }
  finalResult();
}

function finalResult() {
  if (player1.classList.contains("rock") && player2.classList.contains("paper")) {
    lose.classList.remove("hidden");
  } else if (player1.classList.contains("rock") && player2.classList.contains("scissors")) {
    win.classList.remove("hidden");
  } else if (player1.classList.contains("paper") && player2.classList.contains("rock")) {
    win.classList.remove("hidden");
  } else if (player1.classList.contains("paper") && player2.classList.contains("scissors")) {
    lose.classList.remove("hidden");
  } else if (player1.classList.contains("scissors") && player2.classList.contains("rock")) {
    lose.classList.remove("hidden");
  } else if (player1.classList.contains("scissors") && player2.classList.contains("paper")) {
    win.classList.remove("hidden");
  } else {
    draw.classList.remove("hidden");
  }
}
