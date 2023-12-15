package com.quizmatrix.quizmatrix.notification.service;
import com.quizmatrix.quizmatrix.notification.entity.EmailDTO;
import com.quizmatrix.quizmatrix.notification.exception.MessageSentException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.beans.factory.annotation.*;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class EmailServiceImpl implements  IEmailService{
    @Autowired
    private JavaMailSender javaMailSender;
    @Value("quizmatrixcontrol@gmail.com")
    private String sender;

    @Override
    public void sendRegistrationMail(EmailDTO details) throws MessageSentException {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(sender);
            mailMessage.setTo(details.getRecipient());
            mailMessage.setText("Bun venit! Va multumim pentru inregistrare.");
            mailMessage.setSubject("Inregistrare reusita");
            javaMailSender.send(mailMessage);
        } catch (Exception e) {
            System.err.println("Eroare  " + e.getMessage());
            throw new MessageSentException("Eroare la trimiterea email-ului.");
        }
    }

    @Override
    public void sendMailWithAttachment(EmailDTO details) throws MessageSentException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper;

        try {
            mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setFrom(sender);
            mimeMessageHelper.setTo(details.getRecipient());
            mimeMessageHelper.setText(details.getMsgBody());
            mimeMessageHelper.setSubject(details.getSubject());

            FileSystemResource file = new FileSystemResource(new File(details.getAttachment()));

            mimeMessageHelper.addAttachment(file.getFilename(), file);

            javaMailSender.send(mimeMessage);

        } catch (Exception e) {
            System.err.println("Eroare  " + e.getMessage());
            throw new MessageSentException("Eroare la trimiterea email-ului.");
        }
    }
    @Override
    public void sendPasswordResetMail(EmailDTO details) throws MessageSentException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper;

        try {
            mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setFrom(sender);
            mimeMessageHelper.setTo(details.getRecipient());


            String resetLink = "http://localhost:4200";
            String messageText = "Click <a href='" + resetLink + "'>aici</a> pentru a reseta parola.";


            mimeMessageHelper.setText(messageText, true);
            mimeMessageHelper.setSubject("Resetare parola");

            javaMailSender.send(mimeMessage);

        } catch (Exception e) {
            System.err.println("Eroare  " + e.getMessage());
            throw new MessageSentException("Eroare la trimiterea email-ului pentru resetarea parolei.");
        }
    }



}
