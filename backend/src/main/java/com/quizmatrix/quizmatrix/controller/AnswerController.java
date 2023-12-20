package com.quizmatrix.quizmatrix.controller;

import com.quizmatrix.quizmatrix.dto.AnswerDTO;
import com.quizmatrix.quizmatrix.service.interfaces.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/quiz/answer")
public class AnswerController {

    private final AnswerService answerService;

    @Autowired
    AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GetMapping
    ResponseEntity<?> getAllAnswers() {
        return new ResponseEntity<>(this.answerService.getAll(), HttpStatus.OK);

    }

    @GetMapping("/{id}")
    ResponseEntity<?> getAnswerById(@PathVariable Integer id) {
        AnswerDTO answerDTO = this.answerService.findById(id);
        if (answerDTO == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(answerDTO, HttpStatus.OK);

    }

    @GetMapping("/question")
    ResponseEntity<List<AnswerDTO>> getAnswerByQuestionId(@RequestParam Integer id) {
        List<AnswerDTO> answerDTO = this.answerService.findByQuestionId(id);
        return new ResponseEntity<>(answerDTO, HttpStatus.OK);

    }

    @PostMapping
    ResponseEntity<?> createAnswer(@RequestBody AnswerDTO answerDTO) {
        return new ResponseEntity<>(this.answerService.add(answerDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteAnserById(@PathVariable Integer id) {
        this.answerService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PutMapping("/{id}")
    ResponseEntity<?> updateAnswerById(@PathVariable Integer id, @RequestBody AnswerDTO answerDTO) {
        if (this.answerService.findById(id) != null) {
            this.answerService.update(id, answerDTO);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(this.answerService.add(answerDTO), HttpStatus.CREATED);

        }

    }
}
