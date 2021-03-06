import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interface/heroes.interface';

@Pipe({
  name: 'images',
  // pure: false
})
export class ImagesPipe implements PipeTransform {

  transform(heroe: Heroes): string {
    // console.log("Se disparo la imagen");

    if (!heroe.id && !heroe.alt_img) {
      return `assets/no-image.png`;
    } else if (heroe.alt_img) {
      return heroe.alt_img;
      // return `assets/no-image.png`;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }

  }


}



