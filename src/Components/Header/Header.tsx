import { Container, Typography } from "@mui/material";
import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <Container className="header">
      <Typography className="header-title" variant="h4" component="h1" mb={2}>
        Tude Diniz To-Do List
      </Typography>
    </Container>
  );
};
