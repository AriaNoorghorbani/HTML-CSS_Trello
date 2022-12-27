import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewListComponent } from '../tasks/new-list-dialog/new-list-dialog.component';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent {
  opened = false;

  constructor(private dialog: MatDialog) {}

  addNewCol() {
    this.dialog.open(NewListComponent, {
      width: '300px',
      data: {},
    });
  }
}
