import { words } from "./words.js";

export class Game {
  constructor() {
    this.word = this.getRandomWord();
    this.letterCounter = 0;
    this.attempt = 1;
  }

  getRandomWord() {
    const index = Math.floor(Math.random() * words.length);

    return words[index].toLowerCase().split("");
  }

  getEnteredLetters() {
    const array = [];

    for (let i = 1; i <= 16; i++) {
      const tile = window["Tile" + i];

      if (tile.letter && !tile.color) {
        array.push(tile);
      }
    }

    return array;
  }

  compareWords() {
    const enteredLetters = this.getEnteredLetters();
    let guessed = true;

    // Set colors.
    for (let i = 0; i < enteredLetters.length; i++) {
      const letter = enteredLetters[i].letter;

      if (letter === this.word[i]) {
        enteredLetters[i].setColor("green");
      } else if (this.word.includes(letter)) {
        enteredLetters[i].setColor("yellow");
        guessed = false;
      } else {
        enteredLetters[i].setColor("red");
        guessed = false;
      }
    }

    const gameInfo = document.querySelector(".game-info");
    const attempt = document.querySelector("#attempt");

    setTimeout(() => {
      if (guessed) {
        gameInfo.insertAdjacentHTML(
          "afterend",
          `<div class='game-result'><h2 style='color: green'>You won!</h2><button id='repeat'>Repeat</button></div>`
        );
        repeat.onclick = this.repeat;

        let winnings_ = localStorage.getItem("winnings");
        ++winnings_ + 1;
        winnings.innerText = winnings_;
        localStorage.setItem("winnings", winnings_);
      } else if (this.attempt === 4) {
        gameInfo.insertAdjacentHTML(
          "afterend",
          `<div class='game-result'><h2 style='color: red'>You lose!</h2><button id='repeat'>Repeat</button></div>`
        );
        repeat.onclick = this.repeat;

        let losses_ = localStorage.getItem("losses");
        ++losses_ + 1;
        losses.innerText = losses_;
        localStorage.setItem("losses", losses_);
      } else {
        this.attempt++;
        attempt.innerText = this.attempt;
        this.letterCounter = 0;
      }
    }, 500);
  }

  repeat = () => {
    this.attempt = 1;
    attempt.innerText = 1;
    this.letterCounter = 0;
    this.word = this.getRandomWord();

    for (let i = 1; i <= 16; i++) {
      const tile = window["Tile" + i];

      if (tile.letter && tile.color) {
        tile.letter = null;
        tile.color = null;
        tile.element.style.backgroundColor = "initial";
        tile.element.innerHTML = "";
      }
    }

    const gameResult = document.querySelector(".game-result");
    gameResult.remove();
  };
}
