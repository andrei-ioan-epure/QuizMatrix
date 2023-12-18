package com.quizmatrix.quizmatrix.repository.impl;


import com.quizmatrix.quizmatrix.model.QuizUser;
import com.quizmatrix.quizmatrix.repository.interfaces.QuizUserJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.QuizUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class QuizUserRepositoryImpl implements QuizUserRepository {

    private final QuizUserJPARepository quizUserJPARepository;

    @Autowired
    QuizUserRepositoryImpl(QuizUserJPARepository quizUserJPARepository)
    {
        this.quizUserJPARepository = quizUserJPARepository;
    }

    @Override
    public List<QuizUser> getAll() {
        return quizUserJPARepository.findAll();
    }

    @Override
    public Optional<QuizUser> findById(Integer id_user,Integer id_quiz) {
        return quizUserJPARepository.findById(id_user,id_quiz);
    }

    @Override
    public List<QuizUser> findByIdUser(Integer id_user) {
        return quizUserJPARepository.findByIdUser(id_user);
    }

    @Override
    public QuizUser add(QuizUser quizUser) {
        return quizUserJPARepository.save(quizUser);
    }

    @Override
    public void deleteByQuizIdQuiz(Integer id_quiz) {
        quizUserJPARepository.deleteByQuizIdQuiz(id_quiz);
    }




}

