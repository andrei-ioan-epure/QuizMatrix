package com.quizmatrix.quizmatrix.controller;

import com.quizmatrix.quizmatrix.dto.LeaderBoardDTO;
import com.quizmatrix.quizmatrix.model.LeaderBoard;
import com.quizmatrix.quizmatrix.service.interfaces.LeaderBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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


    @GetMapping("/search")
    public ResponseEntity<?> findByUserIdDomainAndQuiz(@RequestParam Integer id_user,@RequestParam  Integer id_domain, @RequestParam Integer id_quiz){
        LeaderBoardDTO leaderBoardDTO=this.leaderBoardService.findByUserIdDomainAndQuiz(id_user,id_domain,id_quiz);

        return (leaderBoardDTO!=null)? new ResponseEntity<>(leaderBoardDTO, HttpStatus.OK)
                :new ResponseEntity<>( HttpStatus.NOT_FOUND);
    }
    @GetMapping("/domainQuiz")
    public ResponseEntity<?> findByDomainIdAndQuiz(@RequestParam  Integer id_domain, @RequestParam Integer id_quiz){
        List<LeaderBoardDTO> leaderBoardDTO=this.leaderBoardService.findByDomainIdAndQuiz(id_domain,id_quiz);

        return (leaderBoardDTO!=null)? new ResponseEntity<>(leaderBoardDTO, HttpStatus.OK)
                :new ResponseEntity<>( HttpStatus.NOT_FOUND);
    }
    @GetMapping("/domain")
    public ResponseEntity<?> findByDomainId(@RequestParam  Integer id_domain){
        List<LeaderBoardDTO> leaderBoardDTO=this.leaderBoardService.findByDomainId(id_domain);

        return (leaderBoardDTO!=null)? new ResponseEntity<>(leaderBoardDTO, HttpStatus.OK)
                :new ResponseEntity<>( HttpStatus.NOT_FOUND);
    }
    @PostMapping
    public ResponseEntity<?> addLeaderBoard(@RequestBody LeaderBoardDTO leaderBoardDTO){
        LeaderBoardDTO newLeaderBoardDTO=this.leaderBoardService.add(leaderBoardDTO);
        return new ResponseEntity<>(newLeaderBoardDTO, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateById(@PathVariable Integer id, @RequestBody LeaderBoardDTO leaderBoardDTO){
        if (this.leaderBoardService.findById(id) != null) {
            this.leaderBoardService.update(id, leaderBoardDTO);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(this.leaderBoardService.add(leaderBoardDTO), HttpStatus.CREATED);

        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Integer id){
        this.leaderBoardService.deleteById(id);
        return new ResponseEntity<>( HttpStatus.NO_CONTENT);
    }
}
