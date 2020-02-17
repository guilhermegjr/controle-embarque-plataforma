import { Component, OnInit, Input } from '@angular/core';
import { Embarque } from '../../models/embarque.model';
import { Store } from '@ngrx/store';
import { EmbarqueState } from '../../store/controle-embarque.reducer';
import { showConfirmMessage } from 'src/app/shared/store/mensagens/mensagens.action';
import * as EmbarqueActions from '../../store/controle-embarque.actions';

@Component({
	selector: 'item-lista-embarque',
	templateUrl: './item-lista-embarque.component.html',
	styleUrls: ['./item-lista-embarque.component.scss'],
})
export class ItemListaEmbarqueComponent implements OnInit {
	@Input() embarque: Embarque;

	constructor(private store: Store<EmbarqueState>) {}

	ngOnInit() {}

	cancelarEmbarque(event: Event) {
		event.preventDefault();
		event.stopImmediatePropagation();

		this.store.dispatch(
			showConfirmMessage({
				message: `Você confirma o cancelamento do embarque?`,
				successCallback: () =>
					this.store.dispatch(
						EmbarqueActions.cancelarEmbarqueFuncionario({ embarque: this.embarque })
					),
			})
		);
	}

	selecionarEmbarque() {
		this.store.dispatch(EmbarqueActions.selecionarEmbarque({ idEmbarque: this.embarque.id }));
	}
}
