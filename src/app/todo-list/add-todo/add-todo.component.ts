import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTaskComponent implements OnInit {
  todoForm: FormGroup;
  editMode = false;
  @Input() listNameHero: any;

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(this.listNameHero);
  }

  onAddTask() {
    if (
      this.todoForm.value.title.length > 1 &&
      this.todoForm.value.description.length > 1
    ) {
      this.todoService.onAddTask(
        'doneTask',
        this.todoForm.value.title,
        this.todoForm.value.description,
        false
      );
      this.todoForm.reset();
    }
  }

  isEditMode() {
    this.todoService.isEditMode();
  }
}
