package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.CompletedTestsDTO;

import java.util.List;

public interface CompletedTestsService {
    List<CompletedTestsDTO> getAll();
    CompletedTestsDTO findById(Integer id_user,Integer id_quiz);
    CompletedTestsDTO add(CompletedTestsDTO completedTests);
    List<CompletedTestsDTO> findByIdUser(Integer id_user);

    void deleteByQuizIdQuiz(Integer idQuiz);

}
