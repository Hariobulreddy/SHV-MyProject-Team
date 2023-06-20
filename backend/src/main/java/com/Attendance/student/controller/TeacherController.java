package com.Attendance.student.controller;

import com.Attendance.student.exception.UserNotFoundException;
import com.Attendance.student.model.Teacher;
import com.Attendance.student.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class TeacherController {
    @Autowired
    private TeacherRepository teacherRepository;

    @PostMapping("/addteacher")
    Teacher newteacher(@RequestBody Teacher newTeacher) {

        return teacherRepository.save(newTeacher);
    }

    @GetMapping("/getteacher")
    List<Teacher> getTeacher() {

        return teacherRepository.findAll();
    }

    @PutMapping("/updateteacher/{id}")
    Teacher updateTeacher(@RequestBody Teacher newTeacher, @PathVariable Long id) {
        return teacherRepository.findById(id).map(teacher -> {
            teacher.setName(newTeacher.getName());
            return teacherRepository.save(teacher);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }


    @DeleteMapping("/deleteteacher/{id}")
    String deleteTeacher(@PathVariable Long id) {
        if (!teacherRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        teacherRepository.deleteById(id);
        return "Teacher with id" + id + " has been deleted.";
    }


    @GetMapping("/findteacher/{id}")
    Teacher getTeacherById(@PathVariable Long id){
        return teacherRepository.findById(id)

                .orElseThrow(()->new UserNotFoundException(id));
    }
}
