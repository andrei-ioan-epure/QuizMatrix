package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.repository.model.UserScore;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreJPARepository extends JpaRepository<UserScore,Long> {

}
