package com.quizmatrix.quizmatrix.auth.dto;

import com.quizmatrix.quizmatrix.auth.util.Constant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDTO {
    private int id_user;
    private String firstname;
    private String lastname;
    private String email;
    private String username;
    private Constant.UserRole role;
}
