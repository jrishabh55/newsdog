import {Pipe, PipeTransform} from '@angular/core';
import * as crypto from 'crypto-js';

@Pipe({
  name: 'decrypt'
})
export class DecryptPipe implements PipeTransform {

  transform(value: string, key: string): any {
    return DecryptPipe.decrypt(key, value);
  }

  private static decrypt (key, text) {
    const decipher = crypto.AES.decrypt(text, key);
    return decipher.toString(crypto.enc.Utf8);
  }


}
