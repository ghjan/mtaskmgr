import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule {
}
