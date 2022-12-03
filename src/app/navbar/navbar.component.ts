import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewListComponent } from '../todo-list/new-list-dialog/new-list-dialog.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  addNewCol() {
    this.dialog.open(NewListComponent, {
      width: '300px',
      data: {},
    });
  }
}
