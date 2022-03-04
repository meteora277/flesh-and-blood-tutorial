import { player } from "./player";

export default class game {
  constructor(name1, name2) {
    this.player1 = new player(name1);
    this.player2 = new player(name2);
  }
  getPlayer1() {
    return this.player1.name;
  }
  setPlayer1(name) {
    this.player1 = name;
  }
}
