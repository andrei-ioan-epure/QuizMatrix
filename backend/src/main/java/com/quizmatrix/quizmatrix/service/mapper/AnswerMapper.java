package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.AnswerDTO;
import com.quizmatrix.quizmatrix.model.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface AnswerMapper {
    @Mapping(source = "question.id_question", target = "id_question")
    AnswerDTO mapEntityToDto(Answer answer);

    @Mapping(source = "id_question", target = "question.id_question")
    Answer mapDtoToEntity(AnswerDTO answerDTO);
}

