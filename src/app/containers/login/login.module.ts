import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { LoginService } from 'src/app/services/login/login.service';
import {
  SocialLoginModule,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from 'angularx-social-login';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatIconModule,
    SocialLoginModule,
    StoreModule.forFeature('userStatus', reducers),
    EffectsModule.forFeature(effects),
  ],

  providers: [
    LoginService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '189837427266-8b7tiralsltoh07l2ep4fg1hnlo2narf.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
})
export class LoginModule {}
