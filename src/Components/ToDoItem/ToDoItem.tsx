import {
  Box,
  Checkbox,
  Container,
  IconButton,
  ListItem,
  ListItemIcon,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import "./ToDoItem.css";
import DeleteIcon from "@mui/icons-material/Delete";

interface colorOptionTypes {
  color: string;
  label: string;
}

export const ToDoItem = ({
  taskId,
  check,
  text,
  color,
  description,
  colorOptions,
  onUpdate,
  onDelete,
}: {
  taskId: number;
  check: boolean;
  text: string;
  color: string;
  description: string;
  colorOptions: colorOptionTypes[];
  onUpdate: (
    taskId: number,
    newCheck: boolean,
    newText: string,
    newDesc: string,
    newColor: string
  ) => void;
  onDelete: () => void;
}) => {
  const [taskChecked, setTaskChecked] = useState(check);
  const [taskText, setTaskText] = useState(text);
  const [taskColor, setTaskColor] = useState(color);
  const [taskDescription, setTaskDescription] = useState(description);

  //Gerenciadores de edição de tasks
  const handleTaskCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setTaskChecked(newValue);
    onUpdate(taskId, newValue, taskText, taskDescription, taskColor);
  };

  const handleTaskTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTaskText(newValue);
    onUpdate(taskId, taskChecked, newValue, taskDescription, taskColor);
  };

  const handleTaskColorChange = (e: SelectChangeEvent<string>) => {
    const newValue = e.target.value as string;
    setTaskColor(newValue);
    onUpdate(taskId, taskChecked, taskText, taskDescription, newValue);
  };

  const handleTaskDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTaskDescription(newValue);
    onUpdate(taskId, taskChecked, taskText, newValue, taskColor);
  };

  return (
    <Container>
      <ListItem className="todo-item">
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={taskChecked}
            onChange={handleTaskCheckChange}
          />
        </ListItemIcon>
        <TextField
          variant="standard"
          value={taskText}
          onChange={handleTaskTextChange}
        />
        <Select value={taskColor} onChange={handleTaskColorChange}>
          {colorOptions.map((option) => (
            <MenuItem key={option.color} value={option.color}>
              <Box
                className="color-dot"
                style={{ backgroundColor: option.color }}
              />
              {option.label}
            </MenuItem>
          ))}
        </Select>
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
