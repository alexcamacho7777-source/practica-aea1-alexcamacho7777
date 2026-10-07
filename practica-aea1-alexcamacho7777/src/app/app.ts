import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Videojoc } from './interfaces/videojoc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
    anyLlançament: 2011,
    imatgeUrl: ''
  },
  {
    nom: 'EA Sports FC 27',
    genere: 'Esports',
    preu: 79.99,
    puntuacio: 8.5,
    plataforma: 'PC, Consoles',
    disponible: true,
    anyLlançament: 2026,
    imatgeUrl: ''
  },
  {
    nom: 'Grand Theft Auto V',
    genere: 'Acció',
    preu: 29.99,
    puntuacio: 9.3,
    plataforma: 'PC, Consoles',
    disponible: true,
    anyLlançament: 2013,
    imatgeUrl: ''
  },
  {
    nom: 'The Legend of Zelda',
    genere: 'Aventura',
    preu: 59.99,
    puntuacio: 9.8,
    plataforma: 'Consoles',
    disponible: false,
    anyLlançament: 2023,
    imatgeUrl: ''
  },
  {
    nom: 'Rocket League',
    genere: 'Esports',
    preu: 0,
    puntuacio: 8.7,
    plataforma: 'PC, Consoles',
    disponible: true,
    anyLlançament: 2015,
    imatgeUrl: ''
  },
  {
    nom: 'Red Dead Redemption 2',
    genere: 'Acció',
    preu: 39.99,
    puntuacio: 9.7,
    plataforma: 'PC, Consoles',
    disponible: false,
    anyLlançament: 2018,
    imatgeUrl: ''
  }
];







}
