package com.quizmatrix.quizmatrix.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class LeaderBoardDTO {
    private Integer id_leaderboard;
    private Integer id_user;
    private Integer id_domain;
    private Integer id_quiz;
    private Integer score;
    private Integer time;
}
