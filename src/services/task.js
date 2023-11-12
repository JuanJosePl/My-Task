import { API_URL } from '../env'

export const getTodos = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(response => response.products)
}

export const create = (body) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.task)
}

export const update = (body) => {
  return fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.task)
}

export const deleteTask = (taskId) => {
  return fetch(API_URL + '/' + taskId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => response.task)
}
