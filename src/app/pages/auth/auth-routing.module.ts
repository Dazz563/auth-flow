import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomePage} from './welcome/welcome.page';
import {LoginPage} from './login/login.page';
import {ForgotPasswordPage} from './forgot-password/forgot-password.page';
import {SignupPage} from './signup/signup.page';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				redirectTo: 'welcome',
				pathMatch: 'full',
			},
			{
				path: 'welcome',
				component: WelcomePage,
			},
			{
				path: 'login',
				component: LoginPage,
			},
			{
				path: 'signup',
				component: SignupPage,
			},
			{
				path: 'forgot-password',
				component: ForgotPasswordPage,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
