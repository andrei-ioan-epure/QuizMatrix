package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.QuizUserDTO;
import com.quizmatrix.quizmatrix.model.QuizUser;
import com.quizmatrix.quizmatrix.model.QuizUserKey;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuizUserMapper {

    default QuizUserDTO mapEntityToDto(QuizUser quizUser) {
        if (quizUser == null || quizUser.getQuizUserKey() == null) {
            return null;
        }
        QuizUserDTO dto = new QuizUserDTO();
        dto.setId_user(quizUser.getQuizUserKey().getId_user());
        dto.setId_quiz(quizUser.getQuizUserKey().getId_quiz());
        return dto;
    }

    default QuizUser mapDtoToEntity(QuizUserDTO quizUserDTO) {
        if (quizUserDTO == null) {
            return null;
        }
        QuizUser quizUser = new QuizUser();
        quizUser.setQuizUserKey(new QuizUserKey(quizUserDTO.getId_user(), quizUserDTO.getId_quiz()));
        return quizUser;
    }
}
