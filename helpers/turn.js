class turn {
  pitch = 0;
  actionPoints = 1;
  goAgain = false;
  pitchCard(num) {
    this.pitch += num;
  }
  addActionPoints(num) {
    this.actionPoints += num;
  }
  addGoAgain() {}
}
