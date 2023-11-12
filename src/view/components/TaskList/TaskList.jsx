import { Task } from '../Task/Task'
import './TaskList.css'

export const TasksList = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks && tasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        }
      </tbody>
    </table>
  )
}
