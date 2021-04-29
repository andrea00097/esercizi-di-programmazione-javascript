/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var secondi_iniziali = 21402;

var ore = Math.floor(secondi_iniziali/3600);
var minuti = Math.floor((secondi_iniziali/3600-ore)*60);
var secondi = Math.floor((((secondi_iniziali/3600-ore)*60)-minuti)*60);

var message = `${secondi_iniziali} secondi sono composti da ${ore} ore, ${minuti} mimuti e ${secondi} secondi`;

console.log(message);
