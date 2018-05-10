import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
	selector: '[max-value-to-validate]',
	providers: [
	{
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => LessThanValidator ),
		multi: true
	}
	]
})
export class LessThanValidator implements Validator {
	@Input('max-value-to-validate') maxValue:number; 
	validate(control: AbstractControl) {
		let actualValue = parseInt(control.value, 10);
		if (actualValue && !(actualValue < this.maxValue)) {
			return {
				textNotLessThan: {
					textNotLessThan: 'not less than'
				}
			}
		} else {
			return null;
		}
	}
}