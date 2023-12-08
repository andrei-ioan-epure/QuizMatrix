package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.UserDTO;
import com.quizmatrix.quizmatrix.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO mapEntityToDto(User user);
    User mapDtoToEntity(UserDTO userDTO);
}
