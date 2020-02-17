import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store, select } from '@ngrx/store';
import { SegurancaState } from './seguranca/store/seguranca.reducer';
import { Observable } from 'rxjs';
import { Usuario } from './funcionarios/models/usuario.model';
import { getUsuario } from './seguranca/store/seguranca.selectors';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	public selectedIndex = 0;
	public appPages = [
		{
			title: 'Funcionários',
			url: '/funcionarios',
			icon: 'people',
		},
		{
			title: 'Controle de embarque',
			url: '/controle-embarque',
			src: './assets/icon/icone-plataforma.svg',
		},
	];

	usuarioLogado$: Observable<Usuario>;

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private store: Store<SegurancaState>
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	ngOnInit() {
		this.usuarioLogado$ = this.store.pipe(select(getUsuario));

		const path = window.location.pathname.split('folder/')[1];
		if (path !== undefined) {
			this.selectedIndex = this.appPages.findIndex(
				page => page.title.toLowerCase() === path.toLowerCase()
			);
		}
	}

	toogleDarkMode(ev: any) {
		document.body.classList.toggle('dark', ev.detail.checked);
	}
}
