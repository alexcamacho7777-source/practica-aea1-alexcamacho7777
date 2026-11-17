// Interficie Videojoc, representa cada videojoc i les seves propietats

export interface Videojoc {
  // Identificador únic del videojoc (el fem servir al track del @for)
  id: number;
  // Nom del videojoc
  nom: string;
  // Gènere principal (acció, aventura, esports...)
  genere: string;
  // Preu en euros (0 vol dir que és gratuït)
  preu: number;
  // Puntuació sobre 10
  puntuacio: number;
  // Indica si el joc està disponible per comprar (true) o esgotat (false)
  disponible: boolean;
  // Plataformes on es pot jugar
  plataforma: string;
  // Any en què es va llançar el joc
  anyLlancament: number;
  // Adreça web de la imatge de la portada
  imatgeUrl: string;
}
