import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate, useNavigate1 } from "react-router-dom";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);

    navigate("/Sidenav");
  };
  const [isLoggedIn1, setIsLoggedIn1] = useState(false);
  const navigate1 = useNavigate();

  const handleLogin1 = () => {
    setIsLoggedIn1(true);

    navigate1("/SignUp");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <div>
        <h1>Student Attendance</h1>
        <h1>Management System</h1>
        <Stack spacing={1} minWidth={300}>
          <TextField type="text" label="UserName" autoFocus />
          <TextField type="text" label="Password" />
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" onClick={handleLogin1}>
            create new account
          </Button>
        </Stack>
      </div>
    </Box>
  );
}

export default Login;
