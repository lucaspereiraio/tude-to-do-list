import { Container, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--primary-color)",
        height: "5rem",
      }}
    >
      <Typography
        style={{
          color: "var(--text-s-color)",
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
