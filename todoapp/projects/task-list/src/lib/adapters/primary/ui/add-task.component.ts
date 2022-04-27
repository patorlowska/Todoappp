import { FormGroup, FormControl } from '@angular/forms';
import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Inject
} from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';

@Component({
    selector: 'lib-add-task',
    templateUrl: './add-task.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent {
    readonly addTask: FormGroup = new FormGroup({
        taskDescription: new FormControl()
    });

    constructor(
        @Inject(ADDS_TASK_DTO)
        private _addsTaskDto: AddsTaskDtoPort
    ) { }

    onAddTaskSubmited(addTask: FormGroup): void {
        if (addTask.invalid) {
            return;
        }
        this._addsTaskDto.add({
            taskDescription: addTask.get('taskDescription')?.value,
            done: false,
            created: Date.now(),
        });
        this.addTask.reset();
    }

    // Guzik bajer - add task po kliknieciu znika - DZIAŁA!! 
    onChangeClicked(): void {
        let buttonOfChange = document.getElementById('buttonOfChange');
        if (buttonOfChange != null) {
            buttonOfChange.style.display = 'block';

        }

        // let change = document.getElementById('changeToForm');
        // if (change != null) {
        //     change.style.display = 'none';
        // }

        // let buttonOfReturn = document.getElementById('buttonOfReturn ');
        // if (buttonOfReturn != null) {
        //     buttonOfReturn.style.display = 'block';

        // }

    }
}
