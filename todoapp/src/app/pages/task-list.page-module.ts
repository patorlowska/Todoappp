import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { FirebaseTaskListServiceModule } from '../../../projects/task-list/src/lib/adapters/secondary/infrastructure/firebase-task-list.service-module';
import { AddTaskComponentModule } from '../../../projects/task-list/src/lib/adapters/primary/ui/add-task.component-module';
import { TaskListComponentModule } from '../../../projects/task-list/src/lib/adapters/primary/ui/task-list.component-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskListPage,
      }
    ]),
    AddTaskComponentModule,
    FirebaseTaskListServiceModule,
    TaskListComponentModule
  ],
  declarations: [TaskListPage],
  providers: [],
  exports: []
})
export class TaskListPageModule {
}
