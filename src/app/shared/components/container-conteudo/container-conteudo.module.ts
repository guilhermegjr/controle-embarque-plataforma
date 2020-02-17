import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ContainerConteudoComponent } from './container-conteudo.component';

@NgModule({
	declarations: [ContainerConteudoComponent],
	imports: [SharedModule],
	exports: [ContainerConteudoComponent],
})
export class ContainerConteudoModule {}
