import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import {HomeRoutingModule} from './home-routing.module'

@NgModule({
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
