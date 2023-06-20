package com.Attendance.student.controller;

import com.Attendance.student.exception.UserNotFoundException;
import com.Attendance.student.model.Student;
import com.Attendance.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@CrossOrigin("http://localhost:3000/")

    public class StudentController {
        @Autowired
        private StudentRepository studentRepository;

        @PostMapping("/addstudent")
        Student newstudent(@RequestBody Student newStudent) {

            return studentRepository.save(newStudent);
        }

        @GetMapping("/getstudent")
        List<Student> getStudent() {
            return studentRepository.findAll();
        }

        @PutMapping("/updatestu/{id}")
        Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id) {
            return studentRepository.findById(id).map(student -> {
                student.setStudentname(newStudent.getStudentname());
                student.setDepartment(newStudent.getDepartment());
                student.setAttendancestatus(newStudent.getAttendancestatus());
                return studentRepository.save(student);
            }).orElseThrow(() -> new UserNotFoundException(id));
        }


        @DeleteMapping("/deletestu/{id}")
        String deleteStudent(@PathVariable Long id) {
            if (!studentRepository.existsById(id)) {
                throw new UserNotFoundException(id);
            }
            studentRepository.deleteById(id);
            return "Student with id" + id + " has been deleted.";
        }


        @GetMapping("/findstu/{id}")
        Student getStudentById(@PathVariable Long id){
            return studentRepository.findById(id)

                    .orElseThrow(()->new UserNotFoundException(id));
        }
    }


