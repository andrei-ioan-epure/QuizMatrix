package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Question;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository {
    List<Question> getAll();
    Optional<Question> findById(Integer id);
    Question add(Question question);
    void deleteById(Integer id);
    void update(Integer id, Question question);
     Optional<List<Question>> findByQuizId(Integer quizId);
}