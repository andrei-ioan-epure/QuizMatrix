package com.quizmatrix.quizmatrix.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class DomainDTO {
    private Integer id_domain;
    private String domain_name;
    private String icon_path;

}