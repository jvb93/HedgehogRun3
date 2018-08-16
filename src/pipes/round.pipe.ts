import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({name: 'round'}) 
export class RoundPipe implements PipeTransform { 
  transform(value: number, points: number): string {   
    return value.toFixed(points) 
  } 
}