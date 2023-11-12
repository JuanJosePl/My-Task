export const initialState = {
    user: null,
    tasks: [],
    currentTask: null,
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'UPDATE_TASK': {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        state.tasks[index] = action.payload;
        return { ...state, currentTask: null };
      }
      case 'GET_TASKS':
        return { ...state, tasks: action.payload };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
        };
      case 'SET_CURRENT_TASK':
        return { ...state, currentTask: action.payload };
      default:
        return state;
    }
  };
  