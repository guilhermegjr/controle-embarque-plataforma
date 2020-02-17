import { NgModule } from '@angular/core';
import { CustomInputDirective } from './custom-input.directive';

@NgModule({
	declarations: [CustomInputDirective],
	exports: [CustomInputDirective],
})
export class CustomInputDirectiveModule {}
