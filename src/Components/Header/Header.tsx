import { Container, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--primary-color)",
        height: "5rem",
      }}
    >
      <Typography
        sx={{
          color: "var(--text-color)",
          fontSize: "2rem",
        }}
        variant="h4"
        component="h1"
      >
        To-Do List
      </Typography>
    </Container>
  );
};
