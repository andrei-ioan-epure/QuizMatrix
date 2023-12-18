package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.QuizUser;

import java.util.List;
import java.util.Optional;

public interface QuizUserRepository {
    List<QuizUser> getAll();
    Optional<QuizUser> findById(Integer id_user,Integer id_quiz);
    List<QuizUser> findByIdUser(Integer id_user);
    QuizUser add(QuizUser quizUser);
    void deleteByQuizIdQuiz(Integer id_quiz);

}
