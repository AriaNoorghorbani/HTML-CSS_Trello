import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTaskComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      item: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onAddTask() {
    this.todoService.onAddTask(this.todoForm.value.item, false);
  }
}
