import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomePageComponent } from './home-page/home-page.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'checkout', component: CheckoutComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
