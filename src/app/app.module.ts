import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddTaskComponent } from './todo-list/add-todo/add-todo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { TaskEditDialogComponent } from './todo-list/task-edit-dialog/task-edit-dialog.component';
import { TaskDeleteDialogComponent } from './todo-list/task-delete-dialog/task-delete-dialog.component';
import { TasksColumnComponent } from './tasks-column/tasks-column.component';
import { ColumnsComponent } from './columns/columns.component';
import { NewListComponent } from './todo-list/new-list-dialog/new-list-dialog.component';
import { ColumnEditDialogComponent } from './columns/column-edit-dialog/column-edit-dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ColumnDeleteDialogComponent } from './columns/column-delete-dialog/column-delete-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MainTaskComponent } from './main-task/main-task.component';
import { TopMenuComponent } from './landing-page/top-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { PricingComponent } from './landing-page/pricing/pricing.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTaskComponent,
    TaskEditDialogComponent,
    TaskDeleteDialogComponent,
    ColumnDeleteDialogComponent,
    TasksColumnComponent,
    ColumnsComponent,
    NewListComponent,
    ColumnEditDialogComponent,
    MainTaskComponent,
    TopMenuComponent,
    SignUpComponent,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    HttpClientModule,
    MatNativeDateModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
