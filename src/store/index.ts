/**
 * @description store 管理库
 */
import { default as todoReducer, TodoState } from './reducers/todo.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    'todoState': TodoState
}

export const STORE_KEY = {
    TODO_STATE: 'todoState'
};

export const reducers: ActionReducerMap<any> = {
    'todoState': todoReducer,
};
