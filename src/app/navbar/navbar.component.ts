import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewListComponent } from '../tasks/new-list-dialog/new-list-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addNewCol() {
    this.dialog.open(NewListComponent, {
      width: '300px',
      data: {},
    });
  }
}
