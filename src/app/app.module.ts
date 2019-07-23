import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './home/logo/logo.component';
import { HeaderComponent } from './home/header/header.component';
import { NavComponent } from './home/header/nav/nav.component';
import { CallToActionComponent } from './home/call-to-action/call-to-action.component';
import { FeatureComponent } from './home/feature/feature.component';
import { FooterComponent } from './home/footer/footer.component';
import { FooterListComponent } from './home/footer-list/footer-list.component';
import { SubscribeComponent } from './home/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoComponent,
    HeaderComponent,
    NavComponent,
    CallToActionComponent,
    FeatureComponent,
    FooterComponent,
    FooterListComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
