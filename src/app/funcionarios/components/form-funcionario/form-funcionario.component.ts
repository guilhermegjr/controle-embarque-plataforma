import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FuncionariosState } from '../../store/funcionarios.reducer';
import {
	adicionarFuncionario,
	limpaSelecaoFuncionario,
	atualizarFuncionario,
} from '../../store/funcionarios.actions';
import { Usuario } from '../../models/usuario.model';
import { showConfirmMessage } from 'src/app/shared/store/mensagens/mensagens.action';

@Component({
	selector: 'form-funcionario',
	templateUrl: './form-funcionario.component.html',
	styleUrls: ['./form-funcionario.component.scss'],
})
export class FormFuncionarioComponent implements OnInit {
	@Input() set funcionario(usuario: Usuario) {
		if (usuario) {
			this.form.patchValue(usuario);
		} else {
			this.form.reset();
		}
	}
	form: FormGroup;

	constructor(private store: Store<FuncionariosState>) {
		this.form = new FormGroup({
			id: new FormControl(''),
			nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
			email: new FormControl('', [Validators.required, Validators.email]),
			funcao: new FormControl('', [Validators.required, Validators.minLength(5)]),
			empresa: new FormControl('', [Validators.required, Validators.minLength(5)]),
			foto: new FormControl('./assets/icon/avatar.png'),
		});
	}

	ngOnInit() {}

	salvar() {
		const atualizacao = !!this.form.value.id;

		const message = atualizacao
			? 'Você confirma a atualização do funcionário?'
			: 'Você confirma o cadastro do novo funcionário?';

		const acao = atualizacao
			? atualizarFuncionario({ funcionario: this.form.value })
			: adicionarFuncionario({ funcionario: this.form.value });

		this.store.dispatch(
			showConfirmMessage({
				message,
				successCallback: () => this.store.dispatch(acao),
			})
		);
	}

	cancelar() {
		this.store.dispatch(limpaSelecaoFuncionario());
	}
}
