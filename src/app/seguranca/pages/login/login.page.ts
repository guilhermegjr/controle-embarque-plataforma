import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SegurancaState } from '../../store/seguranca.reducer';
import { efetuarLogin } from '../../store/seguranca.actions';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	form: FormGroup;

	constructor(private store: Store<SegurancaState>) {
		this.formSetup();
	}

	private formSetup() {
		this.form = new FormGroup({
			email: new FormControl('', [Validators.email, Validators.required]),
			senha: new FormControl('', [Validators.required]),
		});
	}

	ngOnInit() {}

	efetuarLogin() {
		const { email, senha } = this.form.value;
		this.store.dispatch(efetuarLogin({ email, senha }));
	}
}
