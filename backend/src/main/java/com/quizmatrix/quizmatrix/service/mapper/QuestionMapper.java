package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.QuestionDTO;
import com.quizmatrix.quizmatrix.model.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    QuestionDTO mapEntityToDto(Question question);
    Question mapDtoToEntity(QuestionDTO questionDTO);
}

