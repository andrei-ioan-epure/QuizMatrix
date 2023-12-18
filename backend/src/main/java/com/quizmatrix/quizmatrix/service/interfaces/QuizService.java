package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.CreateQuizDTO;
import com.quizmatrix.quizmatrix.dto.QuizDTO;

import java.util.List;

public interface QuizService {
    List<QuizDTO> getAll();
    QuizDTO findById(Integer id);
    QuizDTO add(CreateQuizDTO quiz);
    void deleteById(Integer id);
    void update(Integer id, CreateQuizDTO quiz);
}
