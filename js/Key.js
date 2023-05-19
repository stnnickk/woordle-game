export class Key {
  constructor(key, element) {
    this.key = key;
    this.element = element;

    this.element.addEventListener("click", () => {
      this.click(this.key);
    });
  }

  click(key) {
    if (window.game.letterCounter !== 4) {
      for (let i = 1; i <= 16; i++) {
        const tile = window["Tile" + i];

        if (tile.letter === null) {
          tile.setLetter(key);
          window.game.letterCounter++;

          break;
        }
      }
    }
  }
}
