
import { NgModule } from '@angular/core';
// Import RouterModule & Routes type
import { RouterModule, Routes } from '@angular/router';

// Import all the components that we will be referencing in the route definitions
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard } from '../guards/auth.guard';

// Define the routes
export const indexRoute :Routes = [
    
            {
                path:'',
                component : LoginComponent,
            },
            {
                path:'login',
                component : LoginComponent,
                redirectTo : ''
            },
            {
                path : 'signup',
                component:SignupComponent
            },
            {
                path : 'forgot-password',
                component:ForgotpasswordComponent
            }
        
]
// In a feature module forChild() method must be used to register routes
// Export RouterModule, so the it's directives like RouterLink, RouterOutlet
// are available to the EmployeeModule that imports this module
@NgModule({
  imports: [ RouterModule.forChild(indexRoute) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule { }
