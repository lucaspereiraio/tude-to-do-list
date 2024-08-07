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
import "./Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

//Regex para validar o email
const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //States de erro
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  //Gerenciamento de login
  const handleLogin = () => {
    let valid = true;
    //Verificação regex para o email
    if (!isEmail.test(email)) {
      setEmailError("Insira um email válido!");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Senha inválida! Tem no mínimo 6 caracteres.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  //Gerenciamento de email
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //Gerenciamento de senha
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //Gerenciamento de visibilidade da senha
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
              autoComplete="current-password"
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
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="text">Register now</Button>
        </Box>
      </Box>
    </Container>
  );
};
