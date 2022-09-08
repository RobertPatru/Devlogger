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

   constructor(private logService: LogService) { }

   ngOnInit(): void {
      this.logService.selectedLog.subscribe(log => {
         if (log.id !== '') {
            this.id = log.id;
            this.text = log.text;
            this.date = log.date;
         }
      });
   }

}
