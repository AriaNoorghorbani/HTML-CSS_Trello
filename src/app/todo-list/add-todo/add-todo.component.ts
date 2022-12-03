import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTaskComponent implements OnInit {
  todoForm: FormGroup;
  editMode = false;
  @Input() colId!: string;

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onAddTask() {
    debugger;
    this.todoService.addTaskToCol(this.colId, this.todoForm.value);
    console.log(this.colId, this.todoForm.value);

    // if (
    //   this.todoForm.value.title.length > 1 &&
    //   this.todoForm.value.description.length > 1
    // ) {
    //   this.todoService.onAddTask(
    //     this.listName,
    //     this.todoForm.value.title,
    //     this.todoForm.value.description,
    //     false
    //   );
    //   this.todoForm.reset();
    // }
  }

  isEditMode() {
    // this.todoService.isEditMode();
  }
}
