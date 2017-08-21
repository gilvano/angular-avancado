import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormModule } from './signup-form.module';
import { SignupFormComponent } from './signup-form.component';

const routes: Routes = [ {path: '', component: SignupFormComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupFormRoutingModule { }
