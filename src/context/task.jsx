import { useReducer, createContext } from 'react'
import { initialState, reducer } from '../reducer/task'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
