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
  addGoAgain() {
    this.goAgain = true;
  }
  action() {
    if (this.actionPoints > 0 || this.goAgain === true) {
      if (this.goAgain === true) {
        this.goAgain = false;
      } else {
        this.actionPoints -= 1;
      }
      //do card action here
    }
  }

  endTurn() {
    this.pitch = 0;
    this.actionPoints = 0;
    this.goAgain = false;
  }
}
