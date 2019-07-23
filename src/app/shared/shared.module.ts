import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmailComponent,
    PasswordComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EmailComponent,
    PasswordComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
