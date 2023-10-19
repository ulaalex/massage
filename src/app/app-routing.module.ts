import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: '**', component: NotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
