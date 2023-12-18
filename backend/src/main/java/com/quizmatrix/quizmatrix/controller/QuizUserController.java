package com.quizmatrix.quizmatrix.controller;

import com.quizmatrix.quizmatrix.dto.QuizUserDTO;
import com.quizmatrix.quizmatrix.dto.UserDTO;
import com.quizmatrix.quizmatrix.model.QuizUserKey;
import com.quizmatrix.quizmatrix.service.interfaces.QuizUserService;
import com.quizmatrix.quizmatrix.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<?> addQuizUser(@RequestBody QuizUserDTO quizUserDTO){
        QuizUserDTO newQuizUserDTO=this.quizUserService.add(quizUserDTO);
        return new ResponseEntity<>(newQuizUserDTO, HttpStatus.CREATED);
    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteQuizUser(@RequestParam Integer id_user,
                                            @RequestParam Integer id_quiz) {
        quizUserService.deleteById(new QuizUserKey(id_user, id_quiz));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
