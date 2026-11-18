import { Component, Input } from '@angular/core';
import { Videojoc } from '../../interfaces/videojoc';

@Component({
  selector: 'app-estadistiques',
  templateUrl: './estadistiques.html',
  styleUrl: './estadistiques.css',
})
export class Estadistiques {
  // Part 5: llista de videojocs que rep del component pare.
  @Input() videojocs: Videojoc[] = [];

  // Retorna quants videojocs hi ha al catàleg.
  get totalVideojocs(): number {
    return this.videojocs.length;
  }

  // Retorna el nom del primer videojoc de la llista.
  get primerVideojoc(): string {
    return this.videojocs.length > 0 ? this.videojocs[0].nom : '-';
  }

  // Retorna quants videojocs estan disponibles.
  get totalDisponibles(): number {
    return this.videojocs.filter((v) => v.disponible).length;
  }

  // Retorna la puntuació mitjana del catàleg amb 1 decimal.
  get puntuacioMitjana(): string {
    if (this.videojocs.length === 0) return '0.0';
    const suma = this.videojocs.reduce((total, v) => total + v.puntuacio, 0);
    return (suma / this.videojocs.length).toFixed(1);
  }
}
