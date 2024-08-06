import { Button, Container, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

interface newTaskTypes {
  taskText: string;
  taskColor: string;
}

export const CreateItem = ({
  onAdd,
}: {
  onAdd: (task: newTaskTypes) => void;
}) => {
  const [taskText, setTaskText] = useState<string>("");
  const [taskColor, setTaskColor] = useState<string>("");

  const handleTaskTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleTaskColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskColor(e.target.value);
  };

  const handleSubmit = () => {
    if (taskText.trim()) {
      const newTask: newTaskTypes = {
        taskText: taskText.trim(),
        taskColor: taskColor.trim() || "#FFFFFF", // Define uma cor padrão se nenhuma for fornecida
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
        label="Task"
        variant="outlined"
        value={taskText}
        onChange={handleTaskTextChange}
      ></TextField>
      <TextField
        label="Color"
        variant="outlined"
        value={taskColor}
        onChange={handleTaskColorChange}
      ></TextField>
      <Button
        className="create-task-button"
        variant="contained"
        onClick={handleSubmit}
        // disabled={}
      >
        Create a new task
      </Button>
    </Container>
  );
};
