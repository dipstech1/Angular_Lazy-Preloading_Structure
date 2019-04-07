import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {SharedModule} from './../shared/shared.module'
import {IndexRoutingModule} from './index-routing.module'

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotpasswordComponent],
  imports: [
    IndexRoutingModule,
    SharedModule
  ]
})
export class IndexModule { }
