import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

import { Pinecity } from './pinecity';
import { Mora } from './mora';
import { Admin } from './admin';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pinecity', component: Pinecity },
  { path: 'mora', component: Mora },
  
  { path: 'admin', component: Admin },

  { path: '**', component: NoContentComponent },
];
