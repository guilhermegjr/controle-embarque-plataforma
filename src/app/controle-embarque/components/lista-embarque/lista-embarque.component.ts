import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/funcionarios/models/usuario.model';
import { Store, select } from '@ngrx/store';
import { EmbarqueState } from '../../store/controle-embarque.reducer';
import { Observable } from 'rxjs';
import { Embarque } from '../../models/embarque.model';
import * as EmbarqueSelectors from '../../store/controle-embarque.selectors';
import * as EmbarqueActions from '../../store/controle-embarque.actions';

@Component({
	selector: 'lista-embarque',
	templateUrl: './lista-embarque.component.html',
	styleUrls: ['./lista-embarque.component.scss'],
})
export class ListaEmbarqueComponent implements OnInit {
	@Input() titulo = 'Relação de embarques';
	@Input() funcionario: Usuario;

	embarques$: Observable<Embarque[]>;

	constructor(private store: Store<EmbarqueState>) {}

	ngOnInit() {
		this.embarques$ = !!this.funcionario
			? this.store.pipe(select(EmbarqueSelectors.getEmbarquesFuncionario(this.funcionario)))
			: this.store.pipe(select(EmbarqueSelectors.getEmbarquesProgramados));
	}

	novoEmbarque() {
		this.store.dispatch(EmbarqueActions.prepararNovoEmbarque());
	}
}
