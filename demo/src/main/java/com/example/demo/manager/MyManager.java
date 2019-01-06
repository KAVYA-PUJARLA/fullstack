package com.example.demo.manager;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MyManager {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private UserRepository userRepository;

    public void myRequest(User user) {
//     User user = new User(name, age);
        mongoTemplate.save(user);
    }


    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
