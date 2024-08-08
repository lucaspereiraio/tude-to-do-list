import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Header } from "./Components/Header/Header";
import { CreateItem } from "./Components/CreateItem/CreateItem";
import { ToDoItem } from "./Components/ToDoItem/ToDoItem";
import { List } from "@mui/material";
import { PrintList } from "./Components/PrintList/PrintList";

// Funcionalidades UX

//icone adicionar no create task
//Autofocus na proxima do create
//onEnter criar
//onEnter no todo sai o da edição
//Formatar color picker
//checked counter
//erro typescript
//erro console

//Funcionalidades NECESSARIAS

//localstorage
//ischecked?
//Tela de listar atividades (e botão no create)
//required no todo items
//fazer design e responsividade

interface tasksTypes {
  taskId: number;
  // taskChecked: boolean;
  taskText: string;
  taskColor: string;
  taskDescription: string;
}

function App() {
  const [tasks, setTasks] = useState<tasksTypes[]>([]);

  //Opções de cor baseadas na prioridade
  const colorOptions = [
    { color: "#FF0000", label: "Urgent" },
    { color: "#FFA500", label: "High" },
    { color: "#FFFF00", label: "Moderate" },
    { color: "#008000", label: "Low" },
    { color: "#0000FF", label: "Information" },
  ];

  // useEffect(() => {
  //   const tasksLocalStorage = localStorage.getItem("tasks");
  //   const jsonDataTasks = tasksLocalStorage && JSON.parse(tasksLocalStorage);

  //   if (tasksLocalStorage) {
  //     setTasks(jsonDataTasks);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  //Gerenciamento de itens (criação)
  const handleCreateItem = (taskData: Omit<tasksTypes, "taskId">) => {
    const newTask: tasksTypes = {
      //Id inicial será 1 ou terá o incremento de 1
      taskId: tasks.length ? tasks[tasks.length - 1].taskId + 1 : 1,
      taskText: taskData.taskText,
      taskColor: taskData.taskColor,
      taskDescription: taskData.taskDescription,
    };

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      //Log de criação de uma task
      console.log("Tasks after creation:", updatedTasks);
      return updatedTasks;
    });
  };

  //Gerenciamento de itens (atualização)
  const handleUpdateItem = (
    taskId: number,
    newText: string,
    newDesc: string,
    newColor: string
  ) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.taskId === taskId
          ? {
              ...task,
              taskText: newText,
              taskDescription: newDesc,
              taskColor: newColor,
            }
          : task
      );
      //Log de atualização de uma task
      console.log("Tasks after update:", updatedTasks);
      return updatedTasks;
    });
  };

  //Gerenciamento de itens (exclusão)
  const handleDeleteItem = (taskId: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.taskId !== taskId);
      //Log de exclusão de uma task
      console.log("Tasks after deletion:", updatedTasks);
      return updatedTasks;
    });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create"
            element={
              <>
                <CreateItem
                  onAdd={handleCreateItem}
                  colorOptions={colorOptions}
                />
                <List>
                  {tasks.map((task) => (
                    <ToDoItem
                      key={task.taskId}
                      taskId={task.taskId}
                      text={task.taskText}
                      color={task.taskColor}
                      description={task.taskDescription}
                      colorOptions={colorOptions}
                      onUpdate={handleUpdateItem}
                      onDelete={() => handleDeleteItem(task.taskId)}
                    />
                  ))}
                </List>
              </>
            }
          />
          <Route path="/print" element={<PrintList tasks={tasks} />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
