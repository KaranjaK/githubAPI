import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from './Classes/users';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateslice'
})
export class DateslicePipe extends DatePipe implements PipeTransform {

  override transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);;
  }

}
