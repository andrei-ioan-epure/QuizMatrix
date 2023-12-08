package com.quizmatrix.quizmatrix.repository.impl;

import com.quizmatrix.quizmatrix.model.Question;
import com.quizmatrix.quizmatrix.repository.interfaces.QuestionJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.QuestionRepository;
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
    public void deleteById(Integer id) {
        questionJPARepository.deleteById(id);
    }

    @Override
    public void update(Integer id, Question question) {
        Optional<Question> existingQuestion = questionJPARepository.findById(id);
        if (existingQuestion.isPresent()) {
            Question updatedQuestion=existingQuestion.get();
            updatedQuestion.setId_quiz(question.getId_quiz());
            updatedQuestion.setText(question.getText());
            updatedQuestion.setPoints(question.getPoints());
            questionJPARepository.save(updatedQuestion);
        } else {
            questionJPARepository.save(question);
        }
    }
}


