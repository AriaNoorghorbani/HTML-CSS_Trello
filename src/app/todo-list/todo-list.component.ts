import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ITask } from '../model/task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  editMode = false;

  taskList: ITask[] = [];
  taskInProgress: ITask[] = [];
  taskDone: ITask[] = [];

  ngOnInit(): void {
    this.todoService.getTask();
    this.taskList = this.todoService.tasks;
    this.taskInProgress = this.todoService.taskInProgress;
    this.taskDone = this.todoService.taskDone;
  }

  drop(event: CdkDragDrop<ITask[]>) {
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

  onDelete(i: number) {
    this.todoService.onDeleteTodo(i);
  }

  onDeleteInprogress(i: number) {
    this.todoService.onDeleteInProgressTodo(i);
  }

  onEdit(item: ITask, i: number) {
    this.dialog.open(EditDialogComponent);
    debugger;
    this.editMode = true;
    this.todoService.onEditTodo(item, i);
  }

  openDialog() {
    this.dialog.open(EditDialogComponent);
  }
}
