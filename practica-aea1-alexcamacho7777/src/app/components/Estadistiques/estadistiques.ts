import { Component } from '@angular/core';
import { Videojoc } from '../../interfaces/videojoc';

@Component({
  selector: 'app-estadistiques',
  templateUrl: './estadistiques.html',
  styleUrl: './estadistiques.css',
})
export class Estadistiques {
  // L1: les dades estan hardcodejades dins del propi component.
  videojocs: Videojoc[] = [
    {
      nom: 'Minecraft',
      genere: 'Supervivència',
      preu: 29.99,
      puntuacio: 9.5,
      disponible: true,
      plataforma: 'PC, Consoles',
      anyLlancament: 2011,
      imatgeUrl: 'https://placehold.co/460x215/png?text=Minecraft',
    },
    {
      nom: 'Grand Theft Auto V',
      genere: 'Acció',
      preu: 29.99,
      puntuacio: 9.3,
      disponible: true,
      plataforma: 'PC, Consoles',
      anyLlancament: 2013,
      imatgeUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
    },
    {
      nom: 'The Legend of Zelda',
      genere: 'Aventura',
      preu: 59.99,
      puntuacio: 9.8,
      disponible: false,
      plataforma: 'Consoles',
      anyLlancament: 2023,
      imatgeUrl:
        'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    },
  ];

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
