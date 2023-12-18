package com.quizmatrix.quizmatrix.service.impl;

import com.quizmatrix.quizmatrix.dto.QuizUserDTO;
import com.quizmatrix.quizmatrix.model.QuizUser;
import com.quizmatrix.quizmatrix.repository.interfaces.QuizUserRepository;
import com.quizmatrix.quizmatrix.service.interfaces.QuizUserService;
import com.quizmatrix.quizmatrix.service.mapper.QuizUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
        return quizUserMapper
                .mapEntityToDto(
                        quizUserRepository.add(quizUserMapper.mapDtoToEntity(quizUserDTO))
                );
    }

    @Override
    public void deleteByQuizIdQuiz(Integer id_quiz) {
        quizUserRepository.deleteByQuizIdQuiz(id_quiz);
    }

    @Override
    public List<QuizUserDTO> findByIdUser(Integer id_user) {
        List<QuizUser> quizUsers = quizUserRepository.findByIdUser(id_user);
        return quizUsers.stream()
                .map(quizUserMapper::mapEntityToDto)
                .collect(Collectors.toList());
    }
//    public List<Quiz> getFavoriteQuizzesByUser(Integer userId) {
//        List<QuizUser> quizUserList = quizUserRepository.findByIdUserId(userId);
//        return quizUserList.stream().map(QuizUser::getQuiz).collect(Collectors.toList());
//    }


//    @Override
//    public void deleteById(Integer id) {
//        quizUserRepository.deleteById(id);
//    }
//
}


