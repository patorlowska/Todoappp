import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
// import { Observable } from 'rxjs';
import { GetsOneTaskDtoPort } from '../../../application/ports/secondary/gets-one-task.dto-port';

@Injectable()

// export class FirebaseTaskListService implements AddsTaskDtoPort, GetsOneTaskDtoPort 
// {

export class FirebaseTaskListService implements AddsTaskDtoPort, GetsOneTaskDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(task: Partial<TaskDTO>): void {
    this._client.collection('tasks').add(task);
  }

  // getOne(id: string): Observable<TaskDTO> {
  //   return this._client
  //     .doc<TaskDTO>('tasks/' + id)
  //     .valueChanges({ idField: 'id' });
  // }
}
