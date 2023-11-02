import { Pipe, PipeTransform } from '@angular/core';
import { Cities, Countries, States } from './cascading/dropdownData';

@Pipe({
  name: 'nameById',
})
export class NameByIdPipe implements PipeTransform {
  transform(id: number, type: string): string {
    switch (type) {
      case 'country':
        const country = Countries.find((c) => c.id == id);
        return country ? country.name : '';

      case 'state':
        const state = States.find((s) => s.id == id);
        return state ? state.name : '';

      case 'city':
        const city = Cities.find((c) => c.id == id);
        return city ? city.name : '';

      default:
        return '';
    }
  }
}
