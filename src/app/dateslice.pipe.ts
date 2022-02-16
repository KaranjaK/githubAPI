import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateslice'
})
export class DateslicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
