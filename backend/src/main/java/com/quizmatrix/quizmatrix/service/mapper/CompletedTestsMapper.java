package com.quizmatrix.quizmatrix.service.mapper;


import com.quizmatrix.quizmatrix.dto.CompletedTestsDTO;
import com.quizmatrix.quizmatrix.model.CompletedTests;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompletedTestsMapper {
    CompletedTestsDTO mapEntityToDto(CompletedTests completedTests);
    CompletedTests mapDtoToEntity(CompletedTestsDTO completedTestsDTO);
}
