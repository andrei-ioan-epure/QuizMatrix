package com.quizmatrix.quizmatrix.dto;

import com.quizmatrix.quizmatrix.auth.model.User;
import com.quizmatrix.quizmatrix.model.Quiz;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CompletedTestsDTO {
    private Integer id;
    private User user;
    private Quiz quiz;
    private int score;
    private Date date_completed;

}

