import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingComponent } from './landing-page/pricing/pricing.component';
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { MainTaskComponent } from './main-task/main-task.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
  },
  {
    path: 'main-task',
    component: MainTaskComponent,
  },
  { path: 'pricing', component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
