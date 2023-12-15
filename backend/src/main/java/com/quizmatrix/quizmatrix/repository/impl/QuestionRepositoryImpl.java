package com.quizmatrix.quizmatrix.repository.impl;

import com.quizmatrix.quizmatrix.model.Question;
import com.quizmatrix.quizmatrix.model.Quiz;
import com.quizmatrix.quizmatrix.repository.interfaces.QuestionJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.QuestionRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class QuestionRepositoryImpl implements QuestionRepository {

    private final QuestionJPARepository questionJPARepository;

    @Autowired
    QuestionRepositoryImpl(QuestionJPARepository questionJPARepository)
    {
        this.questionJPARepository = questionJPARepository;
    }

    @Override
    public List<Question> getAll() {
        return questionJPARepository.findAll();
    }

    @Override
    public Optional<Question> findById(Integer id) {
        return questionJPARepository.findById(id);
    }

    @Override
    public Question add(Question question) {
        return questionJPARepository.save(question);
    }

    @Override
    @Transactional
    public void deleteById(Integer id) {
        Optional<Question> optionalQuestion = questionJPARepository.findById(id);
        optionalQuestion.ifPresent(question -> {
            // Remove the question from the associated quiz
            Quiz quiz = question.getQuiz();
            if (quiz != null) {
                quiz.getQuestions().remove(question);
            }
            questionJPARepository.deleteById(id);
        });
    }

    @Override
    @Transactional
    public void update(Integer id, Question question) {
        Optional<Question> existingQuestion = questionJPARepository.findById(id);
        if (existingQuestion.isPresent()) {
            Question updatedQuestion=existingQuestion.get();
            updatedQuestion.setText(question.getText());
            updatedQuestion.setPoints(question.getPoints());
            questionJPARepository.save(updatedQuestion);
        } else {
            questionJPARepository.save(question);
        }
    }
}


