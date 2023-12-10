package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.QuestionDTO;
import com.quizmatrix.quizmatrix.dto.UserDTO;

import java.util.List;

public interface QuestionService {
    List<QuestionDTO> getAll();
    QuestionDTO findById(Integer id);
    QuestionDTO add( QuestionDTO question);
    void deleteById(Integer id);
    void update(Integer id, QuestionDTO question);
}
