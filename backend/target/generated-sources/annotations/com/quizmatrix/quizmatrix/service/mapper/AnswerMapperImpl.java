package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.AnswerDTO;
import com.quizmatrix.quizmatrix.model.Answer;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-15T14:22:14+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 18.0.2 (Amazon.com Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public AnswerDTO mapEntityToDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerDTO answerDTO = new AnswerDTO();

        answerDTO.setId_answer( answer.getId_answer() );
        answerDTO.setId_question( answer.getId_question() );
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

        answer.setId_answer( answerDTO.getId_answer() );
        answer.setId_question( answerDTO.getId_question() );
        answer.setAnswer_text( answerDTO.getAnswer_text() );
        answer.setIsCorrect( answerDTO.getIsCorrect() );

        return answer;
    }
}
