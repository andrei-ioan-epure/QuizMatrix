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
@NoArgsConstructor
public class Domain {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id_domain;
    private String domain_name;
    private String icon_path;


    public Domain(Integer id_domain, String domain_name, String imagePath) {
        this.id_domain = id_domain;
        this.domain_name = domain_name;
        this.icon_path = "file:///" + imagePath; // Cale absolută către imagine
    }
}
