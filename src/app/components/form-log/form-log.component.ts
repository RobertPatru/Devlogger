import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.css']
})
export class FormLogComponent implements OnInit {
   text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
