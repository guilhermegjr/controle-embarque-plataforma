import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Embarque } from '../../models/embarque.model';
import { Store, select } from '@ngrx/store';
import { EmbarqueState } from '../../store/controle-embarque.reducer';
import { getEmbarqueSelecionado, getTotalEmbarques } from '../../store/controle-embarque.selectors';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-home-controle-embarque',
	templateUrl: './home-controle-embarque.page.html',
	styleUrls: ['./home-controle-embarque.page.scss'],
})
export class HomeControleEmbarquePage implements OnInit {
	embarqueSelecionado$: Observable<Embarque>;
	totalEmbarquesAgendados$: Observable<number>;

	constructor(private store: Store<EmbarqueState>) {}

	ngOnInit() {
		this.totalEmbarquesAgendados$ = this.store.pipe(select(getTotalEmbarques));
		this.embarqueSelecionado$ = this.store.pipe(select(getEmbarqueSelecionado));
	}
}
