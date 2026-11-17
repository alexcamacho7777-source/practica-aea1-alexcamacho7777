import { Component } from '@angular/core';
import { Videojoc } from './interfaces/videojoc';
import { Estadistiques } from './components/Estadistiques/estadistiques';
import { Tarjeta } from './components/Tarjeta/tarjeta';
import { Capcalera } from './components/Capcalera/capcalera';

@Component({
  selector: 'app-root',
  imports: [Estadistiques, Tarjeta, Capcalera],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Definir els Videojocs amb les dades hardcodejades
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
      nom: 'EA Sports FC 27',
      genere: 'Esports',
      preu: 79.99,
      puntuacio: 8.5,
      plataforma: 'PC, Consoles',
      disponible: true,
      anyLlancament: 2026,
      imatgeUrl: 'https://placehold.co/460x215/png?text=EA+Sports+FC+27',
    },
    {
      nom: 'Grand Theft Auto V',
      genere: 'Acció',
      preu: 29.99,
      puntuacio: 9.3,
      plataforma: 'PC, Consoles',
      disponible: true,
      anyLlancament: 2013,
      imatgeUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
    },
    {
      nom: 'The Legend of Zelda',
      genere: 'Aventura',
      preu: 59.99,
      puntuacio: 9.8,
      plataforma: 'Consoles',
      disponible: false,
      anyLlancament: 2023,
      imatgeUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    },
    {
      nom: 'Rocket League',
      genere: 'Esports',
      preu: 0,
      puntuacio: 8.7,
      plataforma: 'PC, Consoles',
      disponible: true,
      anyLlancament: 2015,
      imatgeUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg',
    },
    {
      nom: 'Red Dead Redemption 2',
      genere: 'Acció',
      preu: 39.99,
      puntuacio: 9.7,
      plataforma: 'PC, Consoles',
      disponible: false,
      anyLlancament: 2018,
      imatgeUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg',
    },
  ];
}
