package com.quizmatrix.quizmatrix.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "QuizUser")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuizUser {
    @EmbeddedId
    private QuizUserKey quizUserKey;

}

