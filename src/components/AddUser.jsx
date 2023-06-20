import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const { name, username, password } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post(`http://localhost:8080/adduser`, userData);
    setUserData({ name: "", username: "", password: "" });
    navigate("/BasicTable");
  };

  return (
    <Container>
      <Box>
        <h1>ADD USER</h1>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              value={name}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="User Name"
              name="username"
              value={username}
              onChange={handleData}
            />
            <TextField
              label="Password"
              name="password"
              value={password}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="container">
                Add User
              </Button>
              <Button href="/BasicTable" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;
