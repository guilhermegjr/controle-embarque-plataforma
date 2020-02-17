import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemListaFuncionarioComponent } from './item-lista-funcionario.component';

describe('ItemListaFuncionarioComponent', () => {
	let component: ItemListaFuncionarioComponent;
	let fixture: ComponentFixture<ItemListaFuncionarioComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ItemListaFuncionarioComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(ItemListaFuncionarioComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
