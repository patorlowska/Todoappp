import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { AddTaskComponentModule } from '../../../projects/task-list/src/lib/adapters/primary/ui/add-task.component-module';
import { FirebaseTaskListServiceModule } from '../../../projects/task-list/src/lib/adapters/secondary/infrastructure/firebase-task-list.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  AddTaskComponentModule,
  FirebaseTaskListServiceModule,
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
