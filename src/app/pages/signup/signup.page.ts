import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	registerForm: FormGroup;

	constructor(private router: Router) {
		this.registerForm = new FormGroup({
			fullName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			mobile: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
		});
	}

	ngOnInit() {}

	onSubmit() {
		if (this.registerForm.valid) {
			this.router.navigate(['/home']);
		}
	}
}
