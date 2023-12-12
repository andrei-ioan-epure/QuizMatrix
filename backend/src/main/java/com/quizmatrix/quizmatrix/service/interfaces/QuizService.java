package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.QuizDTO;

import java.util.List;

public interface QuizService {
    List<QuizDTO> getAll();
    QuizDTO findById(Integer id);
    QuizDTO add(QuizDTO quiz);
    void deleteById(Integer id);
    void update(Integer id, QuizDTO quiz);
}
