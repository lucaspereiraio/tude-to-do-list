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
      setPasswordError("Mínimo de 6 caracteres!");
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

  // Padronização da mensagem de erro
  const ErrorMessage = ({ message }: { message: string }) => (
    <Typography color={"var(--alert-color)"} fontSize={"0.7rem"}>
      {message}
    </Typography>
  );

  return (
    <Container
      style={{
        display: "flex",
        height: "full",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        marginTop: "3rem",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "3",
        gap: "1rem",
        backgroundColor: "var(--bg-s-color)",
      }}
    >
      <Typography variant="h4" component="h1">
        Register
      </Typography>
      <Box display={"flex"} gap={"1rem"}>
        <TextField
          required
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleName}
          autoComplete="name"
          error={Boolean(nameError)}
          helperText={nameError ? <ErrorMessage message={nameError} /> : ""}
          style={{ width: "11rem" }}
        />
        <TextField
          required
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
          autoComplete="email"
          error={Boolean(emailError)}
          helperText={emailError ? <ErrorMessage message={emailError} /> : ""}
          style={{ width: "11rem" }}
        />
        <FormControl required variant="outlined">
          <InputLabel error={Boolean(passwordError)}>Password</InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePassword}
            error={Boolean(passwordError)}
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
            style={{ width: "11rem" }}
          />
          {passwordError && <ErrorMessage message={passwordError} />}
        </FormControl>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
        <Typography fontSize={"0.7rem"}>Already have an account?</Typography>
        <Button variant="text" component={Link} to="/login">
          Login
        </Button>
      </Box>
    </Container>
  );
};
