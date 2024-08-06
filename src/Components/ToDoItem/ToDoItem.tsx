import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import "./ToDoItem.css";
import DeleteIcon from "@mui/icons-material/Delete";

export const ToDoItem = ({
  task,
  color,
  onDelete,
}: {
  task: string;
  color: string;
  onDelete: () => void;
}) => {
  return (
    <List>
      <ListItem className="todo-item">
        <ListItemIcon>
          <Checkbox edge="start" />
        </ListItemIcon>
        <ListItemText primary={task} />
        <Box className="color-dot" style={{ backgroundColor: color }} />
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </List>
  );
};
