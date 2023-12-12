package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.AnswerDTO;
import com.quizmatrix.quizmatrix.model.Answer;
import com.quizmatrix.quizmatrix.repository.interfaces.AnswerRepository;
import com.quizmatrix.quizmatrix.service.interfaces.AnswerService;
import com.quizmatrix.quizmatrix.service.mapper.AnswerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerServiceImpl implements AnswerService {
    private final AnswerRepository answerRepository;
    private final AnswerMapper answerMapper;

    @Autowired
    AnswerServiceImpl(AnswerRepository answerRepository,
                      AnswerMapper answerMapper) {
        this.answerRepository = answerRepository;
        this.answerMapper = answerMapper;
    }

    @Override
    public List<AnswerDTO> getAll() {
        return this.answerRepository
                .getAll()
                .stream()
                .map(answerMapper::mapEntityToDto)
                .toList();
    }

    @Override
    public AnswerDTO findById(Integer id_answer) {
        Optional<Answer> answer = this.answerRepository.findById(id_answer);
        return answer.map(this.answerMapper::mapEntityToDto).orElse(null);
    }

    @Override
    public AnswerDTO add(AnswerDTO answer) {
        return this.answerMapper.mapEntityToDto(this.answerRepository
                .add(this.answerMapper.mapDtoToEntity(answer))
        );
    }

    @Override
    public void deleteById(Integer id_answer) {
        this.answerRepository.deleteById(id_answer);
    }

    @Override
    public void update(Integer id_answer, AnswerDTO newAnswer) {
        this.answerRepository.update(id_answer, this.answerMapper.mapDtoToEntity(newAnswer));
    }
}
