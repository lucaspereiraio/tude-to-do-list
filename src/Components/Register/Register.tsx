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
import { Link, useNavigate } from "react-router-dom";

const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isName = /^[A-Za-z\s]+$/;

export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //States de erro
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  //Variável de navegação para outra rota (gerenciamento do Register)
  const navigate = useNavigate();

  //Gerenciamento de registro
  const handleRegister = () => {
    let valid = true;

    if (!isEmail.test(email)) {
      setEmailError("Insira um email válido!");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!isName.test(name)) {
      setNameError("Insira um nome válido!");
      valid = false;
    } else {
      setNameError("");
    }

    if (password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      navigate("/create");
    }
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
            error={Boolean(nameError)}
            helperText={nameError}
          />
          <TextField
            required
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmail}
            autoComplete="email"
            error={Boolean(emailError)}
            helperText={emailError}
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
            {passwordError && (
              <Typography color="error">{passwordError}</Typography>
            )}
          </FormControl>
        </Box>
        <Box className="inner-box-buttons">
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
          <Button variant="text" component={Link} to="/login">
            Already have an account? Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
