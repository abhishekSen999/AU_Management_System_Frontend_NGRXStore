import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromUserStore from '../login/store';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/shared/user.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private userLoggedIn$: Observable<Boolean>;

  constructor(
    private router: Router,
    private store: Store<fromUserStore.UserStatusState>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.checkLoggedInAndRedirect('/home');
  }

  onboard() {
    this.router.navigate(['/onboard']);
  }
}
