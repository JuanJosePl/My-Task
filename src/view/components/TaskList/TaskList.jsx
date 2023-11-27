import {
  DeleteTask,
  EditTask,
  Taskcomplete,
  TaskcompleteGreen,
  Taskpending,
  TaskpendingGrey,
} from "../../components/icons/icons";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../../context/task";
import "./TaskList.css";

export const Tasks = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [search, setSearch] = useState();
  const seracher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? state.tasks
    : state.tasks.filter((task) =>
        (task.name + task.description)
          .toLowerCase()
          .includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    fetch(
      `https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=${state.user._id}`
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: "LOAD_TASKS", payload: response.todos });
      });
  }, []);

  const handleDelete = (taskId) => {
    fetch("https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo/" + taskId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        window.alert("Se eliminó correctamente la tarea " + response.todo.name);
        dispatch({ type: "DELETE_TASK", payload: response.todo._id });
      });
  };

  const completeTask = (taskId) => {
    fetch("https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...state.tasks.find((task) => task._id === taskId),
        isCompleted: false,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        window.alert(
          "Se completó correctamente la tarea " + response.todo.name
        );
        dispatch({ type: "COMPLETE_TASK", payload: response.todo._id });
      });
  };

  return (
    <>
      <div className="card__search-container">
        <input
          className="card__search-input"
          value={search}
          onChange={seracher}
          type="text"
          placeholder="Buscar por nombre y descripción"
        />
        <svg
          className="card__search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <div className="card">
        {results.map((task) => (
          <div
            className={`card__task ${
              task.isCompleted ? "completed" : "pending"
            }`}
            key={task._id}
          >
            <div className="card__task-info">
              <h3 className="card__task-name">{task.name}</h3>
              <p className="card__task-description">{task.description}</p>
              <p className="card__task-date">{task.finishDate}</p>
            </div>
            <div className="card__task-actions">
              <button
                className="card__action-button"
                onClick={() =>
                  dispatch({ type: "SET_UPDATE_TASK", payload: task })
                }
              >
                <EditTask />
              </button>
              <button
                className="card__action-button"
                onClick={() => handleDelete(task._id)}
              >
                <DeleteTask />
              </button>
              <button
                className="card__action-button"
                onClick={() => completeTask(task._id)}
              >
                {task.isCompleted ? <Taskcomplete /> : <Taskpending />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
