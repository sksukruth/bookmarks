import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from '../app/grid/grid.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path:'grid', component : GridComponent},
  {path:'table', component : TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
