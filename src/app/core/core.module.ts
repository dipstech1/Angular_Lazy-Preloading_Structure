import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestService} from './services/test.service'
import {Test2Service} from './services/test2.service'

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: CoreModule, // name of this module
        providers: [ TestService, Test2Service ] // put there the service, that you want to provide globally
    };
}
}
