import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({name: 'miles'}) 
export class MilesPipe implements PipeTransform { 
  transform(value: number): number { 
   
    return ((value * 2 * 3.14 * 5.25) / 12) / 5280; 
  } 
}