import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../model/task';
import { DeleteDialogComponent } from '../todo-list/task-delete-dialog/task-delete-dialog.component';
import { EditDialogComponent } from '../todo-list/task-edit-dialog/task-edit-dialog.component';
import { IColumn, TodoService } from '../todo.service';

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.scss'],
})
export class TasksColumnComponent implements OnInit {
  @Input()
  col!: IColumn;

  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  deleteTodoTaskConfirm(i: number) {
    const task = this.col.tasks[i];
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.todoService.onDeleteTodo(i);
      }
    });
  }

  onEditTask(i: number): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: this.col.tasks[i],
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      if (result.title.length > 1 && result.description.length > 1) {
        console.log('The dialog was closed');
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
}
