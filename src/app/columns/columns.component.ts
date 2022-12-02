import { Component, OnInit } from '@angular/core';
import { IColumn, TodoService } from '../todo.service';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
})
export class ColumnsComponent implements OnInit {
  columns: IColumn[];

  constructor(private todoService: TodoService) {
    this.columns = this.todoService.fetchTasks();
  }

  ngOnInit(): void {
    const getColumns = this.todoService.fetchTasks();
    // this.columns = getColumns
  }

  addNewCol() {
    this.todoService.createCol('aria' + Math.random());
  }
}
