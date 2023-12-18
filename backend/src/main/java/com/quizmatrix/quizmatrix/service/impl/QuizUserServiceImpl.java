package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.QuizUserDTO;
import com.quizmatrix.quizmatrix.dto.UserDTO;
import com.quizmatrix.quizmatrix.model.QuizUser;
import com.quizmatrix.quizmatrix.model.QuizUserKey;
import com.quizmatrix.quizmatrix.repository.interfaces.QuizUserRepository;
import com.quizmatrix.quizmatrix.service.interfaces.QuizUserService;
import com.quizmatrix.quizmatrix.service.mapper.QuizUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizUserServiceImpl implements QuizUserService {

    private final QuizUserRepository quizUserRepository;
    private final QuizUserMapper quizUserMapper;

    @Autowired
    QuizUserServiceImpl(QuizUserRepository quizUserRepository,QuizUserMapper quizUserMapper)
    {
        this.quizUserRepository = quizUserRepository;
        this.quizUserMapper = quizUserMapper;
    }
    @Override
    public List<QuizUserDTO> getAll() {
        return quizUserRepository.getAll()
                .stream()
                .map(quizUserMapper::mapEntityToDto)
                .toList();
    }

    @Override
    public QuizUserDTO findById(Integer id_user,Integer id_quiz) {
        Optional<QuizUser> user= quizUserRepository.findById(id_user,id_quiz);
        return user.map(quizUserMapper::mapEntityToDto).orElse(null);

    }

//    @Override
//    public QuizUserDTO add(QuizUserDTO quizUserDTO) {
//        QuizUserKey quizUserKey = new QuizUserKey(quizUserDTO.getId_user(), quizUserDTO.getId_quiz());
//        QuizUser quizUser = new QuizUser(quizUserKey);
//        QuizUser savedQuizUser = quizUserRepository.add(quizUser);
//        return quizUserMapper.mapEntityToDto(savedQuizUser);
//    }
    @Override
    public QuizUserDTO add(QuizUserDTO quizUserDTO) {
        System.out.println(quizUserDTO);
        QuizUserKey quizUserKey = new QuizUserKey(quizUserDTO.getId_user(), quizUserDTO.getId_quiz());
        QuizUser quizUser = new QuizUser(quizUserKey);
        System.out.println(quizUser);
        System.out.println(quizUserMapper
                .mapEntityToDto(
                        quizUserRepository.add(quizUser)
                ));
        return quizUserMapper
                .mapEntityToDto(
                        quizUserRepository.add(quizUser)
                );
    }

    @Override
    public void deleteById(QuizUserKey key) {
        quizUserRepository.deleteById(key);
    }


//    @Override
//    public void deleteById(Integer id) {
//        quizUserRepository.deleteById(id);
//    }
//
}


