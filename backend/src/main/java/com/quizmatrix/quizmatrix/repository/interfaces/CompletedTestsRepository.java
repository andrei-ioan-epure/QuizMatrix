package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.CompletedTests;
import com.quizmatrix.quizmatrix.model.QuizUser;

import java.util.List;
import java.util.Optional;

public interface CompletedTestsRepository {
    List<CompletedTests> getAll();
    Optional<CompletedTests> findById(Integer id_user, Integer id_quiz);
    List<CompletedTests> findByIdUser(Integer id_user);
    CompletedTests add(CompletedTests completedTests);
    void deleteByQuizIdQuiz(Integer id_quiz);

}
