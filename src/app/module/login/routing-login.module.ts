
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component'

const routes: Routes = [ 
  { path: 'login', component: InputComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoginRoutingModule { }