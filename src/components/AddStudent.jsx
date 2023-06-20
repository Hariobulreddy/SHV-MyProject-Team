import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  let navigate = useNavigate();

  const [studentData, setStudentData] = useState({
    studentname: "",
    registrationNumber: "",
    department: "",
    attendancestatus: "",
    selectedDate: "",
  });

  const {
    studentname,
    registrationNumber,
    department,
    attendancestatus,
    selectedDate,
  } = studentData;

  const handleData = (e) => {
    setStudentData((prevStudentData) => ({
      ...prevStudentData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(studentData);
    await axios.post(`http://localhost:8080/addstudent`, studentData);
    setStudentData({
      studentname: "",
      registrationNumber: "",
      department: "",
      attendancestatus: "",
      selectedDate: "",
    });
    navigate("/StuTable");
  };

  return (
    <Container>
      <Box>
        <h1>Add Student Details</h1>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="Date"
              name="selectedDate"
              value={selectedDate}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="Student Name"
              name="studentname"
              value={studentname}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="RegistrationNumber"
              name="registrationNumber"
              value={registrationNumber}
              onChange={handleData}
            />
            <TextField
              label="Department"
              name="department"
              value={department}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="Attendance Status"
              name="attendancestatus"
              value={attendancestatus}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="container">
                Add Student
              </Button>
              <Button href="/StuTable" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddStudent;
