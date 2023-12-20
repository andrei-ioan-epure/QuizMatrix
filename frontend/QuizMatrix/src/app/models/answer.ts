export class Answer {
  id_answer: number;
  id_question: number;
  answer_text: string;
  isCorrect: boolean;

  constructor(id_answer: number, id_question: number, answer_text: string, isCorrect: boolean) {
    this.id_answer = id_answer;
    this.id_question = id_question;
    this.answer_text = answer_text;
    this.isCorrect = isCorrect;
  }
}
