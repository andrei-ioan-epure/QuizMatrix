package com.quizmatrix.quizmatrix.auth.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.quizmatrix.quizmatrix.auth.config.jwt.TokenProvider;
import com.quizmatrix.quizmatrix.auth.dto.*;
import com.quizmatrix.quizmatrix.auth.model.User;
import com.quizmatrix.quizmatrix.auth.service.UserHandlingService;
import com.quizmatrix.quizmatrix.notification.entity.EmailDTO;
import com.quizmatrix.quizmatrix.notification.exception.MessageSentException;
import com.quizmatrix.quizmatrix.notification.service.IEmailService;
import jakarta.persistence.PersistenceException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.time.Duration;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(value = "http://localhost:4200", allowCredentials = "true")
public class AuthController {

    private final TokenProvider tokenProvider;

    private final IEmailService emailService;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    private final UserHandlingService userHandlingService;
    @Autowired
    public AuthController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder, UserHandlingService userHandlingService, IEmailService emailService)
    {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.userHandlingService = userHandlingService;
        this.emailService = emailService;
    }

    @GetMapping("/forgot-password")
    public ResponseEntity<String> forgot_password(@RequestParam String email)
    {
        String token = tokenProvider.createForgotPasswordToken(email);
        try {
            EmailDTO e = new EmailDTO();
            e.setRecipient(email);
            emailService.sendPasswordResetMail(e, token);
        } catch (MessageSentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>("{\"msg\":\"Mail sent successfully\"}", HttpStatus.OK);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> reset_password(@RequestBody PasswordResetDTO pw)
    {
        if(!tokenProvider.validateToken(pw.getToken()))
        {
            return new ResponseEntity<>("{\"msg\":\"Token expired\"}", HttpStatus.CONFLICT);
        }
        String email = tokenProvider.extractEmail(pw.getToken());
        userHandlingService.resetPassword(email, pw.getPassword());
        return new ResponseEntity<>("{\"msg\":\"Password reseted\"}", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody UserLoginDTO authDTO, HttpServletResponse response) {

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                authDTO.getEmail(),
                authDTO.getPassword()
        );

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        final String jwt = tokenProvider.createToken(authentication, authDTO.isRememberMe());

//        HttpHeaders httpHeaders = new HttpHeaders();
//        httpHeaders.add("Authorization", "Bearer " + jwt);

        ResponseCookie cookie = ResponseCookie.from("token", jwt) // key & value
                .httpOnly(true)
                .secure(false)
                //    .domain("localhost")  // host
                //    .path("/")      // path
                .maxAge(Duration.ofHours(1))
                .sameSite("strict")  // sameSite
                .build()
                ;

        response.setHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        User u = userHandlingService.findUserByEmail(authDTO.getEmail()).get();

        LoginResponseDTO r = new LoginResponseDTO();
        r.setFirstname(u.getFirstname());
        r.setLastname(u.getLastname());
        r.setId_user(u.getId_user());
        r.setEmail(u.getEmail());
        r.setRole(u.getRole());

        return new ResponseEntity<>(r, HttpStatus.OK);
    }
    @PostMapping("/register")
    public ResponseEntity<RegisterResponseDTO> register(@RequestBody UserRegisterDTO userDTO)
    {
        try{
            User u = userHandlingService.registerUser(userDTO);
            return new ResponseEntity<>(new RegisterResponseDTO("User " + u.getEmail() + " created"), HttpStatus.OK);
        } catch (DataIntegrityViolationException e)
        {
            return new ResponseEntity<>(new RegisterResponseDTO("User already exists"), HttpStatus.I_AM_A_TEAPOT);
        } catch (PersistenceException e)
        {
            return new ResponseEntity<>(new RegisterResponseDTO("DB ERROR"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/elevateToAdmin/{id}")
    public ResponseEntity<String> makeAdmin(@PathVariable Integer id)
    {
        if(userHandlingService.makeAdmin(id) == 1){
            return new ResponseEntity<>("SUDOED", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("???", HttpStatus.I_AM_A_TEAPOT);
        }
    }

    @GetMapping("/test")
    public ResponseEntity<String> test()
    {
        return new ResponseEntity<>("Salut", HttpStatus.OK);
    }

    @GetMapping("/test_admin")
    public ResponseEntity<String> test_admin()
    {
        return new ResponseEntity<>("Salut admin", HttpStatus.OK);
    }

    @GetMapping("/test_user")
    public ResponseEntity<String> test_user()
    {
        return new ResponseEntity<>("Salut user", HttpStatus.OK);
    }

    static class JWTToken {
        private String idToken;

        JWTToken(String idToken) {
            this.idToken = idToken;
        }

        @JsonProperty("id_token")
        String getIdToken() {
            return idToken;
        }

        void setIdToken(String idToken) {
            this.idToken = idToken;
        }
    }
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        return userHandlingService.findUserById_user(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping("/send-new-test-notification")
    public ResponseEntity<String> sendNewTestNotificationToAllUsers(@RequestParam String testName) {
        List<User> users = userHandlingService.getAllUsers();

        for (User user : users) {
            try {
                EmailDTO emailDTO = new EmailDTO();
                emailDTO.setRecipient(user.getEmail());
                emailService.sendNewTestNotification(emailDTO, testName);
            } catch (MessageSentException e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<>("{\"msg\":\"Mail sent successfully to all users\"}", HttpStatus.OK);
    }
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userHandlingService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("/users/ids")
    public ResponseEntity<?> getAllUsersByIds(@RequestParam String ids) {
        List<SimpleUserDTO> users = userHandlingService.getAllUsersByIds(ids);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        userHandlingService.deleteUserById(id);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody User user){
        this.userHandlingService.updateUser(id,user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


