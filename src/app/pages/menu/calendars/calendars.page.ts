import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
	selector: 'app-calendars',
	templateUrl: './calendars.page.html',
	styleUrls: ['./calendars.page.scss'],
})
export class CalendarsPage implements OnInit {
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
