import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { FuncionariosState } from '../../store/funcionarios.reducer';
import { showConfirmMessage } from 'src/app/shared/store/mensagens/mensagens.action';
import { excluirFuncionario, selecionarFuncionario } from '../../store/funcionarios.actions';

@Component({
	selector: 'item-lista-funcionario',
	templateUrl: './item-lista-funcionario.component.html',
	styleUrls: ['./item-lista-funcionario.component.scss'],
})
export class ItemListaFuncionarioComponent implements OnInit {
	@Input() funcionario: Usuario;

	constructor(private store: Store<FuncionariosState>) {}

	ngOnInit() {}

	excluirFuncionario(event: Event) {
		event.preventDefault();
		event.stopImmediatePropagation();

		this.store.dispatch(
			showConfirmMessage({
				message: `Você confirma a exclusão do funcionário <b>${this.funcionario.nome}</b>`,
				successCallback: () =>
					this.store.dispatch(excluirFuncionario({ idFuncionario: this.funcionario.id })),
			})
		);
	}

	selecionarFuncionario() {
		this.store.dispatch(selecionarFuncionario({ idUsuario: this.funcionario.id }));
	}
}
