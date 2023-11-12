import { useContext } from 'react';
import { TasksContext } from '../../../context/task';
import { deleteTask } from '../../../services/task';
import './Task.css';

export const Task = ({ task }) => {
  const { dispatch } = useContext(TasksContext);

  const handleDelete = () => {
    deleteTask(task.id)
      .then((task) => {
        window.alert('Se eliminó la tarea ' + task.title);
        dispatch({ type: 'DELETE_TASK', payload: task.id });
      });
  };

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.date}</td>
      <td>
        <button onClick={() => dispatch({ type: 'SET_CURRENT_TASK', payload: task })}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};
