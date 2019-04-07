import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import {IndexRoutingModule} from './index-routing.module'

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotpasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
