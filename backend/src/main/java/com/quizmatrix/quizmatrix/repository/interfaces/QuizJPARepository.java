package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizJPARepository extends JpaRepository<Quiz,Integer> {
    @Query("SELECT q FROM Quiz q WHERE q.id_domain=:domainId")
    List<Quiz> findByDomainId(Integer domainId);;
}
