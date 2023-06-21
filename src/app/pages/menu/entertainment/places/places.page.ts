import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PlaceModalComponent} from './place-modal/place-modal.component';

@Component({
	selector: 'app-places',
	templateUrl: './places.page.html',
	styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
	places = [
		{
			id: 1,
			name: 'The Great Wall of China',
			description: 'The Great Wall of China is a series of fortifications.',
			image: 'https://media.cnn.com/api/v1/images/stellar/prod/221215113811-03-china-great-wall-sections-mutianyu-jiankou.jpg?c=original',
		},
		{
			id: 2,
			name: 'The Colosseum in Rome',
			description: 'The Colosseum in Rome is a vast amphitheatre.',
			image: 'https://www.planetware.com/photos-large/I/italy-rome-colosseum.jpg',
		},
		{
			id: 3,
			name: 'The Taj Mahal in India',
			description: 'The Taj Mahal in India is a white marble mausoleum.',
			image: 'https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_4x3.jpg',
		},
	];

	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	async addNewPlace() {
		const modalEl = await this.modalCtrl.create({
			component: PlaceModalComponent,
			componentProps: {
				action: 'create',
			},
		});
		await modalEl.present();

		let resultData = await modalEl.onDidDismiss();
		console.log(resultData.data, resultData.role);
	}

	onEdit() {
		console.log('onEdit');
	}
	onDelete() {
		console.log('onDelete');
	}
}
