package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.LeaderBoard;

import java.util.List;
import java.util.Optional;

public interface LeaderBoardRepository {

    List<LeaderBoard> getAll();
    Optional<LeaderBoard> findById(Integer id);
    LeaderBoard add(LeaderBoard score);
    void deleteById(Integer id);
    void update(Integer id, LeaderBoard newScore);
}
