import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenComponent } from './home/green/green.component';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'green', component: GreenComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
