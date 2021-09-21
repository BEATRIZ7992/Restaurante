import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {

    //if(arg===''|| arg.length < 3 ) return value
    const resultMesa = [];
    for (const mesa of value) {
      if (mesa.name_table.indexOf(arg) > -1) {
        resultMesa.push(mesa)


      }

    }
    return resultMesa;
  }

}
