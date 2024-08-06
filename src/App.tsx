import React, { useState } from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Header } from "./Components/Header/Header";
import { CreateItem } from "./Components/CreateItem/CreateItem";
import { ToDoItem } from "./Components/ToDoItem/ToDoItem";

interface tasksTypes {
  taskId: number;
  taskText: string;
  taskColor: string;
}

function App() {
  const [tasks, setTasks] = useState<tasksTypes[]>([]);

  // const generateHighestId = () => {
  //   const tasksId = tasks.map((item) => tasks.taskId);
  //   return tasksId.length ? Math.max(...tasksId) + 1 : 1;
  // };

  const handleCreateItem = (taskData: Omit<tasksTypes, "taskId">) => {
    const newTask: tasksTypes = {
      taskId: tasks.length ? tasks[tasks.length - 1].taskId + 1 : 1, // Incrementa o ID ou começa com 1
      taskText: taskData.taskText,
      taskColor: taskData.taskColor,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <Header />
      <Login />
      <Register />
      <CreateItem onAdd={handleCreateItem} />
      <div>
        {tasks.map((task) => (
          <ToDoItem
            key={task.taskId}
            task={task.taskText}
            color={task.taskColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
