import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Videojoc } from '../../interfaces/videojoc';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  // Part 5: el pare passa el videojoc amb property binding [videojoc]="joc".
  @Input() videojoc!: Videojoc;

  // Part 5: el fill avisa el pare quan l'usuari prem el botó de detall.
  @Output() videojocSeleccionat = new EventEmitter<Videojoc>();

  // Emet el videojoc d'aquesta targeta cap al component pare.
  seleccionar(): void {
    this.videojocSeleccionat.emit(this.videojoc);
  }

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
