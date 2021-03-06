import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: 'app/signup-form/signup-form.module#SignupFormModule'
      }
    ])
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {

}
