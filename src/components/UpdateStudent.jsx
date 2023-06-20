import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    loadData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(studentData);
    await axios.put(`http://localhost:8080/updatestu/${id}`, studentData);
    navigate("/StuTable");
  };

  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8080/findstu/${id}`);
    setStudentData(result.data);
  };

  return (
    <Container>
      <Box>
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
              <Button type="submit" variant="contained">
                Update Student
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

export default UpdateStudent;
