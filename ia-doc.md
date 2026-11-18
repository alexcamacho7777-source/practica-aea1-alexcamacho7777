Documentació de l'ús de la IA — GameCatalog
1. Nom del projecte
GameCatalog: catàleg de videojocs creat amb Angular i TypeScript.
2. Eina d'intel·ligència artificial utilitzada
S'ha utilitzat ChatGPT com a eina de suport durant el desenvolupament de la pràctica.
3. Per a què s'ha utilitzat
La IA ha ajudat a:
- Entendre com mostrar una llista de videojocs amb el bucle @for d'Angular.
- Revisar la comunicació entre el component principal i el component de targeta mitjançant input.required().
- Detectar i corregir errors de TypeScript, com ara imports que falten, classes duplicades i accessos incorrectes a les dades.
- Preparar exemples senzills de dades de videojocs i estils CSS per mostrar diverses targetes a la pantalla.
- Explicar els canvis amb un llenguatge senzill per poder entendre'ls i adaptar-los al projecte.
4. Exemples de peticions fetes a la IA
- «Necessito que es mostrin tots els jocs per pantalla».
- «Com puc solucionar l'error Multiple exports with the same name "Tarjeta"?»
- «Com puc utilitzar @for per crear una targeta per a cada videojoc?»
- «Revisa el component Tarjeta i explica com rebre les dades amb input.required().»
5. Què s'ha modificat amb l'ajuda de la IA
S'han proposat exemples de codi per:
- Recórrer l'array de videojocs des de app.html.
- Passar cada videojoc al component Tarjeta.
- Organitzar les targetes amb Flexbox perquè apareguin en diverses columnes.
- Corregir els getters perquè llegeixin les dades del videojoc correctament.
6. Revisió i responsabilitat
Les propostes de la IA s'han de revisar i provar dins del projecte. Cal comprovar que els noms dels camps coincideixin amb la interfície Videojoc real del projecte. La IA s'ha utilitzat com a suport per aprendre i resoldre errors; el codi final s'ha d'entendre abans de lliurar-lo.
7. Conclusió
ChatGPT ha servit com a eina d'ajuda per entendre Angular, corregir errors i mostrar tots els videojocs del catàleg. Les respostes s'han d'adaptar a l'estructura real del projecte i verificar executant l'aplicació.

---
# Lliurament 2

## Correccions de L1 (revisió de la professora)
- He usat IA? Sí (Kiro, assistent d'IA integrat a l'editor).
- Prompt: "Necessito corregir algunes coses a partir de la revisió que m'ha fet la professora." (adjuntant el comentari de la professora).
- Part usada directament: tornar als getters (sense signals ni computed), comentari per a cada camp de la interfície Videojoc, URLs d'imatge reals i dades hardcodejades dins de Tarjeta i Estadistiques.
- Part modificada: a la secció 3 de L1 s'esmenta input.required(); això ja no s'usa. Ara el pare passa les dades amb @Input() (Part 5).

## Part 3 - @for
- He usat IA? Sí
- Prompt: "Necessito fer la Part 3 i entendre com funciona. Vull saber com s'usa @for amb track, $index, $first i $last, per què calen mínim 6 ítems i com es fa el layout en graella."
- Part usada directament: el @for amb track joc.id, el número d'ordre amb $index i l'emoji amb $first/$last. He afegit el camp id a la interfície perquè track en necessita un.
- Part modificada: la graella amb CSS grid en lloc de flexbox.
- Reflexions:
  - Per què cal track a @for? Perquè Angular identifiqui cada element i, si la llista canvia, només torni a pintar el que ha canviat. Si no es posa, Angular dóna error i no sap quin element és quin.
  - Per què totes les targetes mostren el mateix en aquest punt? Perquè cada Tarjeta té les dades hardcodejades dins seu i el pare encara no li passa cap ítem. Es resol amb @Input() a la Part 5.

## Part 4 - @if
- He usat IA? Sí
- Prompt: "Necessito fer la Part 4 i entendre com funciona. Vull saber com s'usa @if amb @else, com puc fer 3 usos i com es fan 2 classes CSS d'estat."
- 3 usos de @if al meu projecte:
  1. videojoc.disponible - mostra "Disponible" (verd) o, amb @else, "Esgotat" (vermell).
  2. videojoc.puntuacio >= 8.5 - mostra la badge "Destacat".
  3. videojoc.anyLlancament <= 2015 - mostra la badge "Clàssic".
- Reflexions:
  - Podria fer el mateix amb getters? Sí, però un getter només retorna un valor (text, número). Amb @if es mostra o s'amaga un tros d'HTML, i el codi queda al template, on es veu què es pinta. Triaria un getter per calcular un valor i @if per decidir si un element apareix.

## Part 5 - @Input i @Output
- He usat IA? Sí
- Prompt: "Necessito fer la Part 5 i entendre com funciona. Vull saber com passa les dades el pare al fill amb @Input(), com avisa el fill al pare amb @Output() i EventEmitter, i com mostrar el detall amb un @if."
- @Output triat: videojocSeleccionat - té sentit en un catàleg: l'usuari prem "Veure detall" i el pare mostra el detall d'aquell joc.
- Part usada directament: @Input() videojoc!, @Output() amb EventEmitter, el mètode onVideojocSeleccionat al pare i la secció de detall amb @if. Estadistiques també rep la llista amb @Input().
- Reflexions:
  - Diferència entre @Input i @Output: @Input fa que les dades baixin del pare al fill ([videojoc]="joc"). @Output fa que els avisos pugin del fill al pare ((videojocSeleccionat)="...").
  - Què ha canviat a les targetes? Ara cada targeta mostra un joc diferent, perquè rep el seu videojoc del @for en lloc de tenir-lo escrit dins.

## Valoració global L2
- Concepte que he entès millor: com viatgen les dades entre pare i fill.
- @Input i @Output em semblaven difícils al principi, però la idea és simple: les dades baixen i els events pugen.
- La IA m'ha ajudat a veure el flux de dades i a corregir els errors de la revisió. He revisat i entès el codi abans de lliurar-lo.
