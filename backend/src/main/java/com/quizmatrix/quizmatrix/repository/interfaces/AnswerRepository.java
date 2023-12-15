package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Answer;
import com.quizmatrix.quizmatrix.model.LeaderBoard;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository {

    List<Answer> getAll();
    Optional<Answer> findById(Integer id_answer);
    Answer add(Answer answer);
    void deleteById(Integer id_answer);
    void update(Integer id_answer, Answer newAnswer);
}
