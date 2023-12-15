package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;

import java.util.List;

public interface LeaderBoardService {
    List<LeaderBoardDTO> getAll();
    LeaderBoardDTO findById(Integer id);
    LeaderBoardDTO add(LeaderBoardDTO score);
    void deleteById(Integer id);
    void update(Integer id, LeaderBoardDTO newScore);
}
