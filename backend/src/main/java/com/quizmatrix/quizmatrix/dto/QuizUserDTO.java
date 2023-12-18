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
    private User user;
    private Quiz quiz;

}
