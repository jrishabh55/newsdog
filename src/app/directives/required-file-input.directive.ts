import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[requiredFile]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: RequiredFileInputDirective, multi: true},
  ]
})
export class RequiredFileInputDirective implements Validator {

  static validate(c: FormControl): { [key: string]: any } {
    return c.value == null || c.value.length === 0 ? {'required': true} : null;
  }

  validate(c: FormControl): { [key: string]: any } {
    return RequiredFileInputDirective.validate(c);
  }

}
