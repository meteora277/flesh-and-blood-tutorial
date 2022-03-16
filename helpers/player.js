export class player {
  constructor(name, hp, intellect) {
    this.name = name || "";
    this.hp = hp;
    this.intellect = intellect;
  }
  changeHp(num) {
    this.hp += num;
  }
  changeIntellect(num) {
    this.intellect += num;
  }
  getHp() {
    return this.hp;
  }
}
