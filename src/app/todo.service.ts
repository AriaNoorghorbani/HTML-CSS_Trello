import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ITask } from './model/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnInit {
  ngOnInit(): void {}

  tasks: ITask[] = [];

  // retrievedInprogressTask: any = localStorage.getItem('InprogressTask');

  taskInProgress: ITask[] = [];

  taskDone: ITask[] = [
    {
      title: 'DoneTask Title',
      description: 'This is just a test description for this DoneTask',
      done: false,
    },
  ];
  updatedIndex!: any;
  editMode = false;
  todoChanges = new Subject<ITask[]>();

  getTask() {
    let retrievedTask: any = localStorage.getItem('retrievedTask');
    let taskInprogressList: any = localStorage.getItem(
      'retrievedTaskInprogressList'
    );
    let retrievedDoneTask: any = localStorage.getItem('retrievedDoneTaskList');

    this.tasks = JSON.parse(retrievedTask);
    this.taskInProgress = JSON.parse(taskInprogressList);
    this.taskDone = JSON.parse(retrievedDoneTask);
    return this.tasks;
  }

  onAddTask(title: string, description: string, done: boolean) {
    this.tasks.push({
      title: title,
      description: description,
      done: done,
    });
    localStorage.setItem('retrievedTask', JSON.stringify(this.tasks));
  }

  onDeleteTodo(i: number) {
    this.tasks.splice(i, 1);
  }

  onDeleteInProgressTodo(i: number) {
    this.taskInProgress.splice(i, 1);
  }

  onDeleteDoneTodo(i: number) {
    this.taskDone.splice(i, 1);
  }

  onEditTodo(item: ITask, i: number) {
    this.tasks[i].title = item.title;
    this.tasks[i].description = item.description;
    this.updatedIndex = i;
    this.editMode = true;
    this.todoChanges.next(this.tasks.slice());
    localStorage.setItem('title', JSON.stringify(this.tasks[i].title));
  }

  onEditInprogressTodo(item: ITask, i: number) {
    this.taskInProgress[i].description = item.description;
    this.updatedIndex = i;
    this.editMode = true;
    this.todoChanges.next(this.taskInProgress.slice());
  }

  onEditDoneTodo(item: ITask, i: number) {
    this.taskDone[i].description = item.description;
    this.updatedIndex = i;
    this.editMode = true;
    this.todoChanges.next(this.taskDone.slice());
  }

  isEditMode() {
    if ((this.editMode = true)) {
      return true;
    } else {
      return false;
    }
  }
}
