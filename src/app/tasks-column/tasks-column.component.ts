import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../model/task';
import { ColumnEditDialogComponent } from '../todo-list/column-edit-dialog/column-edit-dialog.component';
import { DeleteDialogComponent } from '../todo-list/task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from '../todo-list/task-edit-dialog/task-edit-dialog.component';
import { IColumn, TodoService } from '../todo.service';

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.scss'],
})
export class TasksColumnComponent {
  @Input()
  col!: IColumn;

  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  deleteTaskConfirm(taskId: number) {
    const colId = this.col.id;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.todoService.removeTaskOfcCol(colId, taskId);
        console.log(result);
      }
    });
  }

  onEditTask(i: number): void {
    debugger;
    const task = this.col.tasks[i];
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '250px',
      data: {
        colId: this.col.id,
        task: { ...task },
      },
    });

    dialogRef.afterClosed();
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (!result) return;

    //   if (result.title.length > 1 && result.description.length > 1) {
    //     console.log('The dialog was closed');
    //     console.log(result);
    //   }
    // });
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
    this.todoService.saveData();
  }

  onRemoveColumn(colId: IColumn) {
    this.todoService.removeColumn(colId);
  }

  onEditColumn(col: IColumn) {
    const columns = this.todoService.columns$.getValue();
    // console.log(columns);

    const column = columns.find((i) => i.id == col.id);
    // console.log(column?.id);

    const colIndex = columns.findIndex((i) => i.id == column?.id);
    // console.log(colIndex);

    const dialogRef = this.dialog.open(ColumnEditDialogComponent, {
      data: { colId: column?.id, colTitle: column?.title, colIdx: colIndex },
    });
    // console.log(columns);
    // console.log(column);
    // console.log(colIndex);
    dialogRef.afterClosed();

    // const column = this.col.id;
    // const colTitle = this.col.title;
    // const dialogRef = this.dialog.open(ColumnEditDialogComponent, {
    //   data: { column, colTitle: colTitle },
    // });
    // dialogRef.afterClosed();

    // this.todoService.editColumn(colId);
  }
}
