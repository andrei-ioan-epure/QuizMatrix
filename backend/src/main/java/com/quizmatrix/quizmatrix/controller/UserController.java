package com.quizmatrix.quizmatrix.controller;

import com.quizmatrix.quizmatrix.dto.UserDTO;
import com.quizmatrix.quizmatrix.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
   UserController(UserService userService)
    {
        this.userService=userService;
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(this.userService.getAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id){
        return new ResponseEntity<>(this.userService.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody UserDTO userDTO){
        UserDTO newUserDTO=this.userService.add(userDTO);
        return new ResponseEntity<>(newUserDTO, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateById(@PathVariable Integer id, @RequestBody UserDTO userDTO){
        this.userService.update(id,userDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Integer id){
        this.userService.deleteById(id);
        return new ResponseEntity<>( HttpStatus.NO_CONTENT);
    }
}
