import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";

interface tasksTypes {
  taskId: number;
  taskChecked: boolean;
  taskText: string;
  taskColor: string;
  taskDescription: string;
}

export const PrintList = ({ tasks }: { tasks: tasksTypes[] }) => {
  return (
    <Container>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.taskId}
            style={{
              border: `2px solid ${task.taskColor}`,
              borderRadius: "0.5rem",
              margin: "1rem 0",
              padding: "1rem",
              backgroundColor: task.taskChecked
                ? "var(--checked-color)"
                : "var(--text-s-color)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: task.taskColor,
                  border: "solid black 1px",
                  borderRadius: "50%",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="h6"
                style={{
                  textDecoration: task.taskChecked ? "line-through" : "none",
                }}
              >
                {task.taskText}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              style={{ color: "var(--secondary-color)" }}
            >
              {task.taskDescription}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
