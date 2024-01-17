package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;
import com.quizmatrix.quizmatrix.model.LeaderBoard;
import com.quizmatrix.quizmatrix.repository.interfaces.LeaderBoardRepository;
import com.quizmatrix.quizmatrix.service.interfaces.LeaderBoardService;
import com.quizmatrix.quizmatrix.service.mapper.LeaderBoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeaderBoardServiceImpl implements LeaderBoardService {

    private final LeaderBoardRepository leaderBoardRepository;
    private final LeaderBoardMapper leaderBoardMapper;

    @Autowired
    LeaderBoardServiceImpl(LeaderBoardRepository leaderBoardRepository, LeaderBoardMapper leaderBoardMapper)
    {
        this.leaderBoardRepository = leaderBoardRepository;
        this.leaderBoardMapper = leaderBoardMapper;
    }
    @Override
    public List<LeaderBoardDTO> getAll() {
        return leaderBoardRepository.getAll()
                .stream()
                .map(leaderBoardMapper::mapEntityToDto)
                .toList();
    }

    @Override
    public LeaderBoardDTO findById(Integer id) {
        Optional<LeaderBoard> leaderBoard= leaderBoardRepository.findById(id);
        return leaderBoard.map(leaderBoardMapper::mapEntityToDto).orElse(null);

    }

    @Override
    public LeaderBoardDTO add(LeaderBoardDTO score) {
        return leaderBoardMapper
                .mapEntityToDto(
                        leaderBoardRepository.add(leaderBoardMapper.mapDtoToEntity(score))
                );
    }

    @Override
    public LeaderBoardDTO findByUserIdDomainAndQuiz(Integer id_user, Integer id_domain, Integer id_quiz) {
        Optional<LeaderBoard> leaderBoard=this.leaderBoardRepository.findByUserIdDomainAndQuiz(id_user,id_domain,id_quiz);
        return leaderBoard.map(leaderBoardMapper::mapEntityToDto).orElse(null);
    }

    @Override
    public List<LeaderBoardDTO> findByDomainIdAndQuiz(Integer id_domain, Integer id_quiz) {
        Optional<List<LeaderBoard>> leaderBoard=this.leaderBoardRepository.findByDomainIdAndQuiz(id_domain,id_quiz);
        return leaderBoard.map(leaderBoards -> leaderBoards.stream().map(leaderBoardMapper::mapEntityToDto).toList()).orElse(null);
    }
    @Override
    public List<LeaderBoardDTO> findByDomainId(Integer id_domain) {
        Optional<List<LeaderBoard>> leaderBoard=this.leaderBoardRepository.findByDomainId(id_domain);
        return leaderBoard.map(leaderBoards -> leaderBoards.stream().map(leaderBoardMapper::mapEntityToDto).toList()).orElse(null);
    }
    @Override
    public void deleteById(Integer id) {
        leaderBoardRepository.deleteById(id);
    }

    @Override
    public void update(Integer id, LeaderBoardDTO newScore) {
        leaderBoardRepository.update(id, leaderBoardMapper.mapDtoToEntity(newScore));
    }
}
