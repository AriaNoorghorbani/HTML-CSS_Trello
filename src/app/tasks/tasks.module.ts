import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTaskComponent } from '../main-task/main-task.component';
import { AddTaskComponent } from './add-todo/add-todo.component';
import { NewListComponent } from './new-list-dialog/new-list-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { TaskDeleteDialogComponent } from './task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from './task-edit-dialog/task-edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnsModule } from '../columns/column.module';

@NgModule({
  declarations: [
    TaskEditDialogComponent,
    TaskDeleteDialogComponent,
    AddTaskComponent,
    NewListComponent,
    MainTaskComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    ColumnsModule,
  ],
  exports: [AddTaskComponent],
})
export class TasksModule {}
