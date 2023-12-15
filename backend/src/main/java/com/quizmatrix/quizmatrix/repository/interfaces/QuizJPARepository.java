package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizJPARepository extends JpaRepository<Quiz,Integer> {
}
