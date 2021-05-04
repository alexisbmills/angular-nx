import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

export const authRoutes: Route[] = [{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [CommonModule, RouterModule, MatInputModule, MatButtonModule, MatCardModule, FlexLayoutModule, ReactiveFormsModule   ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
})
export class AuthModule {}
