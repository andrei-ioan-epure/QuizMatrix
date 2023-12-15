package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.QuestionDTO;
import com.quizmatrix.quizmatrix.model.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    @Mapping(source = "quiz.id_quiz", target = "id_quiz")
    QuestionDTO mapEntityToDto(Question question);
    @Mapping(source = "id_quiz", target = "quiz.id_quiz")
    Question mapDtoToEntity(QuestionDTO questionDTO);
}
