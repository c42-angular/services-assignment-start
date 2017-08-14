import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterInjectedService } from 'app/shared/counter-injected.service';
import { UserService } from "app/shared/user.service";
import { CounterListenerService } from "app/shared/counter-listener.service";

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CounterInjectedService, UserService, CounterListenerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
