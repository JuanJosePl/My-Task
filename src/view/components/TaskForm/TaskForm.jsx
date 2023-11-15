import { useContext } from "react";
import "./TaskForm.css";
import { TasksContext } from "../../../context/task";
import { create, update } from "../../../services/task";

export const TaskForm = () => {
  const { state, dispatch } = useContext(TasksContext);
  const text = state.currentTask ? "Actualizar" : "Crear";

  const userId = globalThis.localStorage.getItem("userId");

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

    // Llamar a la función correspondiente basada en si existe una tarea actual
    state.currentTask ? updateTask(body) : createTask(body);
  };

  const createTask = (body) => {
    // Crear la tarea
    create(body)
      .then((task) => {
        window.alert("Se creó la tarea: " + body.name);
        console.log("Tarea creada:", task);
        dispatch({ type: "CREATE_TASK", payload: task });
      })
      .catch((error) => {
        console.error("Error al crear la tarea:", error);
        window.alert("Hubo un error al crear la tarea. Inténtalo de nuevo.");
      });
  };

  const updateTask = (body) => {
    // Actualizar la tarea
    update({ ...body, _id: state.currentTask._id })
      .then((task) => {
        window.alert("Se actualizó la tarea: " + body.name);
        console.log("Tarea actualizada:", task);
        const updatedIndex = state.tasks.findIndex(
          (_task) => _task._id === task._id
        );
        dispatch({ type: "UPDATE_TASK", payload: task, index: updatedIndex });
      })
      .catch((error) => {
        console.error("Error al actualizar la tarea:", error);
        window.alert("Hubo un error al actualizar la tarea. Inténtalo de nuevo.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2 className="task-form__title">{text} tarea</h2>
      <fieldset className="task-form__section">
        <div className="task-form__input">
          <label htmlFor="">Título:</label>
          <input
            type="text"
            name="name"
            required
            defaultValue={state.currentTask ? state.currentTask.name : ""}
          />
        </div>
        <div className="task-form__input">
          <label htmlFor="">Descripción: </label>
          <input
            type="text"
            name="description"
            required
            defaultValue={
              state.currentTask ? state.currentTask.description : ""
            }
          />
        </div>
        <div className="task-form__input">
          <label htmlFor="">Fecha: </label>
          <input
            type="date"
            name="finishDate"
            required
            defaultValue={state.currentTask ? state.currentTask.finishDate : ""}
          />
        </div>
      </fieldset>
      <button type="submit">{text}</button>
    </form>
  );
};
