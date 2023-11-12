import { useContext } from "react";
import "./TaskForm.css";
import { TasksContext } from "../../../context/task";
import { create, update } from "../../../services/task";

export const TaskForm = () => {
  const { state, dispatch } = useContext(TasksContext);
  const text = state.currentTask ? "Actualizar" : "Crear";

  const handleSubmit = (event) => {
    event.preventDefault();

    let body = {
      userId: state.user._id,
      isCompleted: false,
    };

    for (const element of event.target.elements) {
      if (element.name) {
        body[element.name] = element.value;
      }
    }

    state.currentTask
      ? updateTask(body, event.target)
      : createTask(body, event.target);
  };

  const createTask = (body, target) => {
    if (state.user) {
      // Crear la tarea
      create(body)
        .then((task) => {
          window.alert(`Se creó la tarea: ${task.title}`);
          dispatch({ type: "CREATE_TASK", payload: task });
          target.reset();
        })
        .catch((error) => {
          console.error("Error al crear la tarea:", error);
          window.alert("Hubo un error al crear la tarea. Inténtalo de nuevo.");
        });
    } else {
      // El usuario no está conectado, mostrar un error
      alert("Debes estar conectado para crear una tarea.");
    }
  };

  const updateTask = (body, target) => {
    if (state.user) {
      // Actualizar la tarea
      update({ ...body, _id: state.currentTask._id }) // Agregar _id a body para la actualización
        .then((task) => {
          window.alert(`Se actualizó la tarea: ${task.title}`);
          const updatedIndex = state.tasks.findIndex(
            (_task) => _task._id === task._id
          );
          dispatch({ type: "UPDATE_TASK", payload: task, index: updatedIndex });
          target.reset();
        })
        .catch((error) => {
          console.error("Error al actualizar la tarea:", error);
          window.alert(
            "Hubo un error al actualizar la tarea. Inténtalo de nuevo."
          );
        });
    } else {
      // El usuario no está conectado, mostrar un error
      alert("Debes estar conectado para actualizar una tarea.");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2 className="task-form__title">{text} tarea</h2>
      <fieldset className="task-form__section">
        <div className="task-form__input">
          <label htmlFor="">Título:</label>
          <input
            type="text"
            name="title"
            required
            defaultValue={state.currentTask ? state.currentTask.title : ""}
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
            name="date"
            required
            defaultValue={state.currentTask ? state.currentTask.date : ""}
          />
        </div>
      </fieldset>
      <button type="submit">{text}</button>
    </form>
  );
};
