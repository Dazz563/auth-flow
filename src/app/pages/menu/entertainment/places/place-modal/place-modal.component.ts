import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
	selector: 'app-place-modal',
	templateUrl: './place-modal.component.html',
	styleUrls: ['./place-modal.component.scss'],
})
export class PlaceModalComponent implements OnInit {
	@Input() action = '';
	@Input() selectedPlace!: any;

	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	onSubmit() {
		this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
	}

	onCancel() {
		this.modalCtrl.dismiss(null, 'cancel');
	}
}
