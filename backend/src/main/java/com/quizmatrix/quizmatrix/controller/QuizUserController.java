package com.quizmatrix.quizmatrix.controller;

import com.quizmatrix.quizmatrix.dto.QuizUserDTO;
import com.quizmatrix.quizmatrix.service.interfaces.QuizUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz_user")
public class  QuizUserController {

    private final QuizUserService quizUserService;

    @Autowired
    QuizUserController(QuizUserService quizUserService)
    {
        this.quizUserService=quizUserService;
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(this.quizUserService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/getById")
    public ResponseEntity<?> getQuizUser(@RequestParam Integer id_user,
                                         @RequestParam Integer id_quiz) {
        return new ResponseEntity<>(this.quizUserService.findById(id_user,id_quiz), HttpStatus.OK);
    }
    @GetMapping("/getByIdUser")
    public ResponseEntity<?> getQuizUser(@RequestParam Integer id_user) {
        List<QuizUserDTO> quizUserDTOs = this.quizUserService.findByIdUser(id_user);
        return new ResponseEntity<>(quizUserDTOs, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addQuizUser(@RequestBody QuizUserDTO quizUserDTO){
        QuizUserDTO newQuizUserDTO=this.quizUserService.add(quizUserDTO);
        return new ResponseEntity<>(newQuizUserDTO, HttpStatus.CREATED);
    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteFavoriteByQuizId(@RequestParam Integer id_quiz) {
        quizUserService.deleteByQuizIdQuiz(id_quiz);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
