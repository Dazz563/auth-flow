import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'auth/welcome',
		pathMatch: 'full',
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
	},
	{
		path: 'menu',
		loadChildren: () => import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
