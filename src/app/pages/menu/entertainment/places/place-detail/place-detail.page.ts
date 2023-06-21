import {Component, OnInit} from '@angular/core';
import {PlaceModalComponent} from '../place-modal/place-modal.component';
import {ModalController} from '@ionic/angular';

@Component({
	selector: 'app-place-detail',
	templateUrl: './place-detail.page.html',
	styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
	place: any;
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	async editPlace() {
		const modalEl = await this.modalCtrl.create({
			component: PlaceModalComponent,
			componentProps: {
				action: 'update',
				selectedPlace: {
					id: 1,
					name: 'The Great Wall of China',
					description: 'The Great Wall of China is a series of fortifications.',
					image: 'https://media.cnn.com/api/v1/images/stellar/prod/221215113811-03-china-great-wall-sections-mutianyu-jiankou.jpg?c=original',
				},
			},
		});
		await modalEl.present();

		let resultData = await modalEl.onDidDismiss();
		console.log(resultData.data, resultData.role);
	}
}
