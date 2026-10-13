import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojoc } from './interfaces/videojoc';
import { Estadistiques } from './components/Estadistiques/estadistiques';
import { Tarjeta } from './components/Tarjeta/tarjeta';
import { Capçalera } from './components/Capçalera/capçalera';

@Component({
  selector: 'app-root',
  imports: [Estadistiques, Tarjeta, Capçalera],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-aea1-alexcamacho7777');

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
    imatgeUrl: ''
  },
  {
    nom: 'EA Sports FC 27',
    genere: 'Esports',
    preu: 79.99,
    puntuacio: 8.5,
    plataforma: 'PC, Consoles',
    disponible: true,
    anyLlancament: 2026,
    imatgeUrl: ''
  },
  {
    nom: 'Grand Theft Auto V',
    genere: 'Acció',
    preu: 29.99,
    puntuacio: 9.3,
    plataforma: 'PC, Consoles',
    disponible: true,
    anyLlancament: 2013,
    imatgeUrl: ''
  },
  {
    nom: 'The Legend of Zelda',
    genere: 'Aventura',
    preu: 59.99,
    puntuacio: 9.8,
    plataforma: 'Consoles',
    disponible: false,
    anyLlancament: 2023,
    imatgeUrl: ''
  },
  {
    nom: 'Rocket League',
    genere: 'Esports',
    preu: 0,
    puntuacio: 8.7,
    plataforma: 'PC, Consoles',
    disponible: true,
    anyLlancament: 2015,
    imatgeUrl: ''
  },
  {
    nom: 'Red Dead Redemption 2',
    genere: 'Acció',
    preu: 39.99,
    puntuacio: 9.7,
    plataforma: 'PC, Consoles',
    disponible: false,
    anyLlancament: 2018,
    imatgeUrl: ''
  }
];







}
