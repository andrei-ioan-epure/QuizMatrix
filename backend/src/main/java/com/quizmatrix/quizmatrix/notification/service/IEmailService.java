package com.quizmatrix.quizmatrix.notification.service;

import com.quizmatrix.quizmatrix.notification.entity.EmailDTO;
import com.quizmatrix.quizmatrix.notification.exception.MessageSentException;

public interface IEmailService {
    void sendRegistrationMail(EmailDTO details) throws MessageSentException;

    void sendMailWithAttachment(EmailDTO details) throws MessageSentException;

    void sendPasswordResetMail(EmailDTO details) throws MessageSentException;
}
