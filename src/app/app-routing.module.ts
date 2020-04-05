import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent} from './planner/planner.component';
import { NotesComponent} from './notes/notes.component';
import { DesktopComponent } from './desktop/desktop.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { DocumentsComponent} from './documents/documents.component';


const routes: Routes = [
  { path: '', redirectTo: 'desktop', pathMatch: 'full' },
  { path: 'desktop', component: DesktopComponent },
  { path: 'planner', component: PlannerComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'notes', component: NotesComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
