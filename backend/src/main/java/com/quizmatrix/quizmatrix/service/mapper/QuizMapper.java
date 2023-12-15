package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.QuizDTO;
import com.quizmatrix.quizmatrix.model.Quiz;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {QuestionMapper.class})
public interface QuizMapper {

    @Mapping(source = "questions", target = "questions")
    QuizDTO mapEntityToDto(Quiz quiz);

    @Mapping(source = "questions", target = "questions")
    Quiz mapDtoToEntity(QuizDTO quizDTO);
}
