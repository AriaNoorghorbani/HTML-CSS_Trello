import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ITask } from './model/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: ITask[] = [{ description: 'asbe abi', done: false }];
  taskInProgress: ITask[] = [];
  taskDone: ITask[] = [];
  updatedIndex!: any;
  editMode = false;
  todoChanges = new Subject<ITask[]>();

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

  onEditTodo(item: ITask, i: number) {
    this.tasks[i].description = item.description;
    // this.todoForm.controls['item'].setValue(item.description);
    this.updatedIndex = i;
    this.editMode = true;
    this.todoChanges.next(this.tasks.slice());
  }
}
