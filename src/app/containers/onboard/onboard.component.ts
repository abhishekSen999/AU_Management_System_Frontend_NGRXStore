import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromUserStore from '../login/store';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../../services/shared/user.service';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss'],
  providers: [UserService],
})
export class OnboardComponent implements OnInit {
  private userLoggedIn$: Observable<Boolean>;

  constructor(
    private router: Router,
    private store: Store<fromUserStore.UserStatusState>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.checkLoggedInAndRedirect('/onboard');
  }

  home() {
    this.router.navigate(['/home']);
  }
}
