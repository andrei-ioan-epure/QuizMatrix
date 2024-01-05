package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.LeaderBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface LeaderBoardJPARepository extends JpaRepository<LeaderBoard,Integer> {
 @Query("SELECT l FROM leaderboard_domain l " +
         "WHERE l.id_user = :id_user AND l.id_domain = :id_domain AND l.id_quiz = :id_quiz")
 Optional<LeaderBoard> findByUserIdDomainAndQuiz(
         @Param("id_user") Integer id_user,
         @Param("id_domain") Integer id_domain,
         @Param("id_quiz") Integer id_quiz
 );
 @Query("SELECT l FROM leaderboard_domain l " +
         "WHERE  l.id_domain = :id_domain AND l.id_quiz = :id_quiz")
 Optional<List<LeaderBoard>>   findByDomainIdAndQuiz(
         @Param("id_domain") Integer id_domain,
         @Param("id_quiz") Integer id_quiz
 );
}
