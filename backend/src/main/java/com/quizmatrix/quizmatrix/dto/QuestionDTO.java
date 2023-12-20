package com.quizmatrix.quizmatrix.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class QuestionDTO {
    private Integer id_question;
    private Integer id_quiz;
    private String text;
    private Integer points;
    private List<AnswerDTO> answers;
}
