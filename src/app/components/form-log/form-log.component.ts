import { Component, OnInit } from '@angular/core';

import { LogService } from 'src/app/services/log.service';
import { Log } from 'src/app/models/Log';

@Component({
   selector: 'app-form-log',
   templateUrl: './form-log.component.html',
   styleUrls: ['./form-log.component.css']
})
export class FormLogComponent implements OnInit {
   id: string = '';
   text: string = '';
   date: any = null;

   isNew: boolean = true;

   constructor(private logService: LogService) { }

   ngOnInit(): void {
      this.logService.selectedLog.subscribe(log => {
         if (log.id !== '') {
            this.isNew = false;
            this.id = log.id;
            this.text = log.text;
            this.date = log.date;
         }
      });
   }

   onSubmit() {
      if (this.isNew) {
         const newLog = {
            id: this.generateId(),
            text: this.text,
            date: new Date().toLocaleDateString('ro-RO', { hour: '2-digit', minute: '2-digit' }),
         }

         this.logService.addLog(newLog);
      } else {
         const updLog = {
            id: this.id,
            text: this.text,
            date: new Date().toLocaleDateString('ro-RO', { hour: '2-digit', minute: '2-digit' }),
         }

         this.logService.updateLog(updLog);
      }
   }

   generateId() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
         return v.toString(16);
      });
   }

}
