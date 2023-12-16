package com.quizmatrix.quizmatrix.auth.service;

import com.quizmatrix.quizmatrix.auth.dto.UserRegisterDTO;
import com.quizmatrix.quizmatrix.auth.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.quizmatrix.quizmatrix.auth.model.User;

import java.util.Optional;

public interface UserHandlingService {
    User registerUser(UserRegisterDTO registerDTO);
    Integer makeAdmin(Integer id);

    Optional<User> findUserByUsername(String username);
}
