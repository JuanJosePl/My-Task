import IconSaludar from '../../../../public/icon/icono-saludo.png'
import { Tasks } from "../TaskList/tasklist";
import { useContext } from "react";
import { TaskContext } from "../../../context/task";
import { initialState } from "../../../reducer/task";
import './TaskForm.css'

export function TaskForm() {

  const firstName = globalThis.localStorage.getItem("firstName");
  
  const { state, dispatch } = useContext(TaskContext, initialState);

  const text = state.taskToUpdate ? "Actualizar" : "Crear";

  const handleSubmit = (event) => {
    event.preventDefault();
    let body = { isCompleted: true, userId: state.user._id };
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value };
      }
    }

    const update = (body, event) => {
      fetch("https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ ...body, _id: state.taskToUpdate._id }),
      })
        .then((response) => response.json())
        .then((response) => {
          window.alert(
            "Se actualizó correctamente la tarea " + response.todo.name
          );
          dispatch({ type: "UPDATE_TASK", payload: response.todo });
          event.target.reset();
        });
    };

    const create = (body, event) => {
      fetch("https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body, event),
      })
        .then((response) => response.json())
        .then((response) => {
          event.target.reset();
          window.alert("Se creó correctamente la tarea " + response.todo.name);
          dispatch({ type: "ADD_TASKS", payload: response.todo });
        });
    };
    state.taskToUpdate ? update(body, event) : create(body, event);
  };

  return (
    <>
      <div className='containerAll_Task'>
        <div className='container__task__form_Task_Task'>
          <form onSubmit={handleSubmit}>
            <div className='container__form_Task'>
              <h2 className='container__title__form_Task'>Crear Tarea</h2>
              <div className="iconoName">
                <img src={IconSaludar} className="imgSaludo" alt="" />
                <p className="namePerson">Hola, {firstName}!</p>
              </div>
              <div className='list__buttons__form_Task'>
                <div className='list__buttons__div_Task'>
                  <input id='name' name='name' className='inputs__form_Task' type='text' placeholder='nombre a tu tarea' required defaultValue={state.taskToUpdate ? state.taskToUpdate.name : ''} />
                  <textarea id='description' name='description' className='description inputs__form_Task' rows='10' placeholder='descripción para tu tarea' required defaultValue={state.taskToUpdate ? state.taskToUpdate.description : ''} />
                  <label className='label__fecha__finalizacion_Task' htmlFor='finishDate'>Fecha de finalizacion
                    <input id='finishDate' name='finishDate' className='inputsform date' type='date' required defaultValue={state.taskToUpdate ? state.taskToUpdate.finishDate : ''} />
                  </label>
                </div>
              </div>
              <button type='submit' className='Register_Button_Task'>{text} Tarea</button>
            </div>
          </form>
        </div>
      </div>
      <Tasks />
    </>
  );
}
