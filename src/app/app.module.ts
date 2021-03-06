import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import {CoreModule} from './core/core.module'
import {HttpConfigInterceptor} from './core/interceptors/httpconfig.interceptor'

import {route} from './app.route'
//import { HomeModule } from './home/home.module';
//import { IndexModule } from './index/index.module';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';

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
    CoreModule.forRoot() ,
   // HomeModule,
   // IndexModule,

    RouterModule.forRoot(route, {preloadingStrategy:PreloadAllModules})
  ],
  providers: [ AuthGuard , {provide : HTTP_INTERCEPTORS, useClass : HttpConfigInterceptor,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
