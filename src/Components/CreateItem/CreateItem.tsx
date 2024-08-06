import { Button, Container, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

export const CreateItem = () => {
  const [newTask, setNewTask] = useState<string>("");

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <Container>
      <TextField
        required
        label="Task"
        variant="outlined"
        value={newTask}
        onChange={handleNewTask}
      ></TextField>
      <TextField></TextField>
      <Button
        className="create-task-button"
        variant="contained"
        // onClick={}
        // disabled={}
      >
        Create a new task
      </Button>
    </Container>
  );
};
