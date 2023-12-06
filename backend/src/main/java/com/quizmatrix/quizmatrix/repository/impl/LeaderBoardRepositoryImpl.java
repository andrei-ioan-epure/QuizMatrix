package com.quizmatrix.quizmatrix.repository.impl;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;
import com.quizmatrix.quizmatrix.model.LeaderBoard;
import com.quizmatrix.quizmatrix.repository.interfaces.LeaderBoardJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.LeaderBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class LeaderBoardRepositoryImpl implements LeaderBoardRepository {

    private final LeaderBoardJPARepository leaderBoardJPARepository;

    @Autowired
    LeaderBoardRepositoryImpl(LeaderBoardJPARepository leaderBoardJPARepository)
    {
        this.leaderBoardJPARepository = leaderBoardJPARepository;
    }

    @Override
    public List<LeaderBoard> getAll() {
        return leaderBoardJPARepository.findAll();
    }

    @Override
    public Optional<LeaderBoard> findById(Integer id) {
        return leaderBoardJPARepository.findById(id);
    }

    @Override
    public LeaderBoard add(LeaderBoard score) {
        return leaderBoardJPARepository.save(score);
    }

    @Override
    public void deleteById(Integer id) {
        leaderBoardJPARepository.deleteById(id);
    }

    @Override
    public void update(Integer id, LeaderBoard leaderBoard) {
        Optional<LeaderBoard> existingLeaderBoard = leaderBoardJPARepository.findById(id);
        if (existingLeaderBoard.isPresent()) {
            LeaderBoard updatedLeaderBoard=existingLeaderBoard.get();
            updatedLeaderBoard.setScore(leaderBoard.getScore());
            updatedLeaderBoard.setTime(leaderBoard.getTime());
            updatedLeaderBoard.setId_user(leaderBoard.getId_user());
            updatedLeaderBoard.setId_domain(leaderBoard.getId_domain());
            leaderBoardJPARepository.save(updatedLeaderBoard);
        } else {
            leaderBoardJPARepository.save(leaderBoard);
        }
    }
}
