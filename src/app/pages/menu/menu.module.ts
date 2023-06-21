import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MenuPageRoutingModule} from './menu-routing.module';

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

@NgModule({
	imports: [
		CommonModule, //
		FormsModule,
		IonicModule,
		MenuPageRoutingModule,
		ReactiveFormsModule,
	],
	declarations: [
		MenuPage, //
		HomePage,
		ListsPage,
		ListDetailPage,
		CardsPage,
		CalendarsPage,
		VirtualScrollPage,
		InboxPage,
		OutboxPage,
		FavoritesPage,
		ArchivedPage,
		SpamPage,
		TrashPage,
	],
})
export class MenuPageModule {}
