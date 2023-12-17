package com.quizmatrix.quizmatrix.service.mapper;

import com.quizmatrix.quizmatrix.dto.UserDTO;
import com.quizmatrix.quizmatrix.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-16T20:29:56+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDTO mapEntityToDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTO userDTO = new UserDTO();

        userDTO.setId_user( user.getId_user() );
        userDTO.setFirstname( user.getFirstname() );
        userDTO.setLastname( user.getLastname() );
        userDTO.setEmail( user.getEmail() );
        userDTO.setPassword( user.getPassword() );
        userDTO.setRole( user.getRole() );

        return userDTO;
    }

    @Override
    public User mapDtoToEntity(UserDTO userDTO) {
        if ( userDTO == null ) {
            return null;
        }

        User user = new User();

        user.setId_user( userDTO.getId_user() );
        user.setFirstname( userDTO.getFirstname() );
        user.setLastname( userDTO.getLastname() );
        user.setEmail( userDTO.getEmail() );
        user.setPassword( userDTO.getPassword() );
        user.setRole( userDTO.getRole() );

        return user;
    }
}
