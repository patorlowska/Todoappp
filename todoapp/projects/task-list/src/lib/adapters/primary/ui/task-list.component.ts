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

    taskDone: boolean = false;
    taskDelete: boolean = false;
    counter = 0;

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


// } if (this.counter  < 0){
//     this.counter.toString(10) 
//     console.log(x + 'nothing')


// if (
//     task.done === 0) {
//         'Nothing was done';}
// } else {
//     'Nothing was done';
// }




// this._setsTaskDto.set({ ...task, done: false });
// message = "1 Task completed!";
// let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
// let allertTrigger = document.getElementById('taskDone');
// type = 'alert';
// let wrapper = document.createElement('div')
// wrapper.innerHTML =
//     '<div class="alert alert-' + task.done + ' alert-dismissible" role="alert">'
// '<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">'
// ' <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>'
// ' </symbol>' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

// alertPlaceholder?.append(wrapper);
// console.log(alertPlaceholder)

// if (allertTrigger) {
//     allertTrigger.addEventListener('click', function () {
//         alert('1 Task is completed!');
//         console.log(allertTrigger);
//     })
// }


// alert(message: string, type: string): void {
//     message = "1 Task completed!";
//     let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
//     let allertTrigger = document.getElementById('taskDone');
//     type = "alert-success";
//     let wrapper = document.createElement('div')
//     wrapper.innerHTML =
//         '<div class="alert alert-' + type + ' alert-dismissible" role="alert">'
//     '<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">'
//     ' <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>'
//     ' </symbol>' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

//     alertPlaceholder?.append(wrapper);
//     console.log(alertPlaceholder)

//     if (allertTrigger) {
//         allertTrigger.addEventListener('click', function () {
//             alert('1 Task is completed!');
//             console.log(allertTrigger);
//         })
//     }

// }


// message: string = '';
// type: string = '';

// alert(message: string, type: string) {
//     let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
//     let allertTrigger = document.getElementById('taskDone');

//     let wrapper = document.createElement('div')
//     wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

//     alertPlaceholder?.append(wrapper);

//     if (allertTrigger) {
//         allertTrigger.addEventListener('click', function () {
//             alert('1 Task is completed!');
//             console.log(allertTrigger);
//         })
//     }
// }


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