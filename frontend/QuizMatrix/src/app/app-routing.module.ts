import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllDomainsComponent } from './all-domains/all-domains.component';
import { DomainPageComponent } from './domain-page/domain-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'domains',
    component: AllDomainsComponent,
  },
  { path: 'domain-page/:domain', component: DomainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
