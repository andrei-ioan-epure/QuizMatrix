package com.quizmatrix.quizmatrix.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SimpleUserDTO {
    private int id_user;
    private String firstname;
    private String lastname;
}
