import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';

import { Store, State } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import * as fromUserStore from '../login/store';
import { UserState } from './store/reducers/user.reducer';
import * as fromServices from 'src/app/services';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  userLoggedIn$: Observable<Boolean>;

  constructor(
    private loginService: fromServices.LoginService,
    private router: Router,
    private store: Store<fromUserStore.UserStatusState>
  ) {}

  ngOnInit(): void {
    this.userLoggedIn$ = this.store.select(fromUserStore.getUserLoggedIn).pipe(
      map((userLoggedIn) => userLoggedIn),
      catchError((error) => {
        return of(error);
      })
    );
    this.userLoggedIn$.subscribe((loggedIn) => {
      if (loggedIn == true) this.router.navigate(['/home']);
      else this.router.navigate(['/login']);
    });
  }

  ngAfterViewInit(): void {}

  login() {
    this.store.dispatch(new fromUserStore.LoginUser());
  }
}
