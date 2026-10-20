import { Component, computed, input } from '@angular/core';
import { Videojoc } from '../../interfaces/videojoc';

@Component({
  selector: 'app-estadistiques',
  templateUrl: './estadistiques.html',
  styleUrl: './estadistiques.css',
})
export class Estadistiques {
  // Llista de videojocs que rep del component pare
  videojocs = input.required<Videojoc[]>();

  // Calcula quants videojocs hi ha al catàleg.
  totalVideojocs = computed(() => this.videojocs().length);

  // Retorna el nom del primer videojoc de la llista.
  primerVideojoc = computed(() => this.videojocs()[0]?.nom ?? '-');

  // Quants videojocs estan disponibles.
  totalDisponibles = computed(() => this.videojocs().filter((v) => v.disponible).length);

  // Puntuació mitjana del catàleg.
  puntuacioMitjana = computed(() => {
    const llista = this.videojocs();
    if (llista.length === 0) return '0.0';
    return (llista.reduce((suma, v) => suma + v.puntuacio, 0) / llista.length).toFixed(1);
  });
}
