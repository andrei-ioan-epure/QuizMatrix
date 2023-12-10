package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.UserDTO;
import com.quizmatrix.quizmatrix.model.User;
import com.quizmatrix.quizmatrix.repository.interfaces.UserRepository;
import com.quizmatrix.quizmatrix.service.interfaces.UserService;
import com.quizmatrix.quizmatrix.service.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Autowired
    UserServiceImpl(UserRepository userRepository,UserMapper userMapper)
    {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }
    @Override
    public List<UserDTO> getAll() {
        return userRepository.getAll()
                .stream()
                .map(userMapper::mapEntityToDto)
                .toList();
    }

    @Override
    public UserDTO findById(Integer id) {
        Optional<User> user= userRepository.findById(id);
        return user.map(userMapper::mapEntityToDto).orElse(null);

    }

    @Override
    public UserDTO add(UserDTO user) {
        return userMapper
                .mapEntityToDto(
                        userRepository.add(userMapper.mapDtoToEntity(user))
                );
    }

    @Override
    public void deleteById(Integer id) {
        userRepository.deleteById(id);
    }

    @Override
    public void update(Integer id, UserDTO user) {
        userRepository.update(id, userMapper.mapDtoToEntity(user));
    }
}

