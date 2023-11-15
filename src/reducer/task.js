export const initialState = {
  tasks: [],
  currentTask: null,
  userId: globalThis.localStorage.getItem('userId'),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK': {
      const updatedTasks = state.tasks.map(task => {
        if (task._id === action.payload._id) {
          return action.payload;
        }
        return task;
      });
      return { ...state, tasks: updatedTasks, currentTask: null };
    }
    case 'GET_TASKS':
      return { ...state, tasks: action.payload };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload),
      };
    case 'SET_CURRENT_TASK':
      return { ...state, currentTask: action.payload };
    default:
      return state;
  }
};
