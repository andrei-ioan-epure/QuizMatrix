package com.quizmatrix.quizmatrix.controller;

import com.quizmatrix.quizmatrix.dto.CreateQuizDTO;
import com.quizmatrix.quizmatrix.dto.QuizDTO;
import com.quizmatrix.quizmatrix.service.interfaces.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping
    public ResponseEntity<List<QuizDTO>> getAll() {
        List<QuizDTO> quizDTOList = quizService.getAll();
        return new ResponseEntity<>(quizDTOList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuizDTO> findById(@PathVariable Integer id) {
        QuizDTO quizDTO = quizService.findById(id);
        return quizDTO != null ? new ResponseEntity<>(quizDTO, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<QuizDTO> addQuiz(@RequestBody CreateQuizDTO quizDTO) {
        QuizDTO newQuizDTO = quizService.add(quizDTO);
        return new ResponseEntity<>(newQuizDTO, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateById(@PathVariable Integer id, @RequestBody CreateQuizDTO quizDTO) {
        quizService.update(id, quizDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        quizService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
