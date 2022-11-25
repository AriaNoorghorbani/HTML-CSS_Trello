import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from './model/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: ITask[] = [{ description: 'asbe abi', done: false }];
  taskInProgress: ITask[] = [];
  taskDone: ITask[] = [];

  getTask() {
    return this.tasks;
  }

  onAddTask(description: string, done: boolean) {
    this.tasks.push({
      description: description,
      done: done,
    });
  }

  onDeleteTodo(i: number) {
    this.tasks.splice(i, 1);
  }

  onDeleteInProgressTodo(i: number) {
    this.taskInProgress.splice(i, 1);
  }
}
