package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.DomainDTO;
import com.quizmatrix.quizmatrix.model.Domain;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DomainMapper {
    DomainDTO mapEntityToDto(Domain domain);
    Domain mapDtoToEntity(DomainDTO domainDTO);
}
