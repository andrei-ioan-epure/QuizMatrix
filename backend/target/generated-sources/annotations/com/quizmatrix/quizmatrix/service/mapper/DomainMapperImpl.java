package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.DomainDTO;
import com.quizmatrix.quizmatrix.model.Domain;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-16T20:29:56+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class DomainMapperImpl implements DomainMapper {

    @Override
    public DomainDTO mapEntityToDto(Domain domain) {
        if ( domain == null ) {
            return null;
        }

        DomainDTO domainDTO = new DomainDTO();

        domainDTO.setId_domain( domain.getId_domain() );
        domainDTO.setDomain_name( domain.getDomain_name() );

        return domainDTO;
    }

    @Override
    public Domain mapDtoToEntity(DomainDTO domainDTO) {
        if ( domainDTO == null ) {
            return null;
        }

        Domain domain = new Domain();

        domain.setId_domain( domainDTO.getId_domain() );
        domain.setDomain_name( domainDTO.getDomain_name() );

        return domain;
    }
}
