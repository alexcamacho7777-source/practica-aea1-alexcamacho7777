import { Component } from '@angular/core';
import { Videojoc } from '../../interfaces/videojoc';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {

  videojoc: Videojoc = {
    nom: 'Minecraft',
    genere: 'Supervivència',
    preu: 29.99,
    puntuacio: 9.5,
    plataforma: 'PC, Consoles',
    disponible: true,
    anyLlancament: 2011,
    imatgeUrl: ''
  };

  // Retorna el preu amb el símbol de l'euro.
  get preuText(): string {
    return this.videojoc.preu + ' €';
  }

  // Indica si el joc està disponible.
  get estat(): string {
    return this.videojoc.disponible ? 'Disponible' : 'No disponible';
  }

  // Calcula el preu del videojoc amb un 21% d'IVA.
  get preuAmbIVA(): number {
    return this.videojoc.preu * 1.21;
  }

  // Combina la puntuació i el gènere per crear una etiqueta pròpia.
  get etiqueta(): string {
    return this.videojoc.genere + ' - Nota: ' + this.videojoc.puntuacio;
  }
}
