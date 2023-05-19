export class Tile {
  constructor(element) {
    this.element = element;
    this.letter = null;
    this.color = null;
  }

  setLetter(letter) {
    const letterHTMLElement = document.createElement("h1");
    letterHTMLElement.textContent = letter;
    letterHTMLElement.className = "letter";
    this.letter = letter;
    this.element.append(letterHTMLElement);
    console.log("set");
  }

  setColor(color) {
    switch (color) {
      case "green":
        this.element.style.backgroundColor = "green";
        this.color = "green";
        break;
      case "yellow":
        this.element.style.backgroundColor = "orange";
        this.color = "yellow";
        break;
      case "red":
        this.element.style.backgroundColor = "red";
        this.color = "black";
        break;
    }
  }
}
