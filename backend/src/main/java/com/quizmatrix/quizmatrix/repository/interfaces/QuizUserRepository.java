package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.QuizUser;
import com.quizmatrix.quizmatrix.model.QuizUserKey;

import java.util.List;
import java.util.Optional;

public interface QuizUserRepository {
    List<QuizUser> getAll();
    Optional<QuizUser> findById(Integer id_user,Integer id_quiz);
    QuizUser add(QuizUser quizUser);
    void deleteById(QuizUserKey key);
}
