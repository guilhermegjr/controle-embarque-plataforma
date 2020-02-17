import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputDirectiveModule } from './directives/custom-input/custom-input.module';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		FormsModule,
		IonicModule,
		CustomInputDirectiveModule,
	],
	exports: [
		CommonModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		FormsModule,
		IonicModule,
		CustomInputDirectiveModule,
	],
})
export class SharedModule {}
