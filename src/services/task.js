// Función para obtener todas las tareas (TODOs)
export const getTodos = () => {
  return fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo')
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
      return response.json();
    })
    .then(response => response.todo)
    .catch(error => {
      console.error('Hubo un problema al obtener las tareas:', error);
      throw error;
    });
}

// Función para crear una tarea (TODO)
export const create = (body) => {
  console.log(body);
  return fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
      return response.json();
    })
    .then(response => response.todo)
    .catch(error => {
      console.error('Hubo un problema al crear la tarea:', error);
      throw error;
    });
}

// Función para actualizar una tarea (TODO)
export const update = (body) => {
  return fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
      return response.json();
    })
    .then(response => response.todo)
    .catch(error => {
      console.error('Hubo un problema al actualizar la tarea:', error);
      throw error;
    });
}

// Función para eliminar una tarea (TODO)
export const deleteTask = (taskId) => {
  return fetch(`https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue exitosa');
      }
      return response.json();
    })
    .then(response => response.todo)
    .catch(error => {
      console.error('Hubo un problema al eliminar la tarea:', error);
      throw error;
    });
}
