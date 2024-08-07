import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import "./Register.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isName = /^[A-Za-z\s]+$/;

export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //Gerenciamento de registro
  const handleRegister = () => {
    if (!isEmail.test(email)) {
      alert("Insira um email válido!");
      return;
    } else if (!isName.test(name)) {
      alert("Insira um nome válido!");
      return;
    }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  //Gerenciamento dos inputs
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Gerenciamento de visibilidade da senha
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Box className="outter-box">
        <Typography
          className="register-title"
          variant="h4"
          component="h1"
          mb={2}
        >
          Register
        </Typography>
        <Box className="inner-box-inputs">
          <TextField
            required
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleName}
            autoComplete="name"
          />
          <TextField
            required
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmail}
            autoComplete="email"
          />
          <FormControl required variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePassword}
              autoComplete="new-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Box className="inner-box-buttons">
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
          <Button variant="text">Already have an account? Login</Button>
        </Box>
      </Box>
    </Container>
  );
};
