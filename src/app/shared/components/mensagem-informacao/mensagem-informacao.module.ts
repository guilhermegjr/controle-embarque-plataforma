import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MensagemInformacaoComponent } from './mensagem-informacao.component';

@NgModule({
	imports: [SharedModule],
	declarations: [MensagemInformacaoComponent],
	exports: [MensagemInformacaoComponent],
})
export class MensagemInformacaoModule {}
