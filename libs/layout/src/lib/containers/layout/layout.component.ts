import { Component, OnInit } from '@angular/core';
import { AuthService } from '@angular-nx-abm/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-nx-abm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(public authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
