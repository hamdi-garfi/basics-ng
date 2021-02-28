import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwCheckComponent } from './module/login/components/pw-check/pw-check.component';
import { DefaultComponent } from './module/home/components/default/default.component';
import { LoginModule } from './module/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    PwCheckComponent,
    DefaultComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
