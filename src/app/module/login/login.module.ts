
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { LoginRoutingModule } from './routing-login.module';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    InputComponent
  ]
})
export class LoginModule { }