import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/interface/task.model';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { colId: string; task: Task },
    public todoService: TodoService
  ) {}

  ngOnInit(): void {}

  onSave() {
    this.todoService.editTaskTocCol(this.data.colId, this.data.task);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
