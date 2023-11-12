import { useContext } from "react";
import { Container } from "../../components/Container/Container";
import { TasksList }  from "../../components/TaskList/TaskList";
import { TasksContext } from "../../../context/task";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { useTask } from "../../../hooks/UseTask";

const PageTask = () => {
  const { state } = useContext(TasksContext);
  useTask();

  return (
    <Container>
      <TaskForm />
      <TasksList tasks={state.tasks} />
    </Container>
  );
};

export default PageTask;
