import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {WelcomePage} from './welcome/welcome.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {LoginPage} from './login/login.page';
import {ForgotPasswordPage} from './forgot-password/forgot-password.page';
import {SignupPage} from './signup/signup.page';

@NgModule({
	declarations: [
		WelcomePage, //
		LoginPage,
		SignupPage,
		ForgotPasswordPage,
	],
	imports: [
		CommonModule, //
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		AuthRoutingModule,
	],
})
export class AuthModule {}
