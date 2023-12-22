package com.quizmatrix.quizmatrix.dto;

import com.quizmatrix.quizmatrix.auth.model.User;
import com.quizmatrix.quizmatrix.model.Quiz;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class QuizUserDTO {
    private Integer id;
    private Integer id_user;
    private Integer id_quiz;
    private Boolean isFavorite;

}
