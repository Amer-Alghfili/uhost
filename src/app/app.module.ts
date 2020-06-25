import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './components/plan/plan.component';
import { PlansComponent } from './components/plans/plans.component';
import { FeaturesComponent } from './components/features/features.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { routing } from './app.routing';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    PlansComponent,
    FeaturesComponent,
    CheckoutComponent,
    HomePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
