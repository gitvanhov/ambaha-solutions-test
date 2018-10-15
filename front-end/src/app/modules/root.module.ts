import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { CountryListComponent } from '../components/country/country-list/country-list.component';
import { RootComponent } from '../components/root/root.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/countries', 
    pathMatch: 'full' 
  },
  { 
    path: 'countries', 
    component: CountryListComponent 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  declarations: [
    RootComponent,
    CountryListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
