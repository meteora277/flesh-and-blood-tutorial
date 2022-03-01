class hero {
  constructor(hp, intellect) {
    this.hp = hp;
    this.intellect = intellect;
  }
  changeHp(num) {
    this.hp += num;
  }
  changeIntellect(num) {
    this.intellect += num;
  }
}
