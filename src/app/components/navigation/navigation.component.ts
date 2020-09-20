import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as fromServices from '../../services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: fromServices.LoginService
  ) {}

  ngOnInit(): void {}

  home() {
    this.router.navigate(['/manager']);
  }
  onboard() {
    this.router.navigate(['/onboard']);
  }
  log() {
    this.router.navigate(['/log']);
  }

  analytics() {
    this.router.navigate(['/analytics']);
  }

  signOut(): void {
    this.loginService.signOut();
  }
}
