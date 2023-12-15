package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.QuestionDTO;
import com.quizmatrix.quizmatrix.model.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-15T01:17:23+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public QuestionDTO mapEntityToDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDTO questionDTO = new QuestionDTO();

        questionDTO.setId_question( question.getId_question() );
        questionDTO.setId_quiz( question.getId_quiz() );
        questionDTO.setText( question.getText() );
        questionDTO.setPoints( question.getPoints() );

        return questionDTO;
    }

    @Override
    public Question mapDtoToEntity(QuestionDTO questionDTO) {
        if ( questionDTO == null ) {
            return null;
        }

        Question question = new Question();

        question.setId_question( questionDTO.getId_question() );
        question.setId_quiz( questionDTO.getId_quiz() );
        question.setText( questionDTO.getText() );
        question.setPoints( questionDTO.getPoints() );

        return question;
    }
}
