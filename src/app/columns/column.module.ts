import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { ColumnDeleteDialogComponent } from './column-delete-dialog/column-delete-dialog.component';
import { ColumnEditDialogComponent } from './column-edit-dialog/column-edit-dialog.component';
import { TasksColumnComponent } from './tasks-column/tasks-column.component';
import { ColumnsComponent } from './columns/columns.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    ColumnsComponent,
    ColumnDeleteDialogComponent,
    ColumnEditDialogComponent,
    TasksColumnComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DragDropModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AppModule,
  ],
  exports: [ColumnsComponent],
})
export class ColumnModule {}
