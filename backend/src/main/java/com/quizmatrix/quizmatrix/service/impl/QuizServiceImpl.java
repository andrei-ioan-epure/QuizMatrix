package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.QuizDTO;
import com.quizmatrix.quizmatrix.model.Question;
import com.quizmatrix.quizmatrix.model.Quiz;
import com.quizmatrix.quizmatrix.repository.interfaces.QuizRepository;
import com.quizmatrix.quizmatrix.service.interfaces.QuizService;
import com.quizmatrix.quizmatrix.service.mapper.QuizMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuizServiceImpl implements QuizService {

    private final QuizRepository quizRepository;

    private final QuizMapper quizMapper;

    @Autowired
    public QuizServiceImpl(QuizRepository quizRepository, QuizMapper quizMapper) {
        this.quizRepository = quizRepository;
        this.quizMapper = quizMapper;
    }

    @Override
    public List<QuizDTO> getAll() {
        return quizRepository.getAll()
                .stream()
                .map(quizMapper::mapEntityToDto)
                .toList();
    }

    @Override
    public QuizDTO findById(Integer id) {
        Optional<Quiz> question= quizRepository.findById(id);
        return question.map(quizMapper::mapEntityToDto).orElse(null);
    }

    @Override
    public QuizDTO add(QuizDTO quizDTO) {
        quizDTO.setCreation_date(new java.sql.Date(System.currentTimeMillis()));
        return quizMapper
                .mapEntityToDto(
                        quizRepository.add(quizMapper.mapDtoToEntity(quizDTO))
                );
    }

    @Override
    public void deleteById(Integer id) {
        quizRepository.deleteById(id);
    }

    @Override
    public void update(Integer id, QuizDTO quizDTO) {
        quizRepository.update(id, quizMapper.mapDtoToEntity(quizDTO));
    }
}

