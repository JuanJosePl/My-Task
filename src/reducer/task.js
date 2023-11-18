export const initialState = {
  tasks: [],
  currentTask: null,
  userId: globalThis.localStorage.getItem('userId'),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      console.log('Tareas antes de CREATE_TASK:', state.tasks);
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK': {
      console.log('Tareas antes de UPDATE_TASK:', state.tasks);
      const updatedTasks = state.tasks.map(task => {
        if (task._id === action.payload._id) {
          return action.payload;
        }
        return task;
      });
      return { ...state, tasks: updatedTasks, currentTask: null };
    }
    case 'GET_TASKS':
      console.log('Tareas antes de GET_TASKS:', state.tasks);
      return { ...state, tasks: action.payload };
    case 'DELETE_TASK':
      console.log('Tareas antes de DELETE_TASK:', state.tasks);
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload),
      };
    case 'SET_CURRENT_TASK':
      console.log('Tareas antes de SET_CURRENT_TASK:', state.tasks);
      return { ...state, currentTask: action.payload };
    default:
      return state;
  }
};
