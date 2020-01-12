import {
    ADD_TODO, 
    DELETE_TODO, 
    UPDATE_TODO, 
    TOGGLE_TODO, 
    todoActions,
} from '../actions/todo.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface TodoState {
  todos: ITodoItem[]
}

export const initState: TodoState = {
  todos: []
};

export default function reducer(state = initState, action: todoActions): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((item, index) => index !== action.payload)
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((item, index) => {
          return index === action.payload.index
            ? Object.assign({}, item, { value: action.payload.newValue })
            : item;
        })
      }
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((item, index) => {
          return index === action.payload.index
            ? Object.assign({}, item, { complete: !action.payload.complete })
            : item;
        })
      }
    default:
      return state;
  }
}


export const getTodoState = createFeatureSelector<TodoState>('todoState');

export const getTodoLists = createSelector(
  getTodoState,
  (state: TodoState) => state.todos
);
