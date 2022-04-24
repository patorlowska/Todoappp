// import { DatePipe, formatDate } from '@angular/common';
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
// import { registerLocaleData } from '@angular/common';
// import localeES from "@angular/common/locales/es";
// registerLocaleData(localeES, "es");



// this.todoForm.controls.todoDate.setValue(formatDate(this.todo.targetDate, 'yyyy-MM-dd', 'en-US'));


@Component({
    selector: 'lib-task-list',
    templateUrl: './task-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
    // today: Date = new Date();
    // pipe = new DatePipe('en-US');
    // todayWithPipe = 'null';
    // ngOnInit(): void {
    //     this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
    // }

    // format = 'EEE, d, MMM';
    // myDate = '2019-06-29';
    // locale = 'en-US';
    // formattedDate = formatDate(this.myDate, this.format, this.locale);

    today: number = Date.now();

}
