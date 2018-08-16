import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({name: 'date'}) 
export class DateParse implements PipeTransform { 
  transform(value: number, includeTime: boolean): string { 
    var date = new Date(value * 1000);

    return includeTime ? date.toLocaleString() : date.toLocaleDateString();
  } 
}