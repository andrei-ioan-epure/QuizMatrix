package com.quizmatrix.quizmatrix.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class QuestionDTO {
    private Integer id_question;
    private String id_quiz;
    private String text;
    private Integer points;
}
