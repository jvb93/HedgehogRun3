import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({name: 'mph'}) 
export class MphPipe implements PipeTransform { 
  transform(value: number): number { 
    return ((value * 2 * 3.14 * 5.25) / 12) * 0.0113636;
  } 
}