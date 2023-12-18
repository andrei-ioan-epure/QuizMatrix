package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.QuestionDTO;
import com.quizmatrix.quizmatrix.model.Question;
import com.quizmatrix.quizmatrix.model.Quiz;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-16T20:29:56+0200",
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

        Integer id_quiz = questionQuizId_quiz( question );
        if ( id_quiz != null ) {
            questionDTO.setId_quiz( String.valueOf( id_quiz ) );
        }
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

        if ( questionDTO.getId_quiz() != null ) {
            quiz.setId_quiz( Integer.parseInt( questionDTO.getId_quiz() ) );
        }

        return quiz;
    }
}
