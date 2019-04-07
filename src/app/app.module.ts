import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';

import {route} from './app.route'
//import { HomeModule } from './home/home.module';
//import { IndexModule } from './index/index.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // HomeModule,
   // IndexModule,

    RouterModule.forRoot(route, {preloadingStrategy:PreloadAllModules})
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
