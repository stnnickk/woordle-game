export class Enter {
  constructor(element) {
    this.element = element;

    this.element.addEventListener("click", () => {
      this.click();
    });
  }

  click() {
    if (window.game.letterCounter === 4) {
      window.game.compareWords();
    }
  }
}
