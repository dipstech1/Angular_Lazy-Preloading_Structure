import { Routes } from "@angular/router";
import { homeRoute } from "./home/home.route";
import { indexRoute } from "./index/index.route";
import { noPageRoute } from "./no-page/nopage.route";
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

export const route: Routes = [
  {
    path: "emp",
    component:HomeComponent,
    canActivate:[AuthGuard],
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "",
    component:IndexComponent,
    canActivate:[LoginGuard],
    loadChildren: "./index/index.module#IndexModule"
  }, 
  ...noPageRoute
];
