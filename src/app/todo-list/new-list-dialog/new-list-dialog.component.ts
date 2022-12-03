import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/interface/task.model';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-new-list-dialog',
  templateUrl: './new-list-dialog.component.html',
  styleUrls: ['./new-list-dialog.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    public todoService: TodoService
  ) {}

  ngOnInit(): void {}

  onSave() {
    this.todoService.createCol(this.data.name);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
