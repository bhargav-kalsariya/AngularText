import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item) => {
      // Customize this condition to match your filtering criteria
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      );
    });
  }
}
