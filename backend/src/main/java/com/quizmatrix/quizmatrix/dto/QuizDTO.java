package com.quizmatrix.quizmatrix.dto;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class QuizDTO {
    private Integer id_quiz;
    private List<QuestionDTO> questions;
    private Integer id_domain;
    private String title;
    private String description;
    private java.sql.Date creation_date;
    private Integer time;
}