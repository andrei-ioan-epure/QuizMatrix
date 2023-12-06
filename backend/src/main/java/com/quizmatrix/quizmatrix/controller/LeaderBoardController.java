package com.quizmatrix.quizmatrix.controller;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;
import com.quizmatrix.quizmatrix.service.interfaces.LeaderBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quiz/leaderboard")
public class LeaderBoardController {

    private final LeaderBoardService leaderBoardService;

    @Autowired
    LeaderBoardController(LeaderBoardService leaderBoardService)
    {
        this.leaderBoardService=leaderBoardService;
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(this.leaderBoardService.getAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id){
        return new ResponseEntity<>(this.leaderBoardService.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> findById(@RequestBody LeaderBoardDTO leaderBoardDTO){
        LeaderBoardDTO newLeaderBoardDTO=this.leaderBoardService.add(leaderBoardDTO);
        return new ResponseEntity<>(newLeaderBoardDTO, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateById(@PathVariable Integer id, @RequestBody LeaderBoardDTO leaderBoardDTO){
        this.leaderBoardService.update(id,leaderBoardDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(Integer id){
        this.leaderBoardService.deleteById(id);
        return new ResponseEntity<>( HttpStatus.NO_CONTENT);
    }
}
