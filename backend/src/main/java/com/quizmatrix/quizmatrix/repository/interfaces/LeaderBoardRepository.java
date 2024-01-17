package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;
import com.quizmatrix.quizmatrix.model.LeaderBoard;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface LeaderBoardRepository {

    List<LeaderBoard> getAll();
    Optional<LeaderBoard> findById(Integer id);
    LeaderBoard add(LeaderBoard score);
    Optional<LeaderBoard>  findByUserIdDomainAndQuiz(Integer id_user, Integer id_domain, Integer id_quiz);
    Optional<List<LeaderBoard>>  findByDomainIdAndQuiz(Integer id_domain, Integer id_quiz);
    void deleteById(Integer id);
    void update(Integer id, LeaderBoard newScore);
    Optional<List<LeaderBoard>> findByDomainId(Integer id_domain);

}
