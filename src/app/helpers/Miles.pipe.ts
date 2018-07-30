import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'miles'})
export class MilesPipe implements PipeTransform {
  transform(value: number): number {
  
    return ((value * 2 * 3.14 * 5.25) / 12) / 5280;
  }
}