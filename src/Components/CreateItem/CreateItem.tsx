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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { ChangeEvent, useState } from "react";
import "./CreateItem.css";

interface newTaskTypes {
  taskText: string;
  taskColor: string;
  taskDescription: string;
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
  const [taskDescription, setTaskDescription] = useState<string>("");

  //Gerenciamento de texto da nova tarefa
  const handleTaskTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  //Gerenciamento de cor da nova tarefa
  const handleTaskColorChange = (e: SelectChangeEvent<string>) => {
    setTaskColor(e.target.value as string);
  };

  //Gerenciamento de texto da nova tarefa
  const handleTaskDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (taskText.trim()) {
      const newTask: newTaskTypes = {
        taskText: taskText.trim(),
        taskColor: taskColor.trim(),
        taskDescription: taskDescription.trim(),
      };

      onAdd(newTask);
      //Limpeza dos campos após adicionar nova tarefa
      setTaskText("");
      setTaskColor("");
      setTaskDescription("");
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
      <FormControl required className="priority-form">
        <InputLabel>Priority</InputLabel>
        <Select
          className="priority-selector"
          label="Priority"
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
      <TextField
        required
        label="Description"
        multiline
        rows={4}
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
      />
      <Button
        className="create-task-button"
        variant="contained"
        onClick={handleSubmit}
        disabled={!taskText || !taskColor || !taskDescription}
      >
        Create a new task <AddCircleIcon className="add-icon" />
      </Button>
    </Container>
  );
};
