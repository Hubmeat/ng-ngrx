import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO MODULES] add todo';
export const DELETE_TODO = '[TODO MODULES] delete todo';
export const UPDATE_TODO = '[TODO MODULES] update todo';
export const TOGGLE_TODO = '[TODO MODULES] toggle todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: ITodoItem) {}
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public payload: number) {}
}

export class UpdateTodoAction implements Action {
    readonly type = UPDATE_TODO;
    constructor(public payload: ITodoItem) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public payload: ITodoItem) {}
}

export type todoActions =
    | AddTodoAction
    | DeleteTodoAction
    | UpdateTodoAction
    | ToggleTodoAction;

