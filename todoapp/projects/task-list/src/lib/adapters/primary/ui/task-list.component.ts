import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'lib-task-list',
    templateUrl: './task-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
    readonly task: FormGroup = new FormGroup({
        text: new FormControl()
    });
}
