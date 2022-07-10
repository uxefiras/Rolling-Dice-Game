"use strict";
// Selectin all elements
const tottaPlayer1 = document.querySelector(".player-1-total");
const tottaPlayer2 = document.querySelector(".player-2-total");
const diceNumberPlayer1 = document.querySelector(".into-rn-player1");
const diceNumberPlayer2 = document.querySelector(".into-rn-player2");
const resetGame = document.querySelector(".reset-game");
const rollDice = document.querySelector(".roll");
const holdDice = document.querySelector(".hold");
const diceImages = document.querySelector(".dice-faces");
const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");
const king1 = document.querySelector(".King1");
const king2 = document.querySelector(".King2");
const loser1 = document.querySelector(".loser1");
const loser2 = document.querySelector(".loser2");

//initializing the game
let playerSide = 0;
let playersTottal = [95, 0];
let playersTottals = [0, 0];
let dice;

// Function to roll the dice
rollDice.addEventListener("click", function() {
    dice = Math.floor(Math.random() * 6) + 1;
    diceImages.src = `./IMGs/Dice ${dice}.png`;
    if (playerSide === 0) {
        if (dice !== 1) {
            playersTottals[0] += dice;
            diceNumberPlayer1.innerHTML = playersTottals[0];
        } else {
            playersTottals[0] = 0;
            diceNumberPlayer1.innerHTML = playersTottals[0];
            playerSide = 1;
            leftSide.classList.remove("full-white");
            rightSide.classList.add("full-white");
        }
    } else {
        if (dice !== 1) {
            playersTottals[1] += dice;
            diceNumberPlayer2.innerHTML = playersTottals[1];
        } else {
            playersTottals[1] = 0;
            diceNumberPlayer2.innerHTML = playersTottals[1];
            playerSide = 0;
            rightSide.classList.remove("full-white");
            leftSide.classList.add("full-white");
        }
    }
});

holdDice.addEventListener("click", function() {
    if (playerSide === 0) {
        playersTottal[0] += playersTottals[0];
        tottaPlayer1.innerHTML = playersTottal[0];
        playerSide = 1;
        leftSide.classList.remove("full-white");
        rightSide.classList.add("full-white");
    } else {
        playersTottal[1] += playersTottals[1];
        tottaPlayer2.innerHTML = playersTottal[1];
        playerSide = 0;
        rightSide.classList.remove("full-white");
        leftSide.classList.add("full-white");
    }
    playersTottals = [0, 0];
    diceNumberPlayer1.innerHTML = playersTottals[0];
    diceNumberPlayer2.innerHTML = playersTottals[1];

    if (playersTottal[0] >= 100) {
        king1.style.display = "inline-block";
        loser2.style.display = "inline-block";
        holdDice.disabled = true;
        rollDice.disabled = true;
    } else if (playersTottal[1] >= 100) {
        king2.style.display = "inline-block";
        loser1.style.display = "inline-block";
        holdDice.disabled = true;
        rollDice.disabled = true;
    }
});

resetGame.addEventListener("click", function() {
    playersTottals = [0, 0];
    tottaPlayer1.innerHTML = playersTottals[0];
    tottaPlayer2.innerHTML = playersTottals[1];
    diceNumberPlayer1.innerHTML = playersTottals[0];
    diceNumberPlayer2.innerHTML = playersTottals[1];
});