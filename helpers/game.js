import { player } from "./player";

class game {
  player1 = new player("Justin");
  get player1() {
    return this.player1.name;
  }
}
