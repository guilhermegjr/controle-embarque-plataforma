import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormEmbarqueComponent } from './form-embarque.component';

@NgModule({
	imports: [SharedModule],
	declarations: [FormEmbarqueComponent],
	exports: [FormEmbarqueComponent],
})
export class FormEmbarqueModule {}
