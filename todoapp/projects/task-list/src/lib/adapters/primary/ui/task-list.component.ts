import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Inject,
    Injectable
} from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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
    tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll()
        .pipe(map((task: TaskDTO[]) =>
            task.sort((a, b) => a.created - b.created))
        );

    constructor(
        @Inject(GETS_ALL_TASK_DTO)
        private _getsAllTaskDto: GetsAllTaskDtoPort,
        @Inject(REMOVES_TASK_DTO)
        private _removesTaskDto: RemovesTaskDtoPort, @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort
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
}



// próba podejścia do alerta


    //     onAlertClick(): void {
    //         let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    // var alertTrigger = document.getElementById('liveAlertBtn')
    //     }
    // alert(message, type) {
    //     var wrapper = document.createElement('div')
    //     wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    //     alertPlaceholder.append(wrapper)
    // }

    // if (alertTrigger) {
    //     alertTrigger.addEventListener('click', function () {
    //         alert('Nice, you triggered this alert message!', 'success')
    //     })
    // }
    //     }


    //     onClickedAlert(message: string, type:string): void {
    //     let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    //     let alertTrigger = document.getElementById('liveAlertBtn');
    //     .alert(message + type) => {
    //         var wrapper = document.createElement('div')
    //         wrapper.innerHTML =
    //         '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>',

    //        alertPlaceholder.append(wrapper),

    //         if (alertTrigger) {
    //             alertTrigger.addEventListener('click', function () {
    //                 alert('Nice, you triggered this alert message!', 'success')
    //             })
    //             console.log(alertTrigger)
    //         }
    //     }
    // }




    //     map((task: TaskDTO[]) =>
    //         task.sort((a, b) => a.taskDescription.localeCompare(b.taskDescription))
    //     )

    // NIE DZIAŁA sortowanie !! --> błąd local compare ?
    // NIE działa sortowannie !! nawet w przypadku i nie wywala błędów - dziwne zjawisko

    //     map((task: TaskDTO[]) =>
    //         task.sort((a, b) => (a.taskSort)-(b.taskSort)
    //     )
    // );