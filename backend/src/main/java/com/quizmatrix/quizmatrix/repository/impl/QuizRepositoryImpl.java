package com.quizmatrix.quizmatrix.repository.impl;

import com.quizmatrix.quizmatrix.model.Question;
import com.quizmatrix.quizmatrix.model.Quiz;
import com.quizmatrix.quizmatrix.repository.interfaces.QuestionJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.QuizJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class QuizRepositoryImpl implements QuizRepository {

    private final QuizJPARepository quizJPARepository;

    @Autowired
    public QuizRepositoryImpl(QuizJPARepository quizJPARepository) {
        this.quizJPARepository = quizJPARepository;
    }

    @Override
    public List<Quiz> getAll() {
        return quizJPARepository.findAll();
    }

    @Override
    public Optional<Quiz> findById(Integer id) {
        return quizJPARepository.findById(id);
    }

    @Override
    public Quiz add(Quiz quiz) {
        return quizJPARepository.save(quiz);
    }

    @Override
    public void deleteById(Integer id) {
        quizJPARepository.deleteById(id);
    }

    @Override
    public void update(Integer id, Quiz quiz) {
        Optional<Quiz> existingQuiz = quizJPARepository.findById(id);
        if (existingQuiz.isPresent()) {
            Quiz updatedQuiz = existingQuiz.get();
            updatedQuiz.setId_domain(quiz.getId_domain());
            updatedQuiz.setTitle(quiz.getTitle());
            updatedQuiz.setDescription(quiz.getDescription());
            quizJPARepository.save(updatedQuiz);
        } else {
            quizJPARepository.save(quiz);
        }
    }
}
