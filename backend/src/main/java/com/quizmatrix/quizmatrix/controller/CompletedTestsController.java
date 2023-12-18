package com.quizmatrix.quizmatrix.controller;


import com.quizmatrix.quizmatrix.dto.CompletedTestsDTO;
import com.quizmatrix.quizmatrix.dto.QuizUserDTO;
import com.quizmatrix.quizmatrix.service.interfaces.CompletedTestsService;
import com.quizmatrix.quizmatrix.service.interfaces.QuizUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/completed_tests")
public class  CompletedTestsController {

    private final CompletedTestsService completedTestsService;

    @Autowired
    CompletedTestsController(CompletedTestsService completedTestsService)
    {
        this.completedTestsService=completedTestsService;
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(this.completedTestsService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/getById")
    public ResponseEntity<?> getQuizUser(@RequestParam Integer id_user,
                                         @RequestParam Integer id_quiz) {
        return new ResponseEntity<>(this.completedTestsService.findById(id_user,id_quiz), HttpStatus.OK);
    }
    @GetMapping("/getByIdUser")
    public ResponseEntity<?> getCompletedTestByIdUser(@RequestParam Integer id_user) {
        List<CompletedTestsDTO> completedTestsDTO = this.completedTestsService.findByIdUser(id_user);
        return new ResponseEntity<>(completedTestsDTO, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addCompletedTest(@RequestBody CompletedTestsDTO completedTestsDTO){
        CompletedTestsDTO newCompletedTestsDTO=this.completedTestsService.add(completedTestsDTO);
        return new ResponseEntity<>(newCompletedTestsDTO, HttpStatus.CREATED);
    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteCompletedTestByQuizId(@RequestParam Integer id_quiz) {
        completedTestsService.deleteByQuizIdQuiz(id_quiz);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

