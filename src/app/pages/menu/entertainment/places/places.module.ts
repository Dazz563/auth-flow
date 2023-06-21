import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PlacesPageRoutingModule} from './places-routing.module';

import {PlacesPage} from './places.page';
import {PlaceDetailPage} from './place-detail/place-detail.page';
import {PlaceModalComponent} from './place-modal/place-modal.component';

@NgModule({
	imports: [
		CommonModule, //
		FormsModule,
		IonicModule,
		PlacesPageRoutingModule,
	],
	declarations: [
		PlacesPage, //
		PlaceDetailPage,
		PlaceModalComponent,
	],
})
export class PlacesPageModule {}
