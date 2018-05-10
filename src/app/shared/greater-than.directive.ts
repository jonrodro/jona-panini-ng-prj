import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
	selector: '[min-value-to-validate]',
	providers: [
	{
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => GreaterThanValidator ),
		multi: true
	}
	]
})
export class GreaterThanValidator implements Validator {
	@Input('min-value-to-validate') minValue:number; 
	validate(control: AbstractControl) {
		let actualValue = parseInt(control.value, 10);
		if (actualValue && !(actualValue > this.minValue)) {
			return {
				textNotGreaterThan: {
					textNoGreaterThan: 'not greater than'
				}
			}
		} else {
			return null;
		}
	}
}