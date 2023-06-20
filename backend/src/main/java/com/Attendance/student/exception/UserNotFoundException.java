package com.Attendance.student.exception;

public class UserNotFoundException  extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("the user does not exist: "+id);
    }

}
