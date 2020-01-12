import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddTodoAction, DeleteTodoAction, UpdateTodoAction, ToggleTodoAction } from '../store/actions/todo.action';
import { STORE_KEY, AppState } from '../store';
import { TodoState, getTodoLists } from '../store/reducers/todo.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  todos$: Observable<ITodoItem[]>;
  editTargetIndex: number;
  todo: string;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {
    // this.todos$ = this.store.select('todoState').pipe(
    //   map((state: TodoState) => state.todos)
    // );
    this.todos$ = this.store.select(getTodoLists);
  }

  public addTodo(value): void {
    this.store.dispatch(new AddTodoAction({ value, complete: false }));
    this.todo = ''; 
  }
  public deleteTodo(index): void {
    this.store.dispatch(new DeleteTodoAction(index));
  }

  public editTodo(todo, index): void {
    this.editing = true;
    this.todo = todo.value;
    this.editTargetIndex = index;
  }

  public cancelEdit(): void {
    this.editing = false;
    this.todo = '';
    this.editTargetIndex = null;
  }

  public updateTodo(updatedTodo): void {
    this.store.dispatch(new UpdateTodoAction({ index: this.editTargetIndex, newValue: updatedTodo }));
    this.todo = '';
    this.editTargetIndex = null;
    this.editing = false;
  }

  public toggleTodo(todo, index): void {
    this.store.dispatch(new ToggleTodoAction({ index, complete: todo.complete }));
  }
}
