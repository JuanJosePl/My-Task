import { DeleteTask, EditTask, Taskcomplete, TaskcompleteGreen, Taskpending, TaskpendingGrey } from '../../components/icons/icons'
import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../../context/task'
import './TaskList.css'

export const Tasks = () => {
  const { state, dispatch } = useContext(TaskContext)
  const [search, setSearch] = useState()
  const seracher = (e) => {
    setSearch(e.target.value)
  }

  const results = !search ? state.tasks : state.tasks.filter((task) => (task.name + task.description).toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    fetch(`https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=${state.user._id}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'LOAD_TASKS', payload: response.todos })
      })
  }, [])

  const handleDelete = (taskId) => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo/' + taskId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => response.json())
      .then(response => {
        window.alert('Se eliminó correctamente la tarea ' + response.todo.name)
        dispatch({ type: 'DELETE_TASK', payload: response.todo._id })
      })
  }

  const completeTask = (taskId) => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...state.tasks.find(task => task._id === taskId), isCompleted: false })
    })
      .then(response => response.json())
      .then(response => {
        window.alert('Se completó correctamente la tarea ' + response.todo.name)
        dispatch({ type: 'COMPLETE_TASK', payload: response.todo._id })
      })
  }

  return (
    <>
      <div className='task'>
        <input className='ButtonSearch' value={search} onChange={seracher} type='text' placeholder='Buscar por nombre y descripción' />
        <table className='tableContainer'>
          <thead className='tableHhead'>
            <tr className='titlesHead'>
              <td colSpan='3'> Lista de Tareas </td>
              <td colSpan='2' className='borderOptios'>Opciones</td>
              <td colSpan='2' className='borderCheck'> Marcar como </td>
            </tr>

            <tr className='titlesOptions'>
              <td>Nombre</td>
              <td>Descripcion</td>
              <td>Finaliza</td>
              <td>Editar</td>
              <td>Eliminar</td>
              <td>Pendiente</td>
              <td>Completada</td>
            </tr>
          </thead>
          <tbody>
            {results.map((task) => (
              <tr className={`table__content ${task.isCompleted ? 'pending' : 'completed'}`} key={task._id}>
                <td className='name__Task'><p>{task.name}</p></td>
                <td><p>{task.description}</p></td>
                <td><p>{task.finishDate}</p></td>
                <td><button onClick={() => dispatch({ type: 'SET_UPDATE_TASK', payload: task })}><EditTask /></button></td>
                <td><button onClick={() => handleDelete(task._id)}><DeleteTask /></button></td>
                <td><button>{task.isCompleted ? <Taskpending /> : <TaskpendingGrey />}</button></td>
                <td><button onClick={() => completeTask(task._id)}>{task.isCompleted ? <Taskcomplete /> : <TaskcompleteGreen />}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
