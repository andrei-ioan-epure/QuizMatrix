package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface QuestionJPARepository extends JpaRepository<Question,Integer> {
     @Query("SELECT q FROM Question q WHERE q.quiz.id_quiz = :quizId")
     Optional<List<Question>> findByQuizId(Integer quizId);
}
