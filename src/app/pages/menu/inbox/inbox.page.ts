import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {IonDatetime} from '@ionic/angular';

@Component({
	selector: 'app-inbox',
	templateUrl: './inbox.page.html',
	styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
	selectedDates = [];
	form: FormGroup;
	constructor() {
		this.form = new FormGroup({
			username: new FormControl('', Validators.required),
			date: new FormControl('', Validators.required),
		});
	}

	ngOnInit() {}

	onSelectDate(date: any) {
		// console.log('Your motherfucking time: ', date.detail.value);
		this.form.patchValue({
			date: date.detail.value,
		});

		console.log('here is your form', this.form.value);
	}

	showSelectedDates(e: any) {
		console.log(e.detail.value);
		this.selectedDates = e.detail.value;
	}
}
