package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Domain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface DomainJPARepository extends JpaRepository<Domain,Integer> {

    @Query("SELECT d FROM domain d WHERE d.domain_name = :domain_name")
    Optional<Domain>findByDomain_name(@Param("domain_name") String domain_name);
}
