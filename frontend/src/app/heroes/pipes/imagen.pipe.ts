import { Pipe, PipeTransform } from '@angular/core';
import { Personajes } from '../interfaces/personaje';

@Pipe({
  name: 'imagen',
  pure:false
})
export class ImagenPipe implements PipeTransform {

  transform(personaje: Personajes): string {

    if(!personaje.id && !personaje.alt_img){
      return 'assets/no-image.png'
    } else if(personaje.alt_img){
      return personaje.alt_img
    } else {
      return `assets/heroes/${personaje.personaje}.jpg`;
    }

  }

}
