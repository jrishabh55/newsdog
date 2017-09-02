import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, length: any = 50): any {
    if (!value || !length) {
      return value;
    }
    if (value.length > length) {
      return value.substr(0, length) + '...';
    }
    return value;
  }

}
