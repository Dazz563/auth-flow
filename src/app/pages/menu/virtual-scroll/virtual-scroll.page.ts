import {Component, OnInit} from '@angular/core';

import {InfiniteScrollCustomEvent} from '@ionic/angular';

@Component({
	selector: 'app-virtual-scroll',
	templateUrl: './virtual-scroll.page.html',
	styleUrls: ['./virtual-scroll.page.scss'],
})
export class VirtualScrollPage implements OnInit {
	items: any[] = [];
	constructor() {}

	ngOnInit() {
		this.generateItems();
	}

	private generateItems() {
		const count = this.items.length + 1;
		for (let i = 0; i < 50; i++) {
			this.items.push(`Item ${count + i}`);
		}
	}

	onIonInfinite(ev: any) {
		setTimeout(() => {
			this.generateItems();
			(ev as InfiniteScrollCustomEvent).target.complete();
		}, 5000);
	}
}
