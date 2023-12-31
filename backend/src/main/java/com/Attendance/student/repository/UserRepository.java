package com.Attendance.student.repository;


import com.Attendance.student.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Query(value="SELECT u FROM User u WHERE u.name= :name")
    Optional<User> findUserByUserName(@Param("name") String name);

}

