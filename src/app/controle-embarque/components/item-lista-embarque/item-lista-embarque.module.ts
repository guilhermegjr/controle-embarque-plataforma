import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemListaEmbarqueComponent } from './item-lista-embarque.component';

@NgModule({
	imports: [SharedModule],
	declarations: [ItemListaEmbarqueComponent],
	exports: [ItemListaEmbarqueComponent],
})
export class ItemListaEmbarqueModule {}
