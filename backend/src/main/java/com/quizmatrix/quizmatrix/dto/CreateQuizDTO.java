package com.quizmatrix.quizmatrix.dto;

import lombok.*;

import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CreateQuizDTO {
    private Integer id_domain;
    private String title;
    private String description;
    private java.sql.Date creation_date;
    private Integer time;
}
