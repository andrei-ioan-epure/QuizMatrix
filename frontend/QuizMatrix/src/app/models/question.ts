export class Question {
  id_question: number;
  id_quiz: number;
  text: string;
  points: number;

  constructor(id_question: number, id_quiz: number, text: string, points: number) {
    this.id_question = id_question;
    this.id_quiz = id_quiz;
    this.text = text;
    this.points = points;
  }
}
