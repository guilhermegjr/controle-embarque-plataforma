import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Usuario } from 'src/app/funcionarios/models/usuario.model';
import { getUsuario } from '../store/seguranca.selectors';
import { map, tap } from 'rxjs/operators';
import { SegurancaState } from '../store/seguranca.reducer';

@Injectable({
	providedIn: 'root',
})
export class ValidaAutenticacaoGuard implements CanActivate {
	usuario$: Observable<Usuario>;

	constructor(private store: Store<SegurancaState>, private route: Router) {
		this.usuario$ = this.store.pipe(select(getUsuario));
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.usuario$.pipe(
			map(usuario => !!usuario),
			tap(autenticado => {
				if (!autenticado) {
					this.route.navigate(['seguranca', 'login']);
				}
			})
		);
	}
}
