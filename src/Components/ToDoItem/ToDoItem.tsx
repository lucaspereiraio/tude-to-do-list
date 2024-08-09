import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
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
    <ListItem
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        border: `2px solid ${color}`,
        borderRadius: "0.5rem",
        boxShadow: "2",
        backgroundColor: taskChecked
          ? "var(--checked-color)"
          : "var(--text-s-color)",
        margin: "1rem 0",
      }}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={taskChecked}
          onChange={handleTaskCheckChange}
        />
      </ListItemIcon>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        marginRight={"1.75rem"}
      >
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          gap={"1rem"}
        >
          <Box width={{ xs: "8rem", sm: "16rem" }}>
            <TextField
              variant="outlined"
              value={taskText}
              onChange={handleTaskTextChange}
              fullWidth
            />
          </Box>
          <Box width={"8rem"}>
            <Select
              value={taskColor}
              onChange={handleTaskColorChange}
              fullWidth
            >
              {colorOptions.map((option) => (
                <MenuItem
                  key={option.color}
                  value={option.color}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.5rem",
                  }}
                >
                  <Box
                    component="span"
                    style={{
                      display: "inline-block",
                      width: "0.8rem",
                      height: "0.8rem",
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
          </Box>
        </Box>
        <Box width={{ xs: "8rem", sm: "25rem" }}>
          <TextField
            variant="outlined"
            multiline
            rows={3}
            value={taskDescription}
            onChange={handleTaskDescriptionChange}
            fullWidth
          />
        </Box>
      </Box>
      <IconButton edge="end" aria-label="delete" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
