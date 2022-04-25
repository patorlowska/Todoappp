import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';

// import { Observable } from 'rxjs';
// import { TaskDTO } from '../../../application/ports/secondary/task.dto';
// import { GETS_ONE_TASK_DTO, GetsOneTaskDtoPort } from '../../../application/ports/secondary/gets-one-task.dto-port';
// import { switchMap } from 'rxjs/operators';


@Component({
    selector: 'lib-task-list',
    templateUrl: './task-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {

    today: number = Date.now();

    tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

    constructor(@Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort) {
    }






    // task$: Observable<TaskDTO> = this._getsOneTaskDto
    //     .getOne()
    //     .pipe(switchMap(data =>
    //         this._getsOneTaskDto.getOne(data.description)));
    // constructor(@Inject(GETS_ONE_TASK_DTO) private _getsOneTaskDto: GetsOneTaskDtoPort) {
    // }
}
