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
      id: 1,
      nom: 'Minecraft',
      genere: 'Supervivència',
      preu: 29.99,
      puntuacio: 9.5,
      disponible: true,
      plataforma: 'PC, Consoles',
      anyLlancament: 2011,
      imatgeUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Minecraft_Classic_screenshot.jpg',
    },
    {
      id: 2,
      nom: 'EA Sports FC 27',
      genere: 'Esports',
      preu: 79.99,
      puntuacio: 8.5,
      plataforma: 'PC, Consoles',
      disponible: true,
      anyLlancament: 2026,
      imatgeUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg',
    },
    {
      id: 3,
      nom: 'Grand Theft Auto V',
      genere: 'Acció',
      preu: 29.99,
      puntuacio: 9.3,
      plataforma: 'PC, Consoles',
      disponible: true,
      anyLlancament: 2013,
      imatgeUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
    },
    {
      id: 4,
      nom: 'The Legend of Zelda',
      genere: 'Aventura',
      preu: 59.99,
      puntuacio: 9.8,
      plataforma: 'Consoles',
      disponible: false,
      anyLlancament: 2023,
      imatgeUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg',
    },
    {
      id: 5,
      nom: 'Rocket League',
      genere: 'Esports',
      preu: 0,
      puntuacio: 8.7,
      plataforma: 'PC, Consoles',
      disponible: true,
      anyLlancament: 2015,
      imatgeUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg',
    },
    {
      id: 6,
      nom: 'Red Dead Redemption 2',
      genere: 'Acció',
      preu: 39.99,
      puntuacio: 9.7,
      plataforma: 'PC, Consoles',
      disponible: false,
      anyLlancament: 2018,
      imatgeUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    },
  ];
}
