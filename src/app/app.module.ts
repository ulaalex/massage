import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat.component';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { ChatDesktopComponent } from './chat-desktop.component';
import { ChatMobileComponent } from './chat-mobile.component';
import { ServiceArticlesComponent } from './service-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatDesktopComponent,
    ChatMobileComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,    
    ContactComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceArticlesComponent, 
  ],
  providers: [],
  bootstrap: [ChatComponent, AppComponent, ]
})
export class AppModule { }
