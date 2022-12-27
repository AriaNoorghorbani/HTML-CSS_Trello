import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTaskComponent } from './todo-list/add-todo/add-todo.component';
import { TaskEditDialogComponent } from './todo-list/task-edit-dialog/task-edit-dialog.component';
import { TaskDeleteDialogComponent } from './todo-list/task-delete-dialog/task-delete-dialog.component';
import { NewListComponent } from './todo-list/new-list-dialog/new-list-dialog.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { PagesModule } from './pages/pages.module';
import { ColumnModule } from './columns/column.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTaskComponent,
    TaskEditDialogComponent,
    TaskDeleteDialogComponent,
    NewListComponent,
    MainTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PagesModule,
    // ColumnModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [AddTaskComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
