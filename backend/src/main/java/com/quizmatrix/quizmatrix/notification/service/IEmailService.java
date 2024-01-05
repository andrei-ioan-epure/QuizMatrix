package com.quizmatrix.quizmatrix.notification.service;

import com.quizmatrix.quizmatrix.notification.entity.EmailDTO;
import com.quizmatrix.quizmatrix.notification.exception.MessageSentException;
import org.springframework.http.ResponseEntity;

public interface IEmailService {
    void sendRegistrationMail(EmailDTO details) throws MessageSentException;


    ResponseEntity<String> sendMailWithAttachment(EmailDTO details) throws  MessageSentException;

    void sendPasswordResetMail(EmailDTO details, String token) throws MessageSentException;
}
