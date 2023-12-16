package com.quizmatrix.quizmatrix.auth.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.quizmatrix.quizmatrix.auth.config.jwt.TokenProvider;
import com.quizmatrix.quizmatrix.auth.dto.UserLoginDTO;
import com.quizmatrix.quizmatrix.auth.dto.UserRegisterDTO;
import com.quizmatrix.quizmatrix.auth.dto.UserResponseDTO;
import com.quizmatrix.quizmatrix.auth.model.User;
import com.quizmatrix.quizmatrix.auth.repository.UserRepository;
import com.quizmatrix.quizmatrix.auth.service.AuthenticationService;
import com.quizmatrix.quizmatrix.auth.service.UserHandlingService;
import jakarta.persistence.PersistenceException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(value = "http://localhost:4200", allowCredentials = "true")
public class AuthController {

    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    private final UserHandlingService userHandlingService;
    @Autowired
    public AuthController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder, UserHandlingService userHandlingService)
    {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.userHandlingService = userHandlingService;
    }
    @PostMapping("/login")
    public ResponseEntity<UserResponseDTO> login(@RequestBody UserLoginDTO authDTO, HttpServletResponse response) {

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                authDTO.getUsername(),
                authDTO.getPassword()
        );

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        final String jwt = tokenProvider.createToken(authentication, authDTO.isRememberMe());

//        HttpHeaders httpHeaders = new HttpHeaders();
//        httpHeaders.add("Authorization", "Bearer " + jwt);
        Cookie c = new Cookie("token", jwt);
        c.setHttpOnly(true);
        response.addCookie(new Cookie("token", jwt));

        User u = userHandlingService.findUserByUsername(authDTO.getUsername()).get();

        UserResponseDTO r = new UserResponseDTO();
        r.setFirstname(u.getFirstname());
        r.setLastname(u.getLastname());
        r.setId_user(u.getId_user());
        r.setEmail(u.getEmail());
        r.setUsername(u.getUsername());
        r.setRole(u.getRole());

        return new ResponseEntity<>(r, HttpStatus.OK);
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegisterDTO userDTO)
    {
        try{
            User u = userHandlingService.registerUser(userDTO);
            return new ResponseEntity<>("User " + u.getUsername() + " created", HttpStatus.OK);
        } catch (DataIntegrityViolationException e)
        {
            return new ResponseEntity<>("User already exists", HttpStatus.I_AM_A_TEAPOT);
        } catch (PersistenceException e)
        {
            return new ResponseEntity<>("DB ERROR", HttpStatus.INTERNAL_SERVER_ERROR);
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
}


