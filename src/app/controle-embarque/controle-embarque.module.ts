import { NgModule } from '@angular/core';
import { ControleEmbarqueRoutingModule } from './controle-embarque-routing.module';
import { HomeControleEmbarquePage } from './pages/home-controle-embarque/home-controle-embarque.page';
import { SharedModule } from '../shared/shared.module';
import { ListaEmbarqueModule } from './components/lista-embarque/lista-embarque.module';
import { FormEmbarqueModule } from './components/form-embarque/form-embarque.module';
import { StoreModule } from '@ngrx/store';
import { embarquesReducer } from './store/controle-embarque.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ControleEmbarqueEffects } from './store/controle-embarque.effects';
import { ContainerConteudoModule } from '../shared/components/container-conteudo/container-conteudo.module';

@NgModule({
	declarations: [HomeControleEmbarquePage],
	imports: [
		SharedModule,
		ControleEmbarqueRoutingModule,
		ListaEmbarqueModule,
		FormEmbarqueModule,
		ContainerConteudoModule,
		StoreModule.forFeature('embarques', embarquesReducer),
		EffectsModule.forFeature([ControleEmbarqueEffects]),
	],
})
export class ControleEmbarqueModule {}
