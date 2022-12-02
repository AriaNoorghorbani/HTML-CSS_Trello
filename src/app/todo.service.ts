import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnInit {
  ngOnInit(): void {}

  tasks: Task[] = [];
  taskInProgress: Task[] = [];
  taskDone: Task[] = [];

  updatedIndex!: any;
  editMode = false;
  todoChanges = new Subject<Task[]>();

  getTask() {
    let retrievedTask: any = localStorage.getItem('retrievedNewTaskList');
    let retrievedTaskInprogressList: any = localStorage.getItem(
      'retrievedTaskInprogressList'
    );
    let retrievedDoneTask: any = localStorage.getItem('retrievedDoneTaskList');
    this.tasks = JSON.parse(retrievedTask);
    this.taskInProgress = JSON.parse(retrievedTaskInprogressList);
    this.taskDone = JSON.parse(retrievedDoneTask);
    return this.tasks;
  }

  getListName() {}

  onAddTask(
    listName: string,
    title: string,
    description: string,
    done: boolean
  ) {
    if (listName === 'New') {
      this.tasks.push({
        title: title,
        description: description,
        done: false,
      });
      localStorage.setItem('retrievedNewTaskList', JSON.stringify(this.tasks));
    }

    if (listName === 'In progress') {
      this.taskInProgress.push({
        title: title,
        description: description,
        done: false,
      });
      localStorage.setItem(
        'retrievedTaskInprogressList',
        JSON.stringify(this.taskInProgress)
      );
    }
    if (listName === 'Done') {
      this.taskDone.push({
        title: title,
        description: description,
        done: done,
      });
      localStorage.setItem(
        'retrievedDoneTaskList',
        JSON.stringify(this.taskDone)
      );
    }

    // switch (listName) {
    //   case 'newTask': {
    //     this.tasks.push({
    //       title: title,
    //       description: description,
    //       done: false,
    //     });
    //     break;
    //   }
    //   case 'inprogressTask': {
    //     this.taskInProgress.push({
    //       title: title,
    //       description: description,
    //       done: false,
    //     });
    //     break;
    //   }
    //   case 'doneTask': {
    //     this.taskDone.push({
    //       title: title,
    //       description: description,
    //       done: false,
    //     });
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
    // }
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

  onEditTodo(item: Task, i: number) {
    this.tasks[i].title = item.title;
    this.tasks[i].description = item.description;
    this.updatedIndex = i;
    this.editMode = true;
    this.todoChanges.next(this.tasks.slice());
    localStorage.setItem('title', JSON.stringify(this.tasks[i].title));
  }

  onEditInprogressTodo(item: Task, i: number) {
    this.taskInProgress[i].description = item.description;
    this.updatedIndex = i;
    this.editMode = true;
    this.todoChanges.next(this.taskInProgress.slice());
  }

  onEditDoneTodo(item: Task, i: number) {
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
