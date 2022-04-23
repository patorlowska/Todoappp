import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { TaskListComponentModule } from '../../../projects/task-list/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTaskListServiceModule } from '../../../projects/task-list/src/lib/adapters/secondary/infrastructure/firebase-task-list.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TaskListPage,
        }
      ]),
  TaskListComponentModule,
  FirebaseTaskListServiceModule,
],
  	declarations: [TaskListPage],
  	providers: [],
  	exports: [] })
export class TaskListPageModule {
}
