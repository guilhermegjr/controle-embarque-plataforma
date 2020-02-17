import { NgModule } from '@angular/core';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginPage } from './pages/login/login.page';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { segurancaReducer } from './store/seguranca.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SegurancaEffects } from './store/seguranca.effects';
import { CustomInputDirectiveModule } from '../shared/directives/custom-input/custom-input.module';

@NgModule({
	declarations: [LoginPage],
	imports: [
		SharedModule,
		SegurancaRoutingModule,
		CustomInputDirectiveModule,
		StoreModule.forFeature('seguranca', segurancaReducer),
		EffectsModule.forFeature([SegurancaEffects]),
	],
})
export class SegurancaModule {}
