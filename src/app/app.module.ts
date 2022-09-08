import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LogService } from './services/log.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormLogComponent } from './components/form-log/form-log.component';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FormLogComponent,
      LogsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [LogService],
   bootstrap: [AppComponent]
})
export class AppModule { }
