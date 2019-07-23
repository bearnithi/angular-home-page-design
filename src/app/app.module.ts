import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './home/header/logo/logo.component';
import { HeaderComponent } from './home/header/header.component';
import { NavComponent } from './home/header/nav/nav.component';
import { CallToActionComponent } from './home/call-to-action/call-to-action.component';
import { FeatureComponent } from './home/feature/feature.component';
import { FooterComponent } from './home/footer/footer.component';
import { FooterListComponent } from './home/footer-list/footer-list.component';
import { SubscribeComponent } from './home/subscribe/subscribe.component';
import { InfoBoxComponent } from './home/info-box/info-box.component';
import { EmailComponent } from './login/email/email.component';
import { PasswordComponent } from './login/password/password.component';
import { ButtonComponent } from './login/button/button.component';

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
    SubscribeComponent,
    InfoBoxComponent,
    EmailComponent,
    PasswordComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
