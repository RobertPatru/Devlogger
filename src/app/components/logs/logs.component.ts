import { Component, OnInit } from '@angular/core';

import { Log } from 'src/app/models/Log';
import { LogService } from 'src/app/services/log.service';

@Component({
   selector: 'app-logs',
   templateUrl: './logs.component.html',
   styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
   logs: Log[];
   isSelected: boolean = false;


   constructor(private logService: LogService) {
      this.logs = [];
   }

   ngOnInit(): void {
      this.logService.getLogs().subscribe(logs => {
         this.logs = logs;
      });
   }

   onSelect(log: Log) {
      this.logService.setFormLog(log);
      this.isSelected = true;
      console.log(this.isSelected);
   }

   onDelete(log: Log) {
      if(confirm('Are you sure you want to delete this log?')) {
         this.logService.deleteLog(log);
      }
   }
}
