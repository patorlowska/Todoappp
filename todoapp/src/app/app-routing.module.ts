import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { TaskListPageModule } from './pages/task-list.page-module';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => HomePageModule
},
{
  path: 'task-list',
  loadChildren: () => TaskListPageModule
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
