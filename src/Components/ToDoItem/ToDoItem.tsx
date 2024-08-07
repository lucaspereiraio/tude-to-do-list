import {
  Box,
  Checkbox,
  Container,
  IconButton,
  ListItem,
  ListItemIcon,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import "./ToDoItem.css";
import DeleteIcon from "@mui/icons-material/Delete";

export const ToDoItem = ({
  taskId,
  text,
  color,
  onUpdate,
  onDelete,
}: {
  taskId: number;
  text: string;
  color: string;
  onUpdate: (taskId: number, newText: string) => void;
  onDelete: () => void;
}) => {
  const [taskText, setTaskText] = useState(text);

  const handleTaskTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTaskText(newValue);
    onUpdate(taskId, newValue);
  };

  return (
    <Container>
      <ListItem className="todo-item">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <TextField
          variant="standard"
          value={taskText}
          onChange={handleTaskTextChange}
        />
        <Box className="color-dot" style={{ backgroundColor: color }} />
        <IconButton aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Container>
  );
};
