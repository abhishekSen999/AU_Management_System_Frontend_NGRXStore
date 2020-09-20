import { Injectable } from '@angular/core';

import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class LoginService {
  constructor(private authService: SocialAuthService) {}

  private signInWithGoogle(): Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  signIn(): Observable<SocialUser> {
    const signInPromise: Promise<SocialUser> = this.signInWithGoogle();
    const signIn$: Observable<SocialUser> = from(signInPromise);
    return signIn$;
  }
}
