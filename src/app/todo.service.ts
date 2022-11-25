import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from './model/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoForm: FormGroup;
  tasks: ITask[] = [];
  taskInProgress: ITask[] = [];
  taskDone: ITask[] = [];

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      item: ['', Validators.required],
    });
  }

  onAddTask(description: string, done: boolean) {
    this.tasks.push({
      description: this.todoForm.value.item,
      done: false,
    });
  }
}
