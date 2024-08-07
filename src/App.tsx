import React, { useState } from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Header } from "./Components/Header/Header";
import { CreateItem } from "./Components/CreateItem/CreateItem";
import { ToDoItem } from "./Components/ToDoItem/ToDoItem";
import { List } from "@mui/material";

//icone adicionar no create task
//avisos de erro vermelhos nos textfields (validation) e colocar também um form props de dicas de inputs
//Autofocus na proxima do create
//onEnter criar
//onEnter no todo sai o da edição
//FAZER: o styling, colocar o erro dos textfields do material ui, implementar rotas

//disabled no login e register

//Tela de listar atividades
//Editar cor
//botoes funcionais registro e login
//descrição da atividade
//editar descrição
//ver como ta funcionando o handlesubmit
//fazer rotas de paginas
//fazer design e responsividade

interface tasksTypes {
  taskId: number;
  taskText: string;
  taskColor: string;
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

  //Gerenciamento de itens (criação)
  const handleCreateItem = (taskData: Omit<tasksTypes, "taskId">) => {
    const newTask: tasksTypes = {
      //Id inicial será 1 ou terá o incremento de 1
      taskId: tasks.length ? tasks[tasks.length - 1].taskId + 1 : 1,
      taskText: taskData.taskText,
      taskColor: taskData.taskColor,
    };

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      //Log de criação de uma task
      console.log("Tasks after creation:", updatedTasks);
      return updatedTasks;
    });
  };

  //Gerenciamento de itens (atualização)
  const handleUpdateItemText = (taskId: number, newText: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.taskId === taskId ? { ...task, taskText: newText } : task
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
    <div className="App">
      <Header />
      <Login />
      <Register />
      <CreateItem onAdd={handleCreateItem} colorOptions={colorOptions} />
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
