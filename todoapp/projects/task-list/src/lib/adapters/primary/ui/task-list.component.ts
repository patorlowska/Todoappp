import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';

@Component({
    selector: 'lib-task-list',
    templateUrl: './task-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
    readonly addTask: FormGroup = new FormGroup({
        taskDescription: new FormControl()
    });

    constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {
    }

    onAddTaskSubmited(taskList: FormGroup): void {
        if (taskList.invalid) {
            return;
        }
        this._addsTaskDto.add({
            taskDescription: taskList.get('taskDescription')?.value
        });
        this.addTask.reset();
    }
}
