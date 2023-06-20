import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    loadData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.put(`http://localhost:8080/update/${id}`, userData);
    navigate("/BasicTable");
  };

  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8080/finduser/${id}`);
    setUserData(result.data);
  };

  return (
    <Container>
      <Box>
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
              label="UserName"
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
              <Button type="submit" variant="contained">
                Update User
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

export default UpdateUser;
