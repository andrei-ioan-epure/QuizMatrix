package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.QuestionDTO;
import com.quizmatrix.quizmatrix.model.Question;
import com.quizmatrix.quizmatrix.model.Quiz;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-20T19:22:36+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.1 (Oracle Corporation)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public QuestionDTO mapEntityToDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDTO questionDTO = new QuestionDTO();

        questionDTO.setId_quiz( questionQuizId_quiz( question ) );
        questionDTO.setId_question( question.getId_question() );
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

        question.setQuiz( questionDTOToQuiz( questionDTO ) );
        question.setId_question( questionDTO.getId_question() );
        question.setText( questionDTO.getText() );
        question.setPoints( questionDTO.getPoints() );

        return question;
    }

    private Integer questionQuizId_quiz(Question question) {
        if ( question == null ) {
            return null;
        }
        Quiz quiz = question.getQuiz();
        if ( quiz == null ) {
            return null;
        }
        Integer id_quiz = quiz.getId_quiz();
        if ( id_quiz == null ) {
            return null;
        }
        return id_quiz;
    }

    protected Quiz questionDTOToQuiz(QuestionDTO questionDTO) {
        if ( questionDTO == null ) {
            return null;
        }

        Quiz quiz = new Quiz();

        quiz.setId_quiz( questionDTO.getId_quiz() );

        return quiz;
    }
}
