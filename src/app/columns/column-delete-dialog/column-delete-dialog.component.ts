import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Confirm } from 'src/app/columns/columns.component';

@Component({
  selector: 'app-column-delete-dialog',
  templateUrl: './column-delete-dialog.component.html',
  styleUrls: ['./column-delete-dialog.component.scss'],
})
export class ColumnDeleteDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ColumnDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Confirm
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }
}
