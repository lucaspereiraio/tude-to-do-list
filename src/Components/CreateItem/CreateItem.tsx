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
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "3rem",
        padding: "1rem",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={"1rem"}
      >
        <TextField
          required
          label="Task"
          variant="outlined"
          value={taskText}
          onChange={handleTaskTextChange}
          style={{ width: "16rem" }}
        />
        <Box width={{ xs: "16rem", sm: "8rem" }}>
          <FormControl required fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              label="Priority"
              value={taskColor}
              onChange={handleTaskColorChange}
            >
              {colorOptions.map((option) => (
                <MenuItem key={option.color} value={option.color}>
                  <Box
                    style={{
                      width: "1rem",
                      height: "1rem",
                      border: "solid black 1px",
                      borderRadius: "50%",
                      marginRight: "1rem",
                      backgroundColor: option.color,
                    }}
                  />
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box width={{ xs: "16rem", sm: "25rem" }}>
        <TextField
          required
          label="Description"
          multiline
          rows={3}
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
          fullWidth
        />
      </Box>

      <Box width={{ xs: "16rem", sm: "25rem" }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!taskText || !taskColor || !taskDescription}
          style={{ height: "3.5rem" }}
          fullWidth
        >
          Create a new task{" "}
          <AddCircleIcon style={{ marginLeft: "0.5rem", fontSize: "1.5rem" }} />
        </Button>
      </Box>
    </Container>
  );
};
