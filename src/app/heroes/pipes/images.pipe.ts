import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interface/heroes.interface';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(heroe:Heroes): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }

}

