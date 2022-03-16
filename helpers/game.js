import { player } from "./player";

export default class game {
  constructor(name1, name2) {
    this.player1 = new player(name1, 20, 4);
    this.player2 = new player(name2, 20, 4);
  }
  isGameOver() {
    if (this.player1.getHp() === 0 || this.player2.getHp() === 0) {
      return true;
    } else {
      return false;
    }
  }
}
