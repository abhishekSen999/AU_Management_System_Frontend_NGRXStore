import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StoreModule.forFeature('user', reducers),
  ],
  providers: [],
})
export class LoginModule {}
