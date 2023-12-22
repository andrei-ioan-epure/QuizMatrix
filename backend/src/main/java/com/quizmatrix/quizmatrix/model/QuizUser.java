package com.quizmatrix.quizmatrix.model;


import com.quizmatrix.quizmatrix.auth.model.User;
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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JoinColumn(name = "id_user")
    private Integer id_user;

    @JoinColumn(name = "id_quiz")
    private Integer id_quiz;
    private Boolean isFavorite;

}

