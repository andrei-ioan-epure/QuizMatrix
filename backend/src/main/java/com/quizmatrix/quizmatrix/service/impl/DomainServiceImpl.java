package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.DomainDTO;
import com.quizmatrix.quizmatrix.model.Domain;
import com.quizmatrix.quizmatrix.repository.interfaces.DomainRepository;

import com.quizmatrix.quizmatrix.service.interfaces.DomainService;
import com.quizmatrix.quizmatrix.service.mapper.DomainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DomainServiceImpl implements DomainService {
    private final DomainRepository domainRepository;
    private final DomainMapper domainMapper;

    @Autowired
    DomainServiceImpl(DomainRepository domainRepository,DomainMapper domainMapper)
    {
        this.domainRepository = domainRepository;
        this.domainMapper = domainMapper;
    }
    @Override
    public List<DomainDTO> getAll() {
        return domainRepository.getAll()
                .stream()
                .map(domainMapper::mapEntityToDto)
                .toList();
    }

    @Override
    public DomainDTO findById(Integer id) {
        Optional<Domain> domain= domainRepository.findById(id);
        return domain.map(domainMapper::mapEntityToDto).orElse(null);

    }
    @Override
    public DomainDTO findByDomain_name(String domain_name)
    {
        Optional<Domain> domain=domainRepository.findByDomain_name(domain_name);
        return domain.map(domainMapper::mapEntityToDto).orElse(null);
    }

    @Override
    public DomainDTO add(DomainDTO domain) {
        return domainMapper
                .mapEntityToDto(
                        domainRepository.add(domainMapper.mapDtoToEntity(domain))
                );
    }

    @Override
    public void deleteById(Integer id) {
        domainRepository.deleteById(id);
    }

    @Override
    public void update(Integer id, DomainDTO domain) {
        domainRepository.update(id, domainMapper.mapDtoToEntity(domain));
    }
}
