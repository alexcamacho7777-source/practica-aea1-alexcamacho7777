import { Component, computed, input } from '@angular/core';
import { Videojoc } from '../../interfaces/videojoc';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  // Dades que rep del component pare (ja no estan hardcodejades aquí)
  videojoc = input.required<Videojoc>();

  // Retorna el preu amb 2 decimals i el símbol de l'euro ("Gratuït" si val 0).
  preuText = computed(() => {
    const preu = this.videojoc().preu;
    return preu === 0 ? 'Gratuït' : preu.toFixed(2) + ' €';
  });

  // Indica si el joc està disponible.
  estat = computed(() => (this.videojoc().disponible ? 'Disponible' : 'No disponible'));

  // Calcula el preu del videojoc amb un 21% d'IVA.
  preuAmbIVA = computed(() => (this.videojoc().preu * 1.21).toFixed(2));

  // Combina la puntuació i el gènere per crear una etiqueta pròpia.
  etiqueta = computed(() => `${this.videojoc().genere} - Nota: ${this.videojoc().puntuacio}`);
}
