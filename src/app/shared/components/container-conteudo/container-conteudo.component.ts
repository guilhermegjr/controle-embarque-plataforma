import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'container-conteudo',
	templateUrl: './container-conteudo.component.html',
	styleUrls: ['./container-conteudo.component.scss'],
})
export class ContainerConteudoComponent implements OnInit {
	@Input() titulo: string;
	@Input() padding: boolean = true;

	constructor() {}

	ngOnInit() {}
}
