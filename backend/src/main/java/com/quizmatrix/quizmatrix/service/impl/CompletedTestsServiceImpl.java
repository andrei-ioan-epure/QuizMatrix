package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.CompletedTestsDTO;
import com.quizmatrix.quizmatrix.model.CompletedTests;
import com.quizmatrix.quizmatrix.repository.interfaces.CompletedTestsRepository;
import com.quizmatrix.quizmatrix.service.interfaces.CompletedTestsService;
import com.quizmatrix.quizmatrix.service.mapper.CompletedTestsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CompletedTestsServiceImpl implements CompletedTestsService {

    private final CompletedTestsRepository completedTestsRepository;
    private final CompletedTestsMapper completedTestsMapper;

    @Autowired
    CompletedTestsServiceImpl(CompletedTestsRepository completedTestsRepository,CompletedTestsMapper completedTestsMapper)
    {
        this.completedTestsRepository = completedTestsRepository;
        this.completedTestsMapper = completedTestsMapper;
    }
    @Override
    public List<CompletedTestsDTO> getAll() {
        return completedTestsRepository.getAll()
                .stream()
                .map(completedTestsMapper::mapEntityToDto)
                .toList();
    }

    @Override
    public CompletedTestsDTO findById(Integer id_user, Integer id_quiz) {
        Optional<CompletedTests> user= completedTestsRepository.findById(id_user,id_quiz);
        return user.map(completedTestsMapper::mapEntityToDto).orElse(null);

    }

    @Override
    public CompletedTestsDTO add(CompletedTestsDTO completedTestsDTO) {
        return completedTestsMapper
                .mapEntityToDto(
                        completedTestsRepository.add(completedTestsMapper.mapDtoToEntity(completedTestsDTO))
                );
    }

    @Override
    public void deleteByQuizIdQuiz(Integer id_quiz) {
        completedTestsRepository.deleteByQuizIdQuiz(id_quiz);
    }

    @Override
    public List<CompletedTestsDTO> findByIdUser(Integer id_user) {
        List<CompletedTests> completedTests = completedTestsRepository.findByIdUser(id_user);
        return completedTests.stream()
                .map(completedTestsMapper::mapEntityToDto)
                .collect(Collectors.toList());
    }

}


