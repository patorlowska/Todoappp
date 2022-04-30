import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Inject,
    Injectable
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';

@Component({
    selector: 'lib-task-list',
    templateUrl: './task-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable({ providedIn: 'root' })

export class TaskListComponent {

    taskToRemove: string = '';
    taskDone: boolean = false;
    taskDelete: boolean = false;
    counter = 0;

    tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll()
        .pipe(map((task: TaskDTO[]) =>
            task.sort((a, b) => a.created - b.created))
        );

    constructor(
        @Inject(GETS_ALL_TASK_DTO)
        private _getsAllTaskDto: GetsAllTaskDtoPort,
        @Inject(REMOVES_TASK_DTO)
        private _removesTaskDto: RemovesTaskDtoPort,
        @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort
    ) { }

    onDeleteTaskClicked(task: TaskDTO, taskId: string): void {
        this._removesTaskDto.remove(this.taskToRemove + task.id);
        this.taskToRemove = taskId;
    }

    onDoneTaskClicked(task: TaskDTO): void {
        if (task.done) {
            this._setsTaskDto.set({ ...task, done: false });
        } else {
            this._setsTaskDto.set({ ...task, done: true });
        }
    }

    onEditTaskClicked(task: TaskDTO): void {



    }

    showDoneAlert(): void {
        this.taskDone = true;
        this.taskDelete = false;
    }

    showDeleteAlert(): void {
        this.taskDone = false;
        this.taskDelete = true;
    }

    check(task: any): void {
        if (task.done === true) {
            this.counter -= 1;
            console.log()
        } else {
            this.counter += 1;
        }
    }
}