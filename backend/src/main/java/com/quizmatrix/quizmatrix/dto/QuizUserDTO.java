package com.quizmatrix.quizmatrix.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class QuizUserDTO {
    private Integer id_user;
    private Integer id_quiz;
}
