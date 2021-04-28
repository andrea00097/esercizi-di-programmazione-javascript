/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var anno_attuale = 2021;
var anno_nascita = 1960;

const anni_persona = anno_attuale-anno_nascita;
const anni_per_centenario = 100-anni_persona;

console.log(anni_persona);
console.log(anni_per_centenario);
