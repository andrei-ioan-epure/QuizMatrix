import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

describe('Question', () => {
  it('should create a question instance', () => {
    // Arrange
    const id_question = 1;
    const id_quiz = 1;
    const text = 'What is the capital of France?';
    const points = 5;

    // Act
    const question = new Question(id_question, id_quiz, text, points);

    // Assert
    expect(question).toBeTruthy();
    expect(question.id_question).toEqual(id_question);
    expect(question.id_quiz).toEqual(id_quiz);
    expect(question.text).toEqual(text);
    expect(question.points).toEqual(points);
    expect(question.answers).toEqual([]);
  });

  it('should add an answer to the question', () => {
    // Arrange
    const id_question = 1;
    const id_quiz = 1;
    const text = 'What is the capital of France?';
    const points = 5;

    const question = new Question(id_question, id_quiz, text, points);

    const id_answer = 1; // provide an ID value
    const answerText = 'Paris';
    const isCorrect = true;
    const answer = new Answer(id_answer, id_question, answerText, isCorrect);

    // Act
    question.answers.push(answer);

    // Assert
    expect(question.answers.length).toEqual(1);
    expect(question.answers[0]).toEqual(answer);
  });
});
