package com.quizmatrix.quizmatrix.model;

import jakarta.persistence.*;
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
    @ManyToOne
    @JoinColumn(name = "id_quiz")
    private Quiz quiz;
    private String text;
    private Integer points;
}

