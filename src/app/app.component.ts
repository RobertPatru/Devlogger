import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FormLogComponent } from './components/form-log/form-log.component';
import { LogsComponent } from './components/logs/logs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devlogger';
}
