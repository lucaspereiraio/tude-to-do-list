import React from "react";

export const ToDoItem = ({ task, color }: { task: string; color: string }) => {
  return (
    <div>
      {task}
      {color}
    </div>
  );
};
