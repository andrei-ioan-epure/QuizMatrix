package com.quizmatrix.quizmatrix.auth.service.impl;

import com.quizmatrix.quizmatrix.auth.dto.UserRegisterDTO;
import com.quizmatrix.quizmatrix.auth.model.User;
import com.quizmatrix.quizmatrix.auth.repository.UserRepository;
import com.quizmatrix.quizmatrix.auth.service.UserHandlingService;
import com.quizmatrix.quizmatrix.auth.util.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserHandlingServiceImpl implements UserHandlingService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public UserHandlingServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder)
    {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }
    @Override
    public User registerUser(UserRegisterDTO user)
    {
        User u = new User();
        u.setFirstname(user.getFirstname());
        u.setLastname(user.getLastname());
        u.setEmail(user.getEmail());
        u.setPassword(passwordEncoder.encode(user.getPassword()));
        u.setRole(Constant.UserRole.USER);
        return userRepository.save(u);

    }

    @Override
    public Integer makeAdmin(Integer id) {
        return userRepository.makeAdmin(id);
    }

    @Override
    public Optional<User> findUserByEmail(String username) {
        return userRepository.findUserByEmail(username);
    }
}
