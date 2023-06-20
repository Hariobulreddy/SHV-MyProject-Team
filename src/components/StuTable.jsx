import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Container } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function StuTable() {
  function change() {
    console.log("second");
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn(true);

    // Navigate to the desired route
    navigate("/AddStudent"); // Example: Navigate to the Admin page after login
  };
  const [students, setStudents] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const students = await axios.get(`http://localhost:8080/getstudent`);
    setStudents(students.data);
    console.log(students.data);
  };

  const deleteStudents = async (id) => {
    await axios.delete(`http://localhost:8080/deletestu/${id}`);
    loadStudents();
  };
  function change() {
    console.log("second");
  }

  return (
    <Container>
      <h1>Student List with Attendance</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">studentName</TableCell>
              <TableCell align="left">RegistrationNumber</TableCell>
              <TableCell align="left">Department</TableCell>
              <TableCell align="left">Attendance Status</TableCell>
              <TableCell align="center">actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.selectedDate}</TableCell>
                <TableCell>{student.studentname}</TableCell>
                <TableCell>{student.registrationNumber}</TableCell>
                <TableCell>{student.department}</TableCell>
                <TableCell>{student.attendancestatus}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <a href={`/UpdateStudent/${student.id}`}>
                      <Button style={{ borderRadius: 0 }}>Update</Button>
                    </a>

                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={() => deleteStudents(student.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={change()} href="/AddStudent" color="inherit">
        Add Student
      </Button>
    </Container>
  );
}
