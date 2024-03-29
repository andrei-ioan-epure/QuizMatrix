package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.AnswerDTO;

import com.quizmatrix.quizmatrix.model.Answer;

import java.util.List;
import java.util.Optional;

import java.util.List;


public interface AnswerService {

    List<AnswerDTO> getAll();
    AnswerDTO findById(Integer id_answer);

    List<AnswerDTO> findByQuestionId(Integer id_question);

    AnswerDTO add(AnswerDTO answer);
    void deleteById(Integer id_answer);
    void update(Integer id_answer, AnswerDTO newAnswer);
}
