import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EntertainmentPage} from './entertainment.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'places',
		pathMatch: 'full',
	},
	{
		path: '',
		component: EntertainmentPage,
		children: [
			{
				path: 'music',
				loadChildren: () => import('./music/music.module').then((m) => m.MusicPageModule),
			},
			{
				path: 'radio',
				loadChildren: () => import('./radio/radio.module').then((m) => m.RadioPageModule),
			},
			{
				path: 'library',
				loadChildren: () => import('./library/library.module').then((m) => m.LibraryPageModule),
			},
			{
				path: 'search',
				loadChildren: () => import('./search/search.module').then((m) => m.SearchPageModule),
			},
			{
				path: 'places',
				loadChildren: () => import('./places/places.module').then((m) => m.PlacesPageModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EntertainmentPageRoutingModule {}
