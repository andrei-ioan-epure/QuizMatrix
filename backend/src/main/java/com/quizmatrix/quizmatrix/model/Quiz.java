package com.quizmatrix.quizmatrix.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity(name = "Quiz")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Quiz {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id_quiz;
    private Integer id_domain;
    private String title;
    private String description;
    private java.sql.Date creation_date;
    private Integer time;
}