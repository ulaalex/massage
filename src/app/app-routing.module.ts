import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'about', component: AboutComponent, },
  { path: '**', component: NotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
