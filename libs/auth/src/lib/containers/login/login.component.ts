import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Authenticate } from '../../../../../data-models/src';

@Component({
  selector: 'angular-nx-abm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  login(authenticate: Authenticate) {
    console.log(authenticate);
    this.authService.login(authenticate).subscribe();
  }
}
