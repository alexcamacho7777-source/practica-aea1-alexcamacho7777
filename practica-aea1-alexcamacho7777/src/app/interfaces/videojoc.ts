// Interficie Videojoc, representa cada videojoc i les seves propietats

export interface Videojoc {
  nom: string;
  genere: string;
  preu: number;
  puntuacio: number;
  disponible: boolean;
  plataforma: string;
  anyLlancament: number;
  imatgeUrl: string;
}
