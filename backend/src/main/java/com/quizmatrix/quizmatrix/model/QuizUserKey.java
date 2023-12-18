package com.quizmatrix.quizmatrix.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class QuizUserKey implements Serializable {
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private Integer id_user;

    @JoinColumn(name = "id_quiz", referencedColumnName = "id_quiz")
    private Integer id_quiz;
}
