import {Directive} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: 'input[type=file]',
  host: {
    '(change)': 'onChange($event.target.files)',
    '(blur)': 'onTouched()'
  },
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FileInputDirective, multi: true}
  ]
})
export class FileInputDirective implements ControlValueAccessor {

  value: any;
  onChange = (_) => {};
  onTouched = () => {};

  writeValue(value) {}

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}
