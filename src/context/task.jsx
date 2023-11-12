import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/task';

// Crear un contexto para las tareas
export const TasksContext = createContext();

// Crear un proveedor para las tareas
export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
