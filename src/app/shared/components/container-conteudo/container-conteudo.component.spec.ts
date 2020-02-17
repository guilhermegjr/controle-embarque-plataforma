import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContainerConteudoComponent } from './container-conteudo.component';

describe('ContainerConteudoComponent', () => {
	let component: ContainerConteudoComponent;
	let fixture: ComponentFixture<ContainerConteudoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContainerConteudoComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(ContainerConteudoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
