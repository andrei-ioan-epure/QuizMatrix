package com.quizmatrix.quizmatrix.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "answer")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_answer;

    @ManyToOne
    @JoinColumn(name = "id_question")
    private Question question;

    private String answer_text;
    Boolean isCorrect;
}
