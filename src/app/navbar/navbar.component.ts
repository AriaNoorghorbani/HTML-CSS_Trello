import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addNewCol() {
    this.todoService.createCol('aria' + Math.random());
  }
}
