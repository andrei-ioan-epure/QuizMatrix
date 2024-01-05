package com.quizmatrix.quizmatrix.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "leaderboard_domain")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LeaderBoard {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id_leaderboard;
    private Integer id_user;
    private Integer id_domain;
    private Integer id_quiz;
    private Integer score;
    private Integer time;

}
