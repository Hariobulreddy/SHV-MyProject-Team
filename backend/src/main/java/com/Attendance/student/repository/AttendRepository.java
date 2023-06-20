package com.Attendance.student.repository;
import com.Attendance.student.model.Attend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendRepository extends JpaRepository<Attend,Long> {
}
