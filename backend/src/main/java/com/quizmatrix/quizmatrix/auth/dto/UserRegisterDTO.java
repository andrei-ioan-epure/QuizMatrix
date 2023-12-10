package com.quizmatrix.quizmatrix.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserRegisterDTO {
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String email;
}
