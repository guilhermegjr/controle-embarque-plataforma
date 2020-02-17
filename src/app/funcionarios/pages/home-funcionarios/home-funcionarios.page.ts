import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { Store, select } from '@ngrx/store';
import { getFuncionarios, getFuncionarioSelecionado } from '../../store/funcionarios.selectors';
import * as FuncionariosActions from '../../store/funcionarios.actions';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-home-funcionarios',
	templateUrl: './home-funcionarios.page.html',
	styleUrls: ['./home-funcionarios.page.scss'],
})
export class HomeFuncionariosPage implements OnInit {
	funcionarios$: Observable<Usuario[]>;
	funcionarioSelecionado$: Observable<Usuario>;

	exibirBotaoPesquisa = false;
	textoPesquisa: string;

	constructor(private store: Store<Usuario[]>) {}

	ngOnInit() {
		this.funcionarios$ = this.store.pipe(
			select(getFuncionarios),
			tap(
				funcionarios => (this.exibirBotaoPesquisa = !!(funcionarios && funcionarios.length))
			)
		);
		this.funcionarioSelecionado$ = this.store.pipe(select(getFuncionarioSelecionado));
		this.store.dispatch(FuncionariosActions.getFuncionarios());
	}

	novoFuncionario() {
		this.store.dispatch(FuncionariosActions.preparaCadastroNovoFuncionario());
	}

	filtrarFuncionarios(event: any) {
		this.textoPesquisa = event.detail ? event.detail.target.value : '';
	}
}
