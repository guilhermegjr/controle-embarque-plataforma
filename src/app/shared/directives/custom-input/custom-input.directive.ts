import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
@Directive({
	selector: '[customInput]',
})
export class CustomInputDirective {
	@Input() proximoCampo: any;

	@Output() enterPressionado = new EventEmitter<void>();

	constructor(private el: ElementRef) {
		el.nativeElement.classList.add('custom-input');
	}

	@HostListener('keyup', ['$event'])
	onkeyup(event: any): void {
		event.preventDefault();

		if (event.keyCode === 13) {
			if (this.proximoCampo) {
				this.proximoCampo.setFocus();
			} else {
				this.enterPressionado.emit();
			}
		}
	}
}
