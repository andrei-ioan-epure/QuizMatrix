package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.AnswerDTO;
import com.quizmatrix.quizmatrix.model.Answer;
import com.quizmatrix.quizmatrix.model.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-18T16:58:05+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public AnswerDTO mapEntityToDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDTO answerDTO = new AnswerDTO();

        answerDTO.setId_question( answerQuestionId_question( answer ) );
        answerDTO.setId_answer( answer.getId_answer() );
        answerDTO.setAnswer_text( answer.getAnswer_text() );
        answerDTO.setIsCorrect( answer.getIsCorrect() );

        return answerDTO;
    }

    @Override
    public Answer mapDtoToEntity(AnswerDTO answerDTO) {
        if ( answerDTO == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setQuestion( answerDTOToQuestion( answerDTO ) );
        answer.setId_answer( answerDTO.getId_answer() );
        answer.setAnswer_text( answerDTO.getAnswer_text() );
        answer.setIsCorrect( answerDTO.getIsCorrect() );

        return answer;
    }

    private Integer answerQuestionId_question(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Question question = answer.getQuestion();
        if ( question == null ) {
            return null;
        }
        Integer id_question = question.getId_question();
        if ( id_question == null ) {
            return null;
        }
        return id_question;
    }

    protected Question answerDTOToQuestion(AnswerDTO answerDTO) {
        if ( answerDTO == null ) {
            return null;
        }

        Question question = new Question();

        question.setId_question( answerDTO.getId_question() );

        return question;
    }
}
