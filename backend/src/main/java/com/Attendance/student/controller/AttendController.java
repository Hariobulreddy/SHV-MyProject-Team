package com.Attendance.student.repository;

import com.Attendance.student.exception.UserNotFoundException;
import com.Attendance.student.model.Attend;
import com.Attendance.student.repository.AttendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class AttendController {
    @Autowired
    private AttendRepository attendRepository;

    @PostMapping("/addattend")
    Attend newattend(@RequestBody Attend newAttend) {

        return attendRepository.save(newAttend);
    }

    @GetMapping("/getattend")
    List<Attend> getAttend() {

        return attendRepository.findAll();
    }

    @PutMapping("/updateattend/{stid}")
    Attend updateAttend(@RequestBody Attend newAttend, @PathVariable Long stid) {
        return attendRepository.findById(stid).map(attend -> {
            attend.setDt(newAttend.getDt());
            attend.setStatus(newAttend.getStatus());
            attend.setDepartment(newAttend.getDepartment());
            return attendRepository.save(attend);
        }).orElseThrow(() -> new UserNotFoundException(stid));
    }


    @DeleteMapping("/deleteattend/{stid}")
    String deleteAttend(@PathVariable Long stid) {
        if (!attendRepository.existsById(stid)) {
            throw new UserNotFoundException(stid);
        }
        attendRepository.deleteById(stid);
        return "Attend with stid" + stid + " has been deleted.";
    }


    @GetMapping("/findattend/{id}")
    Attend getAttendById(@PathVariable Long stid){
        return attendRepository.findById(stid)

                .orElseThrow(()->new UserNotFoundException(stid));
    }
}

