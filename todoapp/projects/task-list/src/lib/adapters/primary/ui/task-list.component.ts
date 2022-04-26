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



@Component({
    selector: 'lib-task-list',
    templateUrl: './task-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

// @Injectable(
//     {
//         providedIn: 'root'
//     }
// ) -- chyba zbędne

export class TaskListComponent {

    today: number = Date.now();
    taskToRemove: string = '';

    tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll()
    // .pipe(
    //     map((task: TaskDTO[]) =>
    //         task.sort((a, b) => a.taskDescription.localeCompare(b.taskDescription))
    //     )

    // NIE DZIAŁA sortowanie !! --> błąd local compare ?
    // );

    constructor(
        @Inject(GETS_ALL_TASK_DTO)
        private _getsAllTaskDto: GetsAllTaskDtoPort,
        @Inject(REMOVES_TASK_DTO)
        private _removesTaskDto: RemovesTaskDtoPort) { }


    // Nie działa delete nie łapie żadnej funckji brak wyrzucanego błedu ??
    onDeleteTaskClicked(): void {
        this._removesTaskDto.remove(this.taskToRemove);
    }

    takeIdTaskToDelete(task: TaskDTO): void {
        this.taskToRemove = task.id;
    }

    // Guzik bajer - add task po kliknieciu znika - DZIAŁA!! 
    onChangeClicked(): void {
        let buttonOfChange = document.getElementById('buttonOfChange');
        if (buttonOfChange != null) {
            buttonOfChange.style.display = 'block';
        }

        let change = document.getElementById('changeToForm');
        if (change != null) {
            change.style.display = 'none';
        }
    }
}
