package com.quizmatrix.quizmatrix.repository.impl;

import com.quizmatrix.quizmatrix.model.CompletedTests;
import com.quizmatrix.quizmatrix.repository.interfaces.CompletedTestsJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.CompletedTestsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CompletedTestsRepositoryImpl implements CompletedTestsRepository {

    private final CompletedTestsJPARepository completedTestsJPARepository;

    @Autowired
    CompletedTestsRepositoryImpl(CompletedTestsJPARepository completedTestsJPARepository)
    {
        this.completedTestsJPARepository = completedTestsJPARepository;
    }

    @Override
    public List<CompletedTests> getAll() {
        return completedTestsJPARepository.findAll();
    }

    @Override
    public Optional<CompletedTests> findById(Integer id_user, Integer id_quiz) {
        return completedTestsJPARepository.findById(id_user,id_quiz);
    }

    @Override
    public List<CompletedTests> findByIdUser(Integer id_user) {
        return completedTestsJPARepository.findByIdUser(id_user);
    }

    @Override
    public CompletedTests add(CompletedTests completedTests) {
        return completedTestsJPARepository.save(completedTests);
    }

    @Override
    public void deleteByQuizIdQuiz(Integer id_quiz) {
        completedTestsJPARepository.deleteByQuizIdQuiz(id_quiz);
    }
}

