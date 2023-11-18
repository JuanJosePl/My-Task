import { Task } from '../Task/Task'
import './TaskList.css'

export const TasksList = ({ task }) => {
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
        {task && task.map(task => {
            <Task key={task._id} task={task} />
          })}
      </tbody>
    </table>
  )
}
