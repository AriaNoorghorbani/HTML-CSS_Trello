import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './task-edit-dialog/task-edit-dialog.component';
import { Task } from '../model/task';
import { TodoService } from '../todo.service';
import { DeleteDialogComponent } from './task-delete-dialog/task-delete-dialog.component';

export interface DialogData {
  title: string;
  description: string;
}
export interface Confirm {
  yes: boolean;
  no: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoComponent implements OnInit, AfterContentChecked {
  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  editMode = false;

  taskNewList: Task[] = [];
  taskInProgressList: Task[] = [];
  taskDoneList: Task[] = [];

  title: string = '';
  description: string = '';

  ngOnInit(): void {
    this.todoService.getTask();
    this.taskNewList = this.todoService.tasks;
    this.taskInProgressList = this.todoService.taskInProgress;
    this.taskDoneList = this.todoService.taskDone;
  }

  ngAfterContentChecked(): void {
    localStorage.setItem(
      'retrievedNewTaskList',
      JSON.stringify(this.taskNewList)
    );
    localStorage.setItem(
      'retrievedTaskInprogressList',
      JSON.stringify(this.taskInProgressList)
    );
    localStorage.setItem(
      'retrievedDoneTaskList',
      JSON.stringify(this.taskDoneList)
    );
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onDeleteInprogress(i: number) {
    this.todoService.onDeleteInProgressTodo(i);
  }

  deleteTodoTaskConfirm(i: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { description: this.description, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.todoService.onDeleteTodo(i);
      }
      console.log('The dialog was closed');
      this.title = result.title;
      this.description = result.description;
      console.log(result);
    });
  }

  deleteInprogressTaskConfirm(i: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { description: this.description, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.todoService.onDeleteInProgressTodo(i);
      }
      console.log('The dialog was closed');
      this.title = result.title;
      this.description = result.description;
      console.log(result);
    });
  }

  deleteDoneTaskConfirm(i: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { description: this.description, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      if (result === true) {
        this.todoService.onDeleteDoneTodo(i);
      }
      console.log('The dialog was closed');
      this.title = result.title;
      this.description = result.description;
      console.log(result);
    });
  }

  onEditTask(i: number): void {
    this.title = '';
    this.description = '';
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { description: this.description, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      if (result.title.length > 1 && result.description.length > 1) {
        console.log('The dialog was closed');
        this.title = result.title;
        this.description = result.description;
        console.log(result);
        this.todoService.onEditTodo(
          {
            title: result.title,
            description: result.description,
          },
          i
        );
      }
    });
  }

  onEditInprogressTask(i: number): void {
    this.title = '';
    this.description = '';
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { description: this.description, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.title.length > 1 && result.title.length > 1) {
        console.log('The dialog was closed');
        this.title = result.title;
        this.description = result.description;
        console.log(result);
        this.todoService.onEditInprogressTodo(
          {
            title: result.title,
            description: result.description,
          },
          i
        );
      }
    });
  }

  onEditDoneTask(i: number): void {
    this.title = '';
    this.description = '';
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { description: this.description, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.title.length > 1 && result.title.length > 1) {
        console.log('The dialog was closed');
        this.title = result.title;
        this.description = result.description;
        console.log(result);
        this.todoService.onEditDoneTodo(
          {
            title: result.title,
            description: result.description,
          },
          i
        );
      }
    });
  }
}
