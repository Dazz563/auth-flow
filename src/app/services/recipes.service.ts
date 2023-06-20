import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RecipesService {
	private recipes = [
		{
			id: 1,
			title: 'Tomatoes',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg',
			ingredients: ['Tomatoes'],
		},
		{
			id: 2,
			title: 'Onions',
			imageUrl: 'https://www.southernliving.com/thmb/lz4xg7kerf1aCahRlp4WhLbYi5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1279120925-1-175489607f764e03be03927e5b90c11a.jpg',
			ingredients: ['Onions'],
		},
		{
			id: 3,
			title: 'Garlic',
			imageUrl: 'https://islandfresh.co.za/images/thumbs/0017198_garlic-fresh-500g_510.jpeg',
			ingredients: ['Garlic'],
		},
		{
			id: 4,
			title: 'Basil',
			imageUrl: 'https://islandfresh.co.za/images/thumbs/0003923_basil-100g_510.jpeg',
			ingredients: ['Basil'],
		},
		{
			id: 5,
			title: 'Oregano',
			imageUrl: 'https://www.driedfruitforafrica.co.za/wp-content/uploads/2018/07/OREGANO-rubbed.jpg',
			ingredients: ['Oregano'],
		},
		{
			id: 6,
			title: 'Parsley',
			imageUrl: 'https://islandfresh.co.za/images/thumbs/0003927_curly-parsley-100g_510.jpeg',
			ingredients: ['Parsley'],
		},
		{
			id: 7,
			title: 'Salt',
			imageUrl: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/02/TooMuchSodiuml-1051727580-770x533-1.jpg',
			ingredients: ['Salt'],
		},
		{
			id: 8,
			title: 'Pepper',
			imageUrl: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormickforchefs2017/our-difference/spice-story/2000/spice-story-black-pepper.jpg?rev=0103f6e819914d24aa469d3c988c16eb&vd=20210604T145011Z&hash=6C66A4F191FD855D35FFB24BAA60E701',
			ingredients: ['Pepper'],
		},
		{
			id: 9,
			title: 'Olive Oil',
			imageUrl: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321246/olive-oil-in-a-bottle-which-may-be-used-on-the-face.jpg',
			ingredients: ['Olive Oil'],
		},
		{
			id: 10,
			title: 'Vinegar',
			imageUrl: 'https://post.healthline.com/wp-content/uploads/2019/07/Vinegar_Cleaning_Gloves_1200x628-facebook.jpg',
			ingredients: ['Vinegar'],
		},
	];

	constructor() {}

	getAllRecipes() {
		return [...this.recipes];
	}

	getRecipe(recipeId: number) {
		return {
			...this.recipes.find((recipe) => {
				return recipe.id === recipeId;
			}),
		};
	}

	deleteRecipe(recipeId: number) {
		this.recipes = this.recipes.filter((recipe) => {
			return recipe.id !== recipeId;
		});
	}
}
