package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> getAll();
    UserDTO findById(Integer id);
    UserDTO add(UserDTO user);
    void deleteById(Integer id);
    void update(Integer id, UserDTO user);
}
