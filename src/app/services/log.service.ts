import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
   providedIn: 'root'
})

export class LogService {
   logs: Log[];

   private logSource = new BehaviorSubject<Log>({ id: '', text: '', date: null });
   selectedLog = this.logSource.asObservable();


   constructor() {
      this.logs = [
         {
            id: '1',
            text: 'This is the first log',
            date: new Date('06/09/2022 09:34').toLocaleDateString('ro-RO', { hour: '2-digit', minute: '2-digit' })
         },
         {
            id: '2',
            text: 'This is the second log',
            date: new Date('07.09.2022 08:12').toLocaleDateString('ro-RO', { hour: '2-digit', minute: '2-digit' })
         },
         {
            id: '3',
            text: 'This is the third log',
            date: new Date('07.09.2022 10:07').toLocaleDateString('ro-RO', { hour: '2-digit', minute: '2-digit' })
         }
      ]
   }

   getLogs(): Observable<Log[]> {
      return of(this.logs);
   }

   setFormLog(log: Log) {
      this.logSource.next(log);
   }

   addLog(log: Log) {
      this.logs.unshift(log);
   }

   updateLog(log: Log) {
      this.logs.forEach((currentLog, index) => {
         if (currentLog.id === log.id) {
            this.logs.splice(index, 1);
         }
      });

      this.logs.unshift(log);
   }

   deleteLog(log: Log) {
      this.logs.forEach((currentLog, index) => {
         if (currentLog.id === log.id) {
            this.logs.splice(index, 1);
         }
      });
   }
}

