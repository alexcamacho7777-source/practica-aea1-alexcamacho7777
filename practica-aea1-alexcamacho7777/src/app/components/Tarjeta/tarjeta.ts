
import { Component, input } from '@angular/core';
import { Videojoc } from '../../interfaces/videojoc';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})

export class Tarjeta {
  videojoc = input.required<Videojoc>();

  // Retorna el preu amb el símbol de l'euro.
  get preuText(): string {
    return this.videojoc().preu + ' €';
  }

  // Indica si el joc està disponible.
  get estat(): string {
    return this.videojoc().disponible ? 'Disponible' : 'No disponible';
  }

  // Calcula el preu del videojoc amb un 21% d'IVA.
  get preuAmbIVA(): number {
    return this.videojoc().preu * 1.21;
  }

  // Combina la puntuació i el gènere per crear una etiqueta pròpia.
  get etiqueta(): string {
    return this.videojoc().genere + ' - Nota: ' + this.videojoc().puntuacio;
  }
}
