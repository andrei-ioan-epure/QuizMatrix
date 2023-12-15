package com.quizmatrix.quizmatrix.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class AnswerDTO {
    private Integer id_answer;
    private  Integer id_question;
    private String answer_text;
    Boolean isCorrect;
}
