import { Component, OnInit } from '@angular/core';
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
export class ColumnsComponent implements OnInit {
  columns: IColumn[];

  constructor(private todoService: TodoService) {
    this.columns = [];
    this.todoService.columns$.subscribe((columns) => {
      this.columns = columns;
    });
  }

  ngOnInit(): void {}
}
