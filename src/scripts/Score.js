class Score {
  constructor() {
    this.high = +localStorage.getItem("high_score") ?? 0;
  }
  getHighScore() {
    return this.high;
  }
  setHighScore(score) {
    this.high = score;
    localStorage.setItem("high_score", score.toString());
  }
  updateHighScore(score) {
    if (score > this.high) {
      this.setHighScore(score);
    }
  }
}
