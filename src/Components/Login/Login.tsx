import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import "./Login.css";

//FAZER: o styling, colocar o erro dos textfields do material ui, implementar rotas

//Regex para validar o email
const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Gerenciamento de login
  const handleLogin = () => {
    //Verificação regex para o email
    if (!isEmail.test(email)) {
      alert("Insira um email válido!");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  //Gerenciamento de email
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //Gerenciamento de senha
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Box className="outter-box">
        <Typography className="login-title" variant="h4" component="h1" mb={2}>
          Login
        </Typography>
        <Box className="inner-box-inputs">
          <TextField
            required
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmail}
            autoComplete="email"
          />
          <TextField
            required
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePassword}
            autoComplete="current-password"
          />
        </Box>
        <Box className="inner-box-buttons">
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="text">Register now</Button>
        </Box>
      </Box>
    </Container>
  );
};
