package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Quiz;

import java.util.List;
import java.util.Optional;

public interface QuizRepository {
    List<Quiz> getAll();
    Optional<Quiz> findById(Integer id);
    Quiz add(Quiz quiz);
    void deleteById(Integer id);
    void update(Integer id, Quiz quiz);
}
