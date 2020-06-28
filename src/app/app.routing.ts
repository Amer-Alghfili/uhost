import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PackagesComponent } from './components/packages/packages.component';
import { HomePageComponent } from './home-page/home-page.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'packages', component: PackagesComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
