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
            taskDescription: addTask.get('taskDescription')?.value
        });
        this.addTask.reset();
    }
}
