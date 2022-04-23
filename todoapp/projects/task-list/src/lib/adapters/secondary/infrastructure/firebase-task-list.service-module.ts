import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTaskListService } from './firebase-task-list.service';

import { ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseTaskListService, { provide: ADDS_TASK_DTO, useExisting: FirebaseTaskListService }],
	exports: []
})
export class FirebaseTaskListServiceModule {
}
