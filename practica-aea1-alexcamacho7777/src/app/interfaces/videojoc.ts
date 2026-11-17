// Interfície Videojoc: representa cada videojoc del catàleg i les seves propietats.

export interface Videojoc {
  // Nom del videojoc (string)
  nom: string;
  // Gènere principal del joc: acció, aventura, esports... (string)
  genere: string;
  // Preu en euros; 0 vol dir que és gratuït (number)
  preu: number;
  // Puntuació de 0 a 10 (number)
  puntuacio: number;
  // true si el joc està disponible, false si està esgotat (boolean)
  disponible: boolean;
  // Plataformes on es pot jugar, per exemple "PC, Consoles" (string)
  plataforma: string;
  // Any en què es va llançar el joc (number)
  anyLlancament: number;
  // URL de la imatge de portada del joc (string)
  imatgeUrl: string;
}
