import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from './model/task';

export type IColumn = {
  id: string;
  title: string;
  tasks: Task[];
};

const LS_KEY = 'columns';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  columns$ = new BehaviorSubject<IColumn[]>([]);

  constructor() {
    try {
      const rawColumnFromStorage = localStorage.getItem(LS_KEY);
      if (rawColumnFromStorage) {
        const columns = JSON.parse(rawColumnFromStorage);
        this.columns$.next(columns);
      }
    } catch (error) {}

    this.columns$.subscribe((data) => {
      this.updateLocalStorage();
    });
  }

  saveData() {
    this.updateLocalStorage();
  }

  createCol(title: string) {
    const columns: IColumn[] = this.columns$.getValue();
    columns.push({
      id: Math.random().toString(),
      title,
      tasks: [],
    });

    this.columns$.next(columns);
  }

  private updateLocalStorage() {
    const columns: IColumn[] = this.columns$.getValue();
    localStorage.setItem(LS_KEY, JSON.stringify(columns));
  }

  editCol(id: string, title: string) {
    // const columns: IColumn[] = this.columns$.getValue();
    // const col = this.columns$.find((i) => i.id == id);
    // if (!col) throw Error('can not find the specified column');
    // col.title = title;
    // return col;
  }
  removeCol(id: string) {
    // const idx = this.columns$.findIndex((i) => i.id == id);
    // this.columns$.splice(idx, 1);
  }
  addTaskToCol(colId: string, task: Task) {
    const columns: IColumn[] = this.columns$.getValue();

    const col = columns.find((i) => i.id == colId);

    if (!col) throw Error('can not find the specified column');
    col.tasks.push({
      ...task,
      id: Math.random().toString(),
    });

    this.columns$.next(columns);
  }

  editTaskTocCol(columnId: string, task: Task) {
    debugger;
    const columns: IColumn[] = this.columns$.getValue();
    const column = columns.find((i) => i.id == columnId);
    if (!column) return;

    const taskIdx = column.tasks.findIndex((i) => i.id == task.id);
    column.tasks[taskIdx] = task;

    this.columns$.next(columns);
  }

  removeColumn(columnsId: IColumn) {
    const columns: IColumn[] = this.columns$.getValue();
    console.log(columns);

    const column = columns.findIndex((i) => i.id == columnsId.id);
    console.log(column);

    columns.splice(column, 1);
    this.columns$.next(columns);
  }

  removeTaskOfcCol(columnId: string, taskId: number) {
    const columns: IColumn[] = this.columns$.getValue();
    const column = columns.find((i) => i.id == columnId);
    if (!column) return;

    // const taskIdx = column.tasks.findIndex((i) => i.id === taskId);
    column.tasks.splice(taskId, 1);
    this.columns$.next(columns);
  }
}
