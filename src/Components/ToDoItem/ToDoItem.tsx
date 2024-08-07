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
  description,
  onUpdate,
  onDelete,
}: {
  taskId: number;
  text: string;
  color: string;
  description: string;
  onUpdate: (taskId: number, newText: string, newDesc: string) => void;
  onDelete: () => void;
}) => {
  const [taskText, setTaskText] = useState(text);
  // const [taskColor, setTaskColor] = useState(color);
  const [taskDescription, setTaskDescription] = useState(description);

  //Gerenciadores de edição de tasks
  const handleTaskTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTaskText(newValue);
    onUpdate(taskId, newValue, taskDescription);
  };

  // const handleTaskColorChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   setTaskText(newValue);
  //   onUpdate(taskId, newValue);
  // };

  const handleTaskDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTaskDescription(newValue);
    onUpdate(taskId, taskText, newValue);
  };

  return (
    <Container>
      <ListItem className="todo-item">
        <ListItemIcon>
          <Checkbox edge="start" />
        </ListItemIcon>
        <TextField
          variant="standard"
          value={taskText}
          onChange={handleTaskTextChange}
        />
        <Box className="color-dot" style={{ backgroundColor: color }} />
        <TextField
          variant="standard"
          multiline
          rows={4}
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
        />
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Container>
  );
};
