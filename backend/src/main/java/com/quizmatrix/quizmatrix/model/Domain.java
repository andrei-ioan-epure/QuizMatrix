package com.quizmatrix.quizmatrix.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "domain")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Domain {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id_domain;
    private String domain_name;
}
