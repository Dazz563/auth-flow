import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RecipesService} from 'src/app/services/recipes.service';

@Component({
	selector: 'app-lists',
	templateUrl: './lists.page.html',
	styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
	recipes: any[] = [];
	constructor(private recipeService: RecipesService) {}

	ngOnInit() {
		console.log('ngOnInit');
	}

	ionViewWillEnter() {
		this.recipes = this.recipeService.getAllRecipes();
		console.log('ionViewWillEnter');
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter');
	}

	ionViewWillLeave() {
		console.log('ionViewWillLeave');
	}

	ionViewDidLeave() {
		console.log('ionViewDidLeave');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy');
	}
}
