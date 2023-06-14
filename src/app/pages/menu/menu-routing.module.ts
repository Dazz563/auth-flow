import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MenuPage} from './menu.page';
import {InboxPage} from './inbox/inbox.page';
import {OutboxPage} from './outbox/outbox.page';
import {ArchivedPage} from './archived/archived.page';
import {SpamPage} from './spam/spam.page';
import {FavoritesPage} from './favorites/favorites.page';
import {HomePage} from './home/home.page';
import {TrashPage} from './trash/trash.page';

const routes: Routes = [
	{
		path: '',
		component: MenuPage,
		children: [
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full',
			},
			{
				path: 'home',
				component: HomePage,
			},
			{
				path: 'inbox',
				component: InboxPage,
			},
			{
				path: 'outbox',
				component: OutboxPage,
			},
			{
				path: 'favorites',
				component: FavoritesPage,
			},
			{
				path: 'archived',
				component: ArchivedPage,
			},
			{
				path: 'trash',
				component: TrashPage,
			},
			{
				path: 'spam',
				component: SpamPage,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MenuPageRoutingModule {}
