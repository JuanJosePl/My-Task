import { useContext } from 'react';
import { TasksContext } from '../../../context/task';
import { deleteTask } from '../../../services/task';
import './Task.css';

export const Task = ({ task }) => {
  const { dispatch } = useContext(TasksContext);

  const handleDelete = async () => {
    try {
      const deletedTask = await deleteTask(task._id);
      window.alert(`Se eliminó la tarea ${deletedTask.name}`);
      dispatch({ type: 'DELETE_TASK', payload: deletedTask._id });
    } catch (error) {
      console.error('Hubo un error al eliminar la tarea:', error);
      window.alert('Hubo un error al eliminar la tarea. Inténtalo de nuevo.');
    }
  };

  const handleEdit = () => {
    dispatch({ type: 'SET_CURRENT_TASK', payload: task });
  };

  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.description}</td>
      <td>{task.finishDate}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};
