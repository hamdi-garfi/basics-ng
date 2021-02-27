import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './module/login/components/input/input.component';
import { PwCheckComponent } from './module/login/components/pw-check/pw-check.component';
import { DefaultComponent } from './module/home/components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PwCheckComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
