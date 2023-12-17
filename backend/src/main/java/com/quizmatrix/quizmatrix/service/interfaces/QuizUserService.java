package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.QuizUserDTO;
import com.quizmatrix.quizmatrix.model.QuizUserKey;

import java.util.List;

public interface QuizUserService {
    List<QuizUserDTO> getAll();
    QuizUserDTO findById(Integer id_user,Integer id_quiz);
    QuizUserDTO add(QuizUserDTO quizUser);
    void deleteById(QuizUserKey key);
//    void update(Integer id, QuizUserDTO user);
}
