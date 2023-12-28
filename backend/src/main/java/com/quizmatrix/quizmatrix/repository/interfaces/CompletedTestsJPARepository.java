package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.CompletedTests;
import com.quizmatrix.quizmatrix.model.QuizUser;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CompletedTestsJPARepository extends JpaRepository<CompletedTests, Integer> {

    @Query("SELECT u FROM CompletedTests u WHERE u.id_user=:id_user and u.id_quiz=:id_quiz ")
    Optional<CompletedTests> findById(@Param("id_user") Integer id_user, @Param("id_quiz") Integer id_quiz);

    @Query("SELECT u FROM CompletedTests u WHERE u.id_user=:id_user")
    List<CompletedTests> findByIdUser(@Param("id_user") Integer id_user);

    @Modifying
    @Transactional
    @Query("DELETE FROM CompletedTests u WHERE u.id_quiz=:id_quiz")
    void deleteByQuizIdQuiz(@Param("id_quiz") Integer id_quiz);

}