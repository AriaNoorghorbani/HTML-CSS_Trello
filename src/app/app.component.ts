import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewListComponent } from './todo-list/new-list-dialog/new-list-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todoList-angular';

  opened = false;

  constructor(private dialog: MatDialog) {}

  addNewCol() {
    this.dialog.open(NewListComponent, {
      width: '300px',
      data: {},
    });
  }
}
