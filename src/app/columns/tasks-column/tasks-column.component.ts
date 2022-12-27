import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../../model/task';
import { ColumnEditDialogComponent } from '../column-edit-dialog/column-edit-dialog.component';
import { IColumn, TodoService } from '../../todo.service';
import { ColumnDeleteDialogComponent } from '../column-delete-dialog/column-delete-dialog.component';
import { TaskDeleteDialogComponent } from 'src/app/tasks/task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from 'src/app/tasks/task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.scss'],
})
export class TasksColumnComponent {
  @Input()
  col!: IColumn;
  changeText: boolean = false;

  constructor(private todoService: TodoService, public dialog: MatDialog) {}

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

  onDeleteTask(taskId: number) {
    const colId = this.col.id;
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
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
  }

  onDeleteColumn(colId: IColumn) {
    const dialogRef = this.dialog.open(ColumnDeleteDialogComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.todoService.removeColumn(colId);
      }
    });
  }

  onEditColumn(col: IColumn) {
    const columns = this.todoService.columns$.getValue();
    const column = columns.find((i) => i.id == col.id);
    const colIndex = columns.findIndex((i) => i.id == column?.id);

    const dialogRef = this.dialog.open(ColumnEditDialogComponent, {
      data: { colId: column?.id, colTitle: column?.title, colIdx: colIndex },
    });

    dialogRef.afterClosed();
  }
}
