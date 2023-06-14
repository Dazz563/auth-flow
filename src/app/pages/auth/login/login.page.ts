import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	loginForm: FormGroup;

	constructor(private router: Router) {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
		});
	}

	ngOnInit() {}

	onSubmit() {
		// if (this.loginForm.valid) {
		// 	this.router.navigate(['/home']);
		// }
		this.router.navigate(['/menu']);
	}
}
