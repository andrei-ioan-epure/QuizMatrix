package com.quizmatrix.quizmatrix.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "Question")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id_question;
    private String id_quiz;
    private String text;
    private Integer points;
}

