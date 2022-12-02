import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './model/task';

export type IColumn = {
  id: string;
  title: string;
  tasks: Task[];
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  columns: IColumn[];

  constructor() {
    this.columns = [];
  }

  tasks: Task[] = [];
  taskInProgress: Task[] = [];
  taskDone: Task[] = [];

  updatedIndex!: any;
  editMode = false;
  todoChanges = new Subject<Task[]>();

  fetchTasks(): IColumn[] {
    let retrievedColumns: any = localStorage.getItem('columns');
    this.columns = JSON.parse(retrievedColumns);
    return this.columns;
  }
  createCol(title: string) {
    this.columns = this.columns || [];
    this.columns.push({
      id: Math.random().toString(),
      title,
      tasks: [],
    });
    localStorage.setItem('columns', JSON.stringify(this.columns));
  }
  editCol(id: string, title: string) {
    const col = this.columns.find((i) => i.id == id);
    if (!col) throw Error('can not find the specified column');
    col.title = title;
    return col;
  }
  removeCol(id: string) {
    const idx = this.columns.findIndex((i) => i.id == id);
    this.columns.splice(idx, 1);
  }
  addTaskToCol(id: string, task: Task) {
    const col = this.columns.find((i) => i.id == id);
    let colId = col?.id;
    console.log(id);
    console.log(colId);
    console.log(col);
    console.log(task);

    if (!col) throw Error('can not find the specified column');
    col.tasks.push(task);

    localStorage.setItem(col.id, JSON.stringify(col));

    return col;
  }

  editTaskTocCol(id: string, task: Task) {}
  removeTaskTocCol(id: string, taskId: string) {}

  getTask() {
    let retrievedTask: any = localStorage.getItem('retrievedNewTaskList');
    let retrievedTaskInprogressList: any = localStorage.getItem(
      'retrievedTaskInprogressList'
    );
    let retrievedDoneTask: any = localStorage.getItem('retrievedDoneTaskList');
    this.tasks = JSON.parse(retrievedTask);
    this.taskInProgress = JSON.parse(retrievedTaskInprogressList);
    this.taskDone = JSON.parse(retrievedDoneTask);

    console.log(this.columns);

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
