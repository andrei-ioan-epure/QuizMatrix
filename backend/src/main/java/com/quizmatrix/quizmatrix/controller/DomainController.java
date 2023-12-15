package com.quizmatrix.quizmatrix.controller;

import com.quizmatrix.quizmatrix.dto.DomainDTO;
import com.quizmatrix.quizmatrix.service.interfaces.DomainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/domain")
public class DomainController {
    private final DomainService domainService;

    @Autowired
    DomainController(DomainService domainService)
    {
        this.domainService=domainService;
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        List<DomainDTO> domains = this.domainService.getAll();
        if(domains.isEmpty()) {
            return new ResponseEntity<>("Nu au fost gasite domenii.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(domains, HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id){
        DomainDTO domainDTO = this.domainService.findById(id);
        if(domainDTO == null) {
            return new ResponseEntity<>("Domeniul nu a fost gasit.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(domainDTO, HttpStatus.OK);
    }
    @GetMapping("/name/{domain_name}")
    public ResponseEntity<?> findByName(@PathVariable String domain_name){
        DomainDTO domainDTO = this.domainService.findByDomain_name(domain_name);
        if(domainDTO == null) {
            return new ResponseEntity<>("Domeniul nu a fost gasit.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(domainDTO, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> addDomain(@RequestBody DomainDTO domainDTO){
        DomainDTO newDomainDTO=this.domainService.add(domainDTO);
        return new ResponseEntity<>(newDomainDTO, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateById(@PathVariable Integer id, @RequestBody DomainDTO domainDTO){
        this.domainService.update(id,domainDTO);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Integer id){
        this.domainService.deleteById(id);
        return new ResponseEntity<>( HttpStatus.NO_CONTENT);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleException(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
