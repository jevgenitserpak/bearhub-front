import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DesktopComponent } from './desktop/desktop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PlannerComponent } from './planner/planner.component';
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
import { StockmarketComponent } from './stockmarket/stockmarket.component';
import { LoadingComponent } from './common/loading/loading.component';
import {MatTableModule} from '@angular/material/table';
import { StockProfileComponent } from './stockmarket/stock-profile/stock-profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { StockListComponent } from './stockmarket/stock-list/stock-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    MyNavComponent,
    PlannerComponent,
    NoPageFoundComponent,
    NewFileComponent,
    DocumentsComponent,
    TodoComponent,
    TodoDetailComponent,
    StockmarketComponent,
    LoadingComponent,
    StockProfileComponent,
    StockListComponent
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
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
