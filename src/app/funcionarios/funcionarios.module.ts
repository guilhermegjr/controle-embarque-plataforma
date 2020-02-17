import { NgModule } from '@angular/core';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { HomeFuncionariosPage } from './pages/home-funcionarios/home-funcionarios.page';
import { SharedModule } from '../shared/shared.module';
import { ContainerConteudoModule } from '../shared/components/container-conteudo/container-conteudo.module';
import { StoreModule } from '@ngrx/store';
import { funcionariosReducer } from './store/funcionarios.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FuncionariosEffects } from './store/funcionarios.effects';
import { FormFuncionarioComponent } from './components/form-funcionario/form-funcionario.component';
import { ItemListaFuncionarioComponent } from './components/item-lista-funcionario/item-lista-funcionario.component';
import { MensagemInformacaoModule } from '../shared/components/mensagem-informacao/mensagem-informacao.module';
import { FiltroFuncionarioPipe } from './pipes/filtro-funcionario.pipe';
import { ListaEmbarqueModule } from '../controle-embarque/components/lista-embarque/lista-embarque.module';

@NgModule({
	declarations: [
		HomeFuncionariosPage,
		FormFuncionarioComponent,
		ItemListaFuncionarioComponent,
		FiltroFuncionarioPipe,
	],
	imports: [
		SharedModule,
		ContainerConteudoModule,
		FuncionariosRoutingModule,
		MensagemInformacaoModule,
		ListaEmbarqueModule,
		StoreModule.forFeature('funcionarios', funcionariosReducer),
		EffectsModule.forFeature([FuncionariosEffects]),
	],
})
export class FuncionariosModule {}
