package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;
import com.quizmatrix.quizmatrix.model.LeaderBoard;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LeaderBoardMapper {
    LeaderBoardDTO mapEntityToDto(LeaderBoard leaderBoard);
    LeaderBoard mapDtoToEntity(LeaderBoardDTO leaderBoardDTO);
}
