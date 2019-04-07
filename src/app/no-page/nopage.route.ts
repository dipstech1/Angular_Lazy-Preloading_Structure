import {Route} from '@angular/router';
import { NoPageComponent } from './no-page.component';

export const noPageRoute : Route[] = [
    {
        path:"**",
        component : NoPageComponent
    }
]