import { Component, OnInit, Input } from '@angular/core';
import { Embarque } from '../../models/embarque.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { EmbarqueState } from '../../store/controle-embarque.reducer';
import * as EmbarqueActions from '../../store/controle-embarque.actions';
import * as MensagensActions from '../../../shared/store/mensagens/mensagens.action';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/funcionarios/models/usuario.model';
import { Plataforma } from '../../models/plataforma.model';
import {
	getPlataformas,
	getFuncionariosDisponiveisEmbarquePeriodo,
} from '../../store/controle-embarque.selectors';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'form-embarque',
	templateUrl: './form-embarque.component.html',
	styleUrls: ['./form-embarque.component.scss'],
})
export class FormEmbarqueComponent implements OnInit {
	_embarque: Embarque;
	@Input() set embarque(embarque: Embarque) {
		if (embarque) {
			this._embarque = embarque;
			this.form.patchValue(embarque);
		} else {
			this.form.reset();
			this._embarque = null;
		}
	}
	form: FormGroup;

	funcionariosDisponiveis$: Observable<Usuario[]>;
	plataformas$: Observable<Plataforma[]>;
	naoHaFuncionariosDisponiveis: boolean;

	constructor(private store: Store<EmbarqueState>) {
		this.form = new FormGroup({
			id: new FormControl(''),
			plataforma: new FormControl(null, [Validators.required]),
			funcionario: new FormControl(null, [Validators.required]),
			dataInicio: new FormControl(null, [Validators.required]),
			dataTermino: new FormControl(null, [Validators.required]),
		});
	}

	ngOnInit() {
		this.plataformas$ = this.store.pipe(select(getPlataformas));
		this.store.dispatch(EmbarqueActions.getPlataformasDisponiveis());
	}

	salvar() {
		const embarque: Embarque = {
			...this.form.value,
			dataInicio: new Date(this.form.value.dataInicio),
			dataTermino: new Date(this.form.value.dataTermino),
		};

		const atualizacao = !!embarque.id;

		const message = atualizacao
			? 'Você confirma a atualização do embarque?'
			: 'Você confirma o agendamento do novo embarque?';

		const acao = atualizacao
			? EmbarqueActions.atualizarEmbarqueFuncionario({ embarque })
			: EmbarqueActions.realizarEmbarqueFuncionario({ embarque });

		this.store.dispatch(
			MensagensActions.showConfirmMessage({
				message,
				successCallback: () => this.store.dispatch(acao),
			})
		);
	}

	cancelar() {
		this.store.dispatch(EmbarqueActions.limparSelecaoEmbarque());
	}

	buscarFuncionariosDisponiveis() {
		let { dataInicio, dataTermino } = this.form.value;
		if (dataInicio && dataTermino) {
			dataInicio = new Date(dataInicio);
			dataTermino = new Date(dataTermino);

			this.funcionariosDisponiveis$ = this.store.pipe(
				select(getFuncionariosDisponiveisEmbarquePeriodo(dataInicio, dataTermino)),
				tap(
					funcionarios =>
						(this.naoHaFuncionariosDisponiveis =
							!funcionarios || (!funcionarios.length && !this.form.value.funcionario))
				)
			);
		}
	}
}
