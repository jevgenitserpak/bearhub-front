import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DesktopComponent } from './desktop/desktop.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PlannerComponent } from './planner/planner.component';
import { NotesComponent } from './notes/notes.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { NewFileComponent } from './new-file/new-file.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DocumentsComponent } from './documents/documents.component';
import { TodoComponent } from './todo/todo.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    MyNavComponent,
    PlannerComponent,
    NotesComponent,
    NoPageFoundComponent,
    NewFileComponent,
    DocumentsComponent,
    TodoComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
