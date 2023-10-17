import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();

    const filteredItems = items.filter((item) => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const value = item[key];
          if (value.toString().toLowerCase().includes(searchTerm)) {
            return true;
          }
        }
      }
      return false;
    });
    if (filteredItems.length === 0) {
      return [
        {
          message: 'No record available for this search',
        },
      ];
    }
    return filteredItems;
  }
}
