import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {RecipesService} from 'src/app/services/recipes.service';

@Component({
	selector: 'app-list-detail',
	templateUrl: './list-detail.page.html',
	styleUrls: ['./list-detail.page.scss'],
})
export class ListDetailPage implements OnInit {
	loadedRecipe: any;
	constructor(
		private activatedRoute: ActivatedRoute, //
		private router: Router,
		private recipeService: RecipesService,
		private alertCtrl: AlertController
	) {}

	ngOnInit() {
		// Subscribe to the paramMap observable to get the current route parameters
		this.activatedRoute.paramMap.subscribe((paramMap) => {
			// Check if the 'id' parameter is present in the route parameters
			if (!paramMap.has('id')) {
				// If the 'id' parameter is not present, navigate to the ListsPage
				this.router.navigate(['/menu/lists']);
				return;
			}
			// Get the 'id' parameter from the route parameters and convert it to a number
			const recipeId = Number(paramMap.get('id'));
			// Get the recipe with the specified 'id' from the RecipeService
			this.loadedRecipe = this.recipeService.getRecipe(recipeId);
		});
	}

	async onDeleteRecipe() {
		const alert = await this.alertCtrl.create({
			header: 'Are you sure?',
			message: 'Do you really want to delete the recipe?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
				},
				{
					text: 'Delete',
					handler: async () => {
						this.recipeService.deleteRecipe(this.loadedRecipe.id);
						this.router.navigate(['/menu/lists']);
					},
				},
			],
		});
		await alert.present();
	}
}
