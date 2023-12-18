package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;
import com.quizmatrix.quizmatrix.model.LeaderBoard;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-18T16:27:09+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class LeaderBoardMapperImpl implements LeaderBoardMapper {

    @Override
    public LeaderBoardDTO mapEntityToDto(LeaderBoard leaderBoard) {
        if ( leaderBoard == null ) {
            return null;
        }

        LeaderBoardDTO leaderBoardDTO = new LeaderBoardDTO();

        leaderBoardDTO.setId_leaderboard( leaderBoard.getId_leaderboard() );
        leaderBoardDTO.setId_user( leaderBoard.getId_user() );
        leaderBoardDTO.setId_domain( leaderBoard.getId_domain() );
        leaderBoardDTO.setScore( leaderBoard.getScore() );
        leaderBoardDTO.setTime( leaderBoard.getTime() );

        return leaderBoardDTO;
    }

    @Override
    public LeaderBoard mapDtoToEntity(LeaderBoardDTO leaderBoardDTO) {
        if ( leaderBoardDTO == null ) {
            return null;
        }

        LeaderBoard leaderBoard = new LeaderBoard();

        leaderBoard.setId_leaderboard( leaderBoardDTO.getId_leaderboard() );
        leaderBoard.setId_user( leaderBoardDTO.getId_user() );
        leaderBoard.setId_domain( leaderBoardDTO.getId_domain() );
        leaderBoard.setScore( leaderBoardDTO.getScore() );
        leaderBoard.setTime( leaderBoardDTO.getTime() );

        return leaderBoard;
    }
}
