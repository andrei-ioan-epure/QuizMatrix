package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;
import com.quizmatrix.quizmatrix.model.LeaderBoard;

import java.util.List;
import java.util.Optional;

public interface LeaderBoardService {
    List<LeaderBoardDTO> getAll();
    LeaderBoardDTO findById(Integer id);
    LeaderBoardDTO add(LeaderBoardDTO score);
    LeaderBoardDTO findByUserIdDomainAndQuiz(Integer id_user, Integer id_domain, Integer id_quiz);
    List<LeaderBoardDTO> findByDomainIdAndQuiz(Integer id_domain, Integer id_quiz) ;
    List<LeaderBoardDTO> findByDomainId(Integer id_domain);
    void deleteById(Integer id);
    void update(Integer id, LeaderBoardDTO newScore);
}
