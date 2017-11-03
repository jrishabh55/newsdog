import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseObject'
})
export class ParseObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try {
      if (typeof value === 'string') {
        value = JSON.parse(value);
        return this.parse(value);
      } else if (typeof value === 'object') {
        return this.parse(value);
      } else {
        return value;
      }
    } catch (e) {
      return value;
    }
  }

  parse(ret: Object) {
    let data = '';
    for (let val in ret) {
      if (ret.hasOwnProperty(val)) {
        const name = val.replace('_', ' ');
        data += `<strong class="text-capitalize">${name}:</strong> ${ret[val]}<br />`;
      }
    }
    return data;
  }

}
