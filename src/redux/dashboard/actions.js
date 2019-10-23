import {
  TASKS_FETCH_START,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_ERROR,
  TASKS_UPDATE_START,
  TASKS_UPDATE_SUCCESS,
  TASKS_UPDATE_ERROR
} from '../types';

export const taskFetchStart = () => ({
  type: TASKS_FETCH_START
});

export const taskFetchSuccess = tasks => ({
  type: TASKS_FETCH_SUCCESS,
  payload: {
    tasks
  }
});

export const taskFetchError = error => ({
  type: TASKS_FETCH_ERROR,
  payload: {
    error
  }
});

export const taskUpdateStart = () => ({
  type: TASKS_UPDATE_START
});

export const taskUpdateSuccess = id => ({
  type: TASKS_UPDATE_SUCCESS,
  payload: {
    id
  }
});

export const taskUpdateError = error => ({
  type: TASKS_UPDATE_ERROR,
  payload: {
    error
  }
});

export default {
  taskFetchStart,
  taskFetchSuccess,
  taskFetchError,
  taskUpdateStart,
  taskUpdateSuccess,
  taskUpdateError
};
