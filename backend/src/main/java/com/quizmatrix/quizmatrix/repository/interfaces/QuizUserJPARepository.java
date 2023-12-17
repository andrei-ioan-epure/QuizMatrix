package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.QuizUser;
import com.quizmatrix.quizmatrix.model.QuizUserKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface QuizUserJPARepository extends JpaRepository<QuizUser, QuizUserKey> {

    @Query("SELECT u FROM QuizUser u WHERE u.quizUserKey.id_user=:id_user and u.quizUserKey.id_quiz=:id_quiz ")
    Optional<QuizUser> findById(@Param("id_user") Integer id_user, @Param("id_quiz") Integer id_quiz);
}
