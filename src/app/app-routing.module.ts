import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent} from './planner/planner.component';
import { DesktopComponent } from './desktop/desktop.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { DocumentsComponent} from './documents/documents.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import {TodoListDto} from './todo/dto/todo-list-item.type';
import {StockmarketComponent} from './stockmarket/stockmarket.component';


const routes: Routes = [
  { path: '', redirectTo: 'desktop', pathMatch: 'full' },
  { path: 'desktop', component: DesktopComponent },
  { path: 'planner', component: PlannerComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'stock', component: StockmarketComponent },
  { path: 'detail', component: TodoDetailComponent, data: TodoListDto },
  { path: 'todo', component: TodoComponent,
    children: [
      { path: 'detail', component: TodoDetailComponent, data: TodoListDto }
    ]},
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
