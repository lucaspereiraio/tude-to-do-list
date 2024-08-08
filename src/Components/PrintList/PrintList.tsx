import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

interface tasksTypes {
  taskId: number;
  taskText: string;
  taskColor: string;
  taskDescription: string;
}

export const PrintList = ({ tasks }: { tasks: tasksTypes[] }) => {
  return (
    <Container>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.taskId}>
            <Box style={{ backgroundColor: task.taskColor }} />
            <ListItemText
              primary={task.taskText}
              secondary={task.taskDescription}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
