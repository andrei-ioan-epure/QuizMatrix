import { Answer } from './answer';

export class Question {
  id_question: number;
  id_quiz: number;
  text: string;
  points: number;
  answers: Answer[] = [];

  constructor(
    id_question: number,
    id_quiz: number,
    text: string,
    points: number
    // answer: Answer[]
  ) {
    this.id_question = id_question;
    this.id_quiz = id_quiz;
    this.text = text;
    this.points = points;
    //  this.answers = answer;
  }
}
