import { useEffect, useContext } from 'react';
import { getTodos } from '../services/task';

import { TasksContext } from '../context/task';

export const useTask = () => {
  const { dispatch } = useContext(TasksContext);

  useEffect(() => {
    getTodos()
      .then(tasks => dispatch({ type: 'GET_TASKS', payload: tasks }))
  }, []);
};
