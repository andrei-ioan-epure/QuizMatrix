package com.quizmatrix.quizmatrix.service.interfaces;

import com.quizmatrix.quizmatrix.dto.DomainDTO;

import java.util.List;

public interface DomainService {
    List<DomainDTO> getAll();
    DomainDTO findById(Integer id);
    DomainDTO findByDomain_name(String domain_name);
    DomainDTO add(DomainDTO domain);
    void deleteById(Integer id);
    void update(Integer id, DomainDTO domain);
}