package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerJPARepository extends JpaRepository<Answer,Integer> {
}
