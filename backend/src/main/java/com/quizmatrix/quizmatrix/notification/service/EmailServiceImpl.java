package com.quizmatrix.quizmatrix.notification.service;

import com.quizmatrix.quizmatrix.notification.entity.EmailDTO;
import com.quizmatrix.quizmatrix.notification.exception.MessageSentException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.core.io.ClassPathResource;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements IEmailService {
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
    public ResponseEntity<String> sendMailWithAttachment(EmailDTO details) throws MessageSentException {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setFrom(sender);
            mimeMessageHelper.setTo(details.getRecipient());

            String htmlBodyWithImage = "<html><body><h3>Bun venit! Vă mulțumim pentru înregistrare.</h3>"
                    + "<img src='cid:imageId'></body></html>";

            mimeMessageHelper.setText(htmlBodyWithImage, true);
            mimeMessageHelper.setSubject("Înregistrare reușită");


            String imagePath = "img.png";


            ClassPathResource imageResource = new ClassPathResource(imagePath);


            if (imageResource.exists()) {

                mimeMessageHelper.addInline("imageId", imageResource, "image/png");


                javaMailSender.send(mimeMessage);


                return new ResponseEntity<>("{\"success\": true, \"message\": \"E-mail trimis cu succes!\"}", HttpStatus.OK);
            } else {

                return new ResponseEntity<>("{\"success\": false, \"message\": \"Imaginea nu există: " + imagePath + "\"}", HttpStatus.INTERNAL_SERVER_ERROR);
            }

        } catch (Exception e) {
            System.err.println("Eroare " + e.getMessage());

            return new ResponseEntity<>("{\"success\": false, \"message\": \"Eroare la trimiterea email-ului cu atașament.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
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
