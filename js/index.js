import { Game } from "./Game.js";
import { Tile } from "./Tile.js";
import { Key } from "./Key.js";
import { Enter } from "./Enter.js";
import { Backspace } from "./Backspace.js";

document.addEventListener("DOMContentLoaded", () => {
  window.game = new Game();

  const winnings_ = localStorage.getItem("winnings");
  const losses_ = localStorage.getItem("losses");

  if (!winnings_ && !losses_) {
    localStorage.setItem("winnings", "0");
    localStorage.setItem("losses", "0");
  }

  winnings.innerText = winnings_;
  losses.innerText = losses_;

  const keys = document.querySelectorAll(".keyboard__key");
  const tiles = document.querySelectorAll(".board__row-tile");

  keys.forEach((key) => {
    const dataKey = key.getAttribute("data-key");

    if (dataKey === "enter") {
      window["Key " + dataKey] = new Enter(key);
    } else if (dataKey === "backspace") {
      window["Key " + dataKey] = new Backspace(key);
    } else {
      window["Key " + dataKey] = new Key(dataKey, key);
    }
  });

  tiles.forEach((tile, i) => {
    window["Tile" + (i + 1)] = new Tile(tile);
  });
});
