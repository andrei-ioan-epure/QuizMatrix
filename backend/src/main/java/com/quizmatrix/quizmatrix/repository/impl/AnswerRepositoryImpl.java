package com.quizmatrix.quizmatrix.repository.impl;

import com.quizmatrix.quizmatrix.model.Answer;
import com.quizmatrix.quizmatrix.repository.interfaces.AnswerJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.AnswerRepository;
import com.quizmatrix.quizmatrix.service.mapper.AnswerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AnswerRepositoryImpl implements AnswerRepository {
    private final AnswerJPARepository answerJPARepository;

    @Autowired
    AnswerRepositoryImpl(AnswerJPARepository answerJPARepository)
    {
        this.answerJPARepository=answerJPARepository;
    }
    @Override
    public List<Answer> getAll() {
        return this.answerJPARepository.findAll();
    }

    @Override
    public Optional<Answer> findById(Integer id_answer) {
        return this.answerJPARepository.findById(id_answer);
    }

    @Override
    public Answer add(Answer answer) {
        return this.answerJPARepository.save(answer);
    }

    @Override
    public void deleteById(Integer id_answer) {
        this.answerJPARepository.deleteById(id_answer);
    }

    @Override
    public void update(Integer id_answer, Answer newAnswer) {
        Optional<Answer> existingAnswer = this.answerJPARepository.findById(id_answer);
        if (existingAnswer.isPresent()) {
            Answer updatedAnswer=existingAnswer.get();
            updatedAnswer.setId_question(newAnswer.getId_question());
            updatedAnswer.setAnswer_text(newAnswer.getAnswer_text());
            updatedAnswer.setIsCorrect(newAnswer.getIsCorrect());
            this.answerJPARepository.save(updatedAnswer);
        }
        else {
            this.answerJPARepository.save(newAnswer);
        }
    }
}
