package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.QuizUserDTO;

import java.util.List;

public interface QuizUserService {
    List<QuizUserDTO> getAll();
    QuizUserDTO findById(Integer id_user,Integer id_quiz);
    QuizUserDTO add(QuizUserDTO quizUser);
    List<QuizUserDTO> findByIdUser(Integer id_user);

    void deleteByQuizIdQuiz(Integer idQuiz);

}
