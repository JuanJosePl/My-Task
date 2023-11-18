import { useContext } from "react";
import "./TaskForm.css";
import { TasksContext } from "../../../context/task";
import IconSaludar from "/public/icon/icono-saludo.png";

export const TaskForm = () => {
  const { state, dispatch } = useContext(TasksContext);
  const text = state.currentTask ? "Actualizar" : "Crear";

  const userId = globalThis.localStorage.getItem("userId");
  const firstName = globalThis.localStorage.getItem("firstName");

  const handleSubmit = (event) => {
    event.preventDefault();

    let body = {
      userId,
      isCompleted: false,
    };

    // Obtener valores del formulario
    for (const element of event.target.elements) {
      if (element.name) {
        body[element.name] = element.value;
      }
    }

    fetch("https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(response => response.json())
    .then(response =>{
      window.alert('Se creo correctamente la tarea ' + response.todo.name)
      dispatch({ type: 'CREATE_TASK', payload: response.todo })
    })
      
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="taskFormContainer">
        <h2 className="taskFormContainer__title">{text} tarea</h2>
        <div className="formContent">
          <div className="iconoName">
            <img src={IconSaludar} className="imgSaludo" alt="" />
            <p className="namePerson">Hola, {firstName} !</p>
          </div>
          <fieldset className="formFields">
            <div className="formFields__inputGroup">
              <div className="formFields__input">
                <label htmlFor="title" className="inputLabel">
                  Título:
                </label>
                <input
                  id="title"
                  type="text"
                  name="name"
                  className="formInput"
                  required
                />
              </div>
              <div className="formFields__input">
                <label htmlFor="description" className="inputLabel">
                  Descripción:
                </label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  className="formInput"
                  required
                />
              </div>
              <div className="formFields__input fechaRecordatorio">
                <label htmlFor="finishDate" className="inputLabel">
                  Fecha:
                </label>
                <input
                  id="finishDate"
                  type="date"
                  name="finishDate"
                  className="formInput"
                  required
                />
              </div>
            </div>
          </fieldset>
          <button type="submit" className="submitButton">
            {text}
          </button>
        </div>
      </form>
    </>
  );
};
