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
		CardsPage,
		CalendarsPage,
		InboxPage,
		OutboxPage,
		FavoritesPage,
		ArchivedPage,
		SpamPage,
		TrashPage,
	],
})
export class MenuPageModule {}
