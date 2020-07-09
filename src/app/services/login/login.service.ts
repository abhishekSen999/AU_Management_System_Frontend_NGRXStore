import { Injectable } from '@angular/core';
import { LoginModule } from '../../containers/login/login.module';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: LoginModule,
})
export class LoginService {
  constructor(private http: HttpClient) {}
}
