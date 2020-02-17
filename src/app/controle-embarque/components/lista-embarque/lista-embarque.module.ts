import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaEmbarqueComponent } from './lista-embarque.component';
import { ItemListaEmbarqueModule } from '../item-lista-embarque/item-lista-embarque.module';
import { ContainerConteudoModule } from 'src/app/shared/components/container-conteudo/container-conteudo.module';
import { MensagemInformacaoModule } from 'src/app/shared/components/mensagem-informacao/mensagem-informacao.module';

@NgModule({
	imports: [
		SharedModule,
		ItemListaEmbarqueModule,
		ContainerConteudoModule,
		MensagemInformacaoModule,
	],
	declarations: [ListaEmbarqueComponent],
	exports: [ListaEmbarqueComponent],
})
export class ListaEmbarqueModule {}
