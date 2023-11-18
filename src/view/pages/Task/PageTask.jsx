import React, { useContext, useEffect } from "react";
import { Container } from "../../components/Container/Container";
import { TasksList } from "../../components/TaskList/TaskList";
import { TasksContext } from "../../../context/task";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { useTask } from "../../../hooks/UseTask";

const PageTask = () => {
  const { state, dispatch } = useContext(TasksContext);

  useTask();

  useEffect(() => {
    console.log("Las tareas han cambiado:", state.tasks);
  }, [state.tasks]); 

  const handleTaskCreated = (task) => {
    
    console.log("Tarea creada:", task);
  };

  return (
    <Container>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TasksList tasks={state.tasks} />
    </Container>
  );
};

export default PageTask;