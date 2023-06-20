package com.Attendance.student.controller;

import com.Attendance.student.exception.UserNotFoundException;
import com.Attendance.student.model.User;
import com.Attendance.student.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")

public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/adduser")
    User newuser(@RequestBody User newUser) {

        return userRepository.save(newUser);
    }

    @GetMapping("/getusers")
    List<User> getUser() {
        return userRepository.findAll();
    }

    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getName());
            user.setName(newUser.getName());
            user.setPassword(newUser.getPassword());
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }


    @DeleteMapping("/delete/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id" + id + " has been deleted.";
    }


    @GetMapping("/finduser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)

                .orElseThrow(()->new UserNotFoundException(id));
    }
}
