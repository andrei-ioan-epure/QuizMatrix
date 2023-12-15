package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.QuestionDTO;
import com.quizmatrix.quizmatrix.model.Question;
import com.quizmatrix.quizmatrix.repository.interfaces.QuestionRepository;
import com.quizmatrix.quizmatrix.service.interfaces.QuestionService;
import com.quizmatrix.quizmatrix.service.mapper.QuestionMapper;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;

    public QuestionServiceImpl(QuestionRepository questionRepository, QuestionMapper questionMapper) {
        this.questionRepository = questionRepository;
        this.questionMapper = questionMapper;
    }

    @Override
    public List<QuestionDTO> getAll() {
        return questionRepository.getAll()
                .stream()
                .map(questionMapper::mapEntityToDto)
                .toList();
    }

    @Override
    public QuestionDTO findById(Integer id) {
        Optional<Question> question= questionRepository.findById(id);
        return question.map(questionMapper::mapEntityToDto).orElse(null);
    }

    @Override
    public QuestionDTO add(QuestionDTO question) {
        return questionMapper
                .mapEntityToDto(
                        questionRepository.add(questionMapper.mapDtoToEntity(question))
                );
    }

    @Override
    public void deleteById(Integer id) {
        questionRepository.deleteById(id);
    }

    @Override
    public void update(Integer id, QuestionDTO question) {
        questionRepository.update(id, questionMapper.mapDtoToEntity(question));
    }
}
