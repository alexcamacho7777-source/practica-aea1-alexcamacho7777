
import { Component } from '@angular/core';

@Component({
  selector: 'app-estadistiques',
  standalone: true,
  imports: [],
  templateUrl: './estadistiques.html',
  styleUrl: './estadistiques.css'
})
export class Estadistiques {

  videojocs: string[] = [
    'Minecraft',
    'EA Sports FC 27',
    'Grand Theft Auto V',
    'The Legend of Zelda',
    'Rocket League',
    'Red Dead Redemption 2'
  ];

  // Calcula quants videojocs hi ha al catàleg.
  get totalVideojocs(): number {
    return this.videojocs.length;
  }

  // Retorna el nom del primer videojoc de la llista.
  get primerVideojoc(): string {
    return this.videojocs[0];
  }
}
