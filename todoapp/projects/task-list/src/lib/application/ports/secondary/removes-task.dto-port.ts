import { InjectionToken } from '@angular/core';
import { TaskDTO } from './task.dto';

export const REMOVES_TASK_DTO = new InjectionToken<RemovesTaskDtoPort>('REMOVES_TASK_DTO');

export interface RemovesTaskDtoPort {
  remove(id: string): void;
}
