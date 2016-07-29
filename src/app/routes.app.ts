/**
 * Created by PQuandt on 7/18/2016.
 */

import { provideRouter, RouterConfig } from '@angular/router';
import {CarComponent} from "./cars/car.component";

export const routes: RouterConfig = [
    { path: '', component: CarComponent },
    { path: 'Cars', component: CarComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];