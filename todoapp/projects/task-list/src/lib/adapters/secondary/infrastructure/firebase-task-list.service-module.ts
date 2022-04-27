import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTaskListService } from './firebase-task-list.service';
import { ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';
import { GETS_ALL_TASK_DTO } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO } from '../../../application/ports/secondary/removes-task.dto-port';
import { SETS_TASK_DTO } from '../../../application/ports/secondary/sets-task.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseTaskListService,
		{ provide: ADDS_TASK_DTO, useExisting: FirebaseTaskListService },
		{ provide: GETS_ALL_TASK_DTO, useExisting: FirebaseTaskListService },
		{ provide: REMOVES_TASK_DTO, useExisting: FirebaseTaskListService },
		{ provide: SETS_TASK_DTO, useExisting: FirebaseTaskListService }
	],
	exports: []
})
export class FirebaseTaskListServiceModule {
}
