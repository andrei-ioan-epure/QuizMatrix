package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.QuizUserDTO;
import com.quizmatrix.quizmatrix.model.QuizUser;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuizUserMapper {
    QuizUserDTO mapEntityToDto(QuizUser quizUser);
    QuizUser mapDtoToEntity(QuizUserDTO quizUserDTO);
}

