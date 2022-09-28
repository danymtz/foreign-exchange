import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if(value=='MXN') value = 'Peso (México): ';
    else if(value=='AUD') value = 'Dólar (Australia): ';
    else if(value=='BRL') value = 'Real Brasileño: ';
    else if(value=='CAD') value = 'Dólar (Canada): ';
    else if(value=='CNY') value = 'Yuan (China): ';
    else if(value=='EUR') value = 'Euro: ';
    else if(value=='GBP') value = 'Libra esterlina: ';

    return value;
  }

}
