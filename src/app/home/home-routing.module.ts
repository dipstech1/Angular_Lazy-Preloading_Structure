
import { NgModule } from '@angular/core';
// Import RouterModule & Routes type
import { RouterModule, Routes } from '@angular/router';

// Import all the components that we will be referencing in the route definitions
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from '../guards/auth.guard';

// Define the routes
export const homeRoute :Routes = [
    
            {
                path:'',
                component : DashboardComponent
            },
            {
                path : 'settings',
                component:SettingsComponent
            },
            {
                path : 'products',
                component: ProductsComponent
            }
        
]
// In a feature module forChild() method must be used to register routes
// Export RouterModule, so the it's directives like RouterLink, RouterOutlet
// are available to the EmployeeModule that imports this module
@NgModule({
  imports: [ RouterModule.forChild(homeRoute) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
