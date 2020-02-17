import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeControleEmbarquePage } from './pages/home-controle-embarque/home-controle-embarque.page';

const routes: Routes = [
	{
		path: '',
		component: HomeControleEmbarquePage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ControleEmbarqueRoutingModule {}
