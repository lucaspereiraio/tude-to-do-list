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

//Regex para validar o email
const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //States de erro
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  //Variável de navegação para outra rota (gerenciamento do Login)
  const navigate = useNavigate();

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
      navigate("/create");
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
      <Typography style={{ marginBottom: "1rem" }} variant="h4" component="h1">
        Login
      </Typography>
      <Box display={"flex"} gap={"1rem"}>
        <TextField
          required
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
          autoComplete="email"
          error={Boolean(emailError)}
          helperText={emailError}
          style={{ width: "16rem" }}
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
            style={{ width: "16rem" }}
          />
          {passwordError && (
            <Typography color="error">{passwordError}</Typography>
          )}
        </FormControl>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
        <Button
          variant="contained"
          onClick={handleLogin}
          style={{ width: "10rem", height: "2rem" }}
        >
          Login
        </Button>
        <Typography fontSize={"0.7rem"}>OR</Typography>
        <Button
          variant="outlined"
          component={Link}
          to="/register"
          style={{ width: "10rem", height: "2rem" }}
        >
          Register now
        </Button>
      </Box>
    </Container>
  );
};
