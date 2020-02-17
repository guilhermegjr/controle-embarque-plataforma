import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFuncionariosPage } from './pages/home-funcionarios/home-funcionarios.page';

const routes: Routes = [
	{
		path: '',
		component: HomeFuncionariosPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FuncionariosRoutingModule {}
