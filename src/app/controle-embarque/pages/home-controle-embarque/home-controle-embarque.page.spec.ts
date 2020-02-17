import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeControleEmbarquePage } from './home-controle-embarque.page';

describe('HomeControleEmbarquePage', () => {
	let component: HomeControleEmbarquePage;
	let fixture: ComponentFixture<HomeControleEmbarquePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeControleEmbarquePage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeControleEmbarquePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
