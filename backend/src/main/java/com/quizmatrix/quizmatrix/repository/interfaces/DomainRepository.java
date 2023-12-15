package com.quizmatrix.quizmatrix.repository.interfaces;

import com.quizmatrix.quizmatrix.model.Domain;

import java.util.List;
import java.util.Optional;

public interface DomainRepository {
    List<Domain> getAll();
    Optional<Domain> findById(Integer id);
    Optional<Domain> findByDomain_name(String domain_name);
    Domain add(Domain domain);
    void deleteById(Integer id);
    void update(Integer id, Domain domain);
}
