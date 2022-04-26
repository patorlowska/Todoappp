import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { FirebaseTaskListServiceModule } from '../../../projects/task-list/src/lib/adapters/secondary/infrastructure/firebase-task-list.service-module';
import { AddTaskComponentModule } from '../../../projects/task-list/src/lib/adapters/primary/ui/add-task.component-module';
import { TaskListComponentModule } from '../../../projects/task-list/src/lib/adapters/primary/ui/task-list.component-module';
// import { REMOVES_TASK_DTO } from 'projects/task-list/src/lib/application/ports/secondary/removes-task.dto-port';

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
    TaskListComponentModule,
  ],
  declarations: [TaskListPage],
  providers: [
    // {
    //   provide: REMOVES_TASK_DTO,
    //   useValue: {},
    // } - chyba zbędne
  ],
  exports: []
})

export class TaskListPageModule {
}
