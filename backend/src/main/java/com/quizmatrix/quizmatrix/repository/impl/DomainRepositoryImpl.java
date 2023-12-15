package com.quizmatrix.quizmatrix.repository.impl;

import com.quizmatrix.quizmatrix.model.Domain;
import com.quizmatrix.quizmatrix.repository.interfaces.DomainJPARepository;
import com.quizmatrix.quizmatrix.repository.interfaces.DomainRepository;
import org.mapstruct.ap.shaded.freemarker.ext.beans._BeansAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class DomainRepositoryImpl  implements DomainRepository {
    private final DomainJPARepository domainJPARepository;

    @Autowired
    DomainRepositoryImpl(DomainJPARepository domainJPARepository)
    {
        this.domainJPARepository = domainJPARepository;
    }

    @Override
    public List<Domain> getAll() {
        return domainJPARepository.findAll();
    }

    @Override
    public Optional<Domain> findById(Integer id) {
        return domainJPARepository.findById(id);
    }

    @Override
    public Optional<Domain> findByDomain_name(String domain_name)
    {
        return  domainJPARepository.findByDomain_name(domain_name);
    }
    @Override
    public Domain add(Domain domain) {
        return domainJPARepository.save(domain);
    }

    @Override
    public void deleteById(Integer id) {
        domainJPARepository.deleteById(id);
    }

    @Override
    public void update(Integer id, Domain domain) {
        Optional<Domain> existingDomain = domainJPARepository.findById(id);
        if (existingDomain.isPresent()) {
            Domain updatedDomain=existingDomain.get();
            updatedDomain.setDomain_name(domain.getDomain_name());

            domainJPARepository.save(updatedDomain);
        } else {
            domainJPARepository.save(domain);
        }
    }
}
