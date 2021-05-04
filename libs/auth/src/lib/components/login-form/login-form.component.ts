import { Component, EventEmitter, Output } from '@angular/core';

import { Authenticate } from '../../../../../data-models/src';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'angular-nx-abm-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent  {

  @Output() loginSubmit = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login() {
    this.loginSubmit.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as Authenticate);
  }
}
