package com.quizmatrix.quizmatrix.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {
    private Integer id_user;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Integer role;
}

