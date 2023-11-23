export const initialState = {
  user: null,
  tasks: [],
  taskToUpdate: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'LOAD_TASKS':
      return { ...state, tasks: action.payload }
    case 'ADD_TASKS':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'UPDATE_TASK': {
      const index = state.tasks.findIndex(task => task._id === action.payload._id)
      state.tasks[index] = action.payload
      return { ...state, taskToUpdate: null } }
    case 'SET_UPDATE_TASK':
      return { ...state, taskToUpdate: action.payload }
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task._id !== action.payload) }
    case 'COMPLETE_TASK':
      return { ...state, tasks: state.tasks.map(task => task._id === action.payload ? { ...task, isCompleted: false } : task) }
    default:
      return state
  }
}
