import React, { useState } from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Header } from "./Components/Header/Header";
import { CreateItem } from "./Components/CreateItem/CreateItem";
import { ToDoItem } from "./Components/ToDoItem/ToDoItem";
import { List } from "@mui/material";

//Placeholder nos campos de email
//Olho icon para ver a senha
//icone adicionar

interface tasksTypes {
  taskId: number;
  taskText: string;
  taskColor: string;
}

function App() {
  const [tasks, setTasks] = useState<tasksTypes[]>([]);

  //Gerenciamento de itens (criação)
  const handleCreateItem = (taskData: Omit<tasksTypes, "taskId">) => {
    const newTask: tasksTypes = {
      //Id inicial será 1 ou terá o incremento de 1
      taskId: tasks.length ? tasks[tasks.length - 1].taskId + 1 : 1,
      taskText: taskData.taskText,
      taskColor: taskData.taskColor,
    };

    setTasks([...tasks, newTask]);
  };

  //Gerenciamento de itens (atualização)
  const handleUpdateItemText = (taskId: number, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === taskId ? { ...task, taskText: newText } : task
      )
    );
  };

  //Gerenciamento de itens (exclusão)
  const handleDeleteItem = (taskId: number) => {
    setTasks(tasks.filter((task) => task.taskId !== taskId));
  };

  return (
    <div className="App">
      <Header />
      <Login />
      <Register />
      <CreateItem onAdd={handleCreateItem} />
      <List>
        {tasks.map((task) => (
          <ToDoItem
            key={task.taskId}
            taskId={task.taskId}
            text={task.taskText}
            color={task.taskColor}
            onUpdate={handleUpdateItemText}
            onDelete={() => handleDeleteItem(task.taskId)}
          />
        ))}
      </List>
    </div>
  );
}

export default App;
