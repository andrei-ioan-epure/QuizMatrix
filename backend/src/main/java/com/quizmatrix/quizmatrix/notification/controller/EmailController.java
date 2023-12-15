package com.quizmatrix.quizmatrix.notification.controller;

import com.quizmatrix.quizmatrix.notification.entity.EmailDTO;
import com.quizmatrix.quizmatrix.notification.entity.ErrorDTO;
import com.quizmatrix.quizmatrix.notification.exception.MessageSentException;
import com.quizmatrix.quizmatrix.notification.service.IEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private IEmailService emailService;


    @PostMapping("/sendRegisterMail")
    public ResponseEntity<?> sendRegisterMail(@RequestBody EmailDTO details) {

        try {
            emailService.sendRegistrationMail(details);
            return  ResponseEntity.status(HttpStatus.OK).body("Mail-ul a fost trimis cu succes");
        } catch (MessageSentException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorDTO(e.getMessage()));

        }


    }

    @PostMapping("/sendMailWithAttachment")
    public ResponseEntity<?> sendMailWithAttachment(@RequestBody EmailDTO details) {
        try {
            emailService.sendMailWithAttachment(details);
            return  ResponseEntity.status(HttpStatus.OK).body("Mail-ul a fost trimis cu succes");
        } catch (MessageSentException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorDTO(e.getMessage()));

        }
    }
    @PostMapping("/sendResetPassMail")
    public ResponseEntity<?> sendResetPassMail(@RequestBody EmailDTO details) {
        try {
            emailService.sendPasswordResetMail(details);
            return  ResponseEntity.status(HttpStatus.OK).body("Mail-ul a fost trimis cu succes");
        } catch (MessageSentException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorDTO(e.getMessage()));

        }
    }
}
