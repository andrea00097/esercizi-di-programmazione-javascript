/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
var num_gatti = 44;
var gatti_per_fila = 6;

var file_tot_gatti = Math.ceil (44/6);
var gatti_mancanti = (gatti_per_fila * file_tot_gatti) - num_gatti

console.log(`${num_gatti} gatti in fila per ${gatti_per_fila} si dispongono in ${file_tot_gatti} file con ${gatti_mancanti} gatti mancanti`);
