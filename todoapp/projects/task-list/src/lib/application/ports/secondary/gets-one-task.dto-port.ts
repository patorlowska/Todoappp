import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from './task.dto';

export const GETS_ONE_TASK_DTO = new InjectionToken<GetsOneTaskDtoPort>('GETS_ONE_TASK_DTO');

export interface GetsOneTaskDtoPort {
  getOne(id: string): Observable<TaskDTO | undefined>;
}
