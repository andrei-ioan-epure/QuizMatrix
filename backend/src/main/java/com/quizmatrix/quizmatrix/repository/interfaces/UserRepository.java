package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.LeaderBoard;
import com.quizmatrix.quizmatrix.model.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    List<User> getAll();
    Optional<User> findById(Integer id);
    User add(User user);
    void deleteById(Integer id);
    void update(Integer id, User user);
}
