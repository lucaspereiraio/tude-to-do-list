import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import "./CreateItem.css";

interface newTaskTypes {
  taskText: string;
  taskColor: string;
}

interface colorOptionTypes {
  color: string;
  label: string;
}

export const CreateItem = ({
  onAdd,
  colorOptions,
}: {
  onAdd: (task: newTaskTypes) => void;
  colorOptions: colorOptionTypes[];
}) => {
  const [taskText, setTaskText] = useState<string>("");
  const [taskColor, setTaskColor] = useState<string>("");

  //Gerenciamento de texto da nova tarefa
  const handleTaskTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  //Gerenciamento de cor da nova tarefa
  const handleTaskColorChange = (e: SelectChangeEvent<string>) => {
    setTaskColor(e.target.value as string);
  };

  const handleSubmit = () => {
    if (taskText.trim()) {
      const newTask: newTaskTypes = {
        taskText: taskText.trim(),
        taskColor: taskColor.trim(),
      };

      onAdd(newTask);
      setTaskText(""); // Limpar campo de texto após adicionar a tarefa
      setTaskColor(""); // Limpar campo de cor após adicionar a tarefa
    }
  };

  return (
    <Container>
      <TextField
        required
        className="task"
        label="Task"
        variant="outlined"
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <FormControl className="priority-form">
        <InputLabel>Priority *</InputLabel>
        <Select
          required
          className="priority-selector"
          label="Priority *"
          value={taskColor}
          onChange={handleTaskColorChange}
        >
          {colorOptions.map((option) => (
            <MenuItem
              className="priority-option"
              key={option.color}
              value={option.color}
            >
              <Box
                className="color-dot-selector"
                style={{ backgroundColor: option.color }}
              />
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        className="create-task-button"
        variant="contained"
        onClick={handleSubmit}
        disabled={!taskText || !taskColor}
      >
        Create a new task
      </Button>
    </Container>
  );
};
