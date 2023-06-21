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
import {CalendarsPage} from './calendars/calendars.page';
import {CardsPage} from './cards/cards.page';
import {ListsPage} from './lists/lists.page';
import {ListDetailPage} from './lists/list-detail/list-detail.page';
import {VirtualScrollPage} from './virtual-scroll/virtual-scroll.page';

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
				path: 'lists',
				component: ListsPage,
				// children: [
				// 	{
				// 		path: 'list-detail/:id',
				// 		component: ListDetailPage,
				// 	},
				// ],
			},
			{
				path: 'lists/:id',
				component: ListDetailPage,
			},
			{
				path: 'cards',
				component: CardsPage,
			},
			{
				path: 'calendars',
				component: CalendarsPage,
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
			{
				path: 'entertainment',
				loadChildren: () => import('./entertainment/entertainment.module').then((m) => m.EntertainmentPageModule),
			},
			{
				path: 'virtual-scroll',
				component: VirtualScrollPage,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MenuPageRoutingModule {}
