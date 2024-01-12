export class Leaderboard {
  id_leaderboard: number;
  id_user: number;
  id_domain: number;
  id_quiz: number;
  score: number;
  time: number;

  constructor(
    id_user: number,
    id_domain: number,
    id_quiz: number,
    score: number,
    time: number,
    id_leaderboard: number = 0
  ) {
    this.id_leaderboard = id_leaderboard;
    this.id_user = id_user;
    this.id_domain = id_domain;
    this.id_quiz = id_quiz;
    this.score = score;
    this.time = time;
  }
}
