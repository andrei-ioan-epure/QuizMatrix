package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;



public interface AnswerJPARepository extends JpaRepository<Answer,Integer> {
    @Query("SELECT a FROM answer a WHERE a.question.id_question = :id_question")
    Optional<List<Answer>> findByQuestionId(Integer id_question);
}

