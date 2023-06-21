import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PlacesPage} from './places.page';
import {PlaceDetailPage} from './place-detail/place-detail.page';

const routes: Routes = [
	{
		path: '',
		component: PlacesPage,
	},
	{
		path: ':id',
		component: PlaceDetailPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
