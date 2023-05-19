export class Backspace {
  constructor(element) {
    this.element = element;

    this.element.addEventListener("click", () => {
      this.click();
    });
  }

  click() {
    console.log("backspace");
    for (let i = 16; i >= 1; i--) {
      const tile = window["Tile" + i];

      if (tile.letter && !tile.color) {
        tile.element.querySelector(".letter").remove();
        tile.letter = null;
        window.game.letterCounter--;

        break;
      }
    }
  }
}
