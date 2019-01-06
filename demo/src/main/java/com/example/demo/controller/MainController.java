package com.example.demo.controller;

import com.example.demo.manager.MyManager;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api")
public class MainController {

    @Autowired
    private MyManager myManager;
    private User user;

//    @GetMapping("/teacher_signup")
    @PostMapping("/teacher_signup")
    public HttpEntity<?> myRequest(@RequestBody User user) {
        myManager.myRequest(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/users")
    public HttpEntity<List<User>> getUsers() {

        return new ResponseEntity<>(myManager.getUsers(), HttpStatus.OK);
    }
}
