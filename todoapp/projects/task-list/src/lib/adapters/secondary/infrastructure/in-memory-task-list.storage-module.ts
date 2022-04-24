import { NgModule } from '@angular/core';
import { InMemoryTaskListStorage } from './in-memory-task-list.storage';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryTaskListStorage],
  	exports: [] })
export class InMemoryTaskListStorageModule {
}
