package com.quizmatrix.quizmatrix.repository.impl;

import com.quizmatrix.quizmatrix.model.User;
import com.quizmatrix.quizmatrix.repository.interfaces.UserJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepositoryImpl implements UserRepository {

    private final UserJPARepository userJPARepository;

    @Autowired
    UserRepositoryImpl(UserJPARepository userJPARepository)
    {
        this.userJPARepository = userJPARepository;
    }

    @Override
    public List<User> getAll() {
        return userJPARepository.findAll();
    }

    @Override
    public Optional<User> findById(Integer id) {
        return userJPARepository.findById(id);
    }

    @Override
    public User add(User user) {
        return userJPARepository.save(user);
    }

    @Override
    public void deleteById(Integer id) {
        userJPARepository.deleteById(id);
    }

    @Override
    public void update(Integer id, User user) {
        Optional<User> existingUser = userJPARepository.findById(id);
        if (existingUser.isPresent()) {
            User updatedUser=existingUser.get();
            updatedUser.setFirstname(user.getFirstname());
            updatedUser.setLastname(user.getFirstname());
            updatedUser.setEmail(user.getEmail());
            updatedUser.setPassword(user.getPassword());
            updatedUser.setRole(user.getRole());
            userJPARepository.save(updatedUser);
        } else {
            userJPARepository.save(user);
        }
    }
}

