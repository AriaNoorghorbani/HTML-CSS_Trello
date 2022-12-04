import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { IColumn, TodoService } from '../todo.service';

export interface DialogData {
  title: string;
  description: string;
}
export interface Confirm {
  yes: boolean;
  no: boolean;
}
@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
})
export class ColumnsComponent {
  columns: IColumn[];

  constructor(private todoService: TodoService) {
    this.columns = [];
    this.todoService.columns$.subscribe((columns) => {
      this.columns = columns;
    });
  }

  drop(event: CdkDragDrop<IColumn[]>) {
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
}
