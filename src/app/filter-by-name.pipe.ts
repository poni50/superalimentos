import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(objectList: any[], valor: string): any[] {
    return objectList.filter(item => {
      if (item.name.toLowerCase().includes(valor.toLowerCase())) {
        return item;
      }
    });
  }
}
