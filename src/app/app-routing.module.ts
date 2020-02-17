import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaAutenticacaoGuard } from './seguranca/guards/valida-autenticacao.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'funcionarios',
		pathMatch: 'full',
	},
	{
		path: 'funcionarios',
		canActivate: [ValidaAutenticacaoGuard],
		loadChildren: () =>
			import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
	},
	{
		path: 'controle-embarque',
		canActivate: [ValidaAutenticacaoGuard],
		loadChildren: () =>
			import('./controle-embarque/controle-embarque.module').then(
				m => m.ControleEmbarqueModule
			),
	},
	{
		path: 'seguranca',
		loadChildren: () => import('./seguranca/seguranca.module').then(m => m.SegurancaModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
