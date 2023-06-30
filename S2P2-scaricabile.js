// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [30, 60, 10];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = marco; //cambia il valore qui per provare se il tuo algoritmo funziona!

//1 definisco il prezzo totale, scontato, finale e calcolo il totale del carrello
let prezzoCarrello = 0;
let prezzoScontato = 0;
let prezzoFinale = 0;

for (let i = 0; i < prices.length; i++) {
  prezzoCarrello += prices[i];
}

//2 applicazione sconto ambassador
utenteCheEffettuaLAcquisto.isAmbassador
  ? (prezzoScontato = prezzoCarrello - (30 * prezzoCarrello) / 100)
  : (prezzoScontato = prezzoCarrello);

//3 spesa di spedizione (su prezzo scontato)
prezzoFinale =
  prezzoScontato > 100 ? prezzoScontato : prezzoScontato + shippingCost;

//4 stampo prezzo finale
console.log(
  `Carrello: ${prezzoCarrello} \nCarrello scontato: ${prezzoScontato}\nPrezzo finale: ${prezzoFinale} `
);

//creo un array vuoto e lo riempio utilizzando push
const utenti = [];

utenti.push(marco, paul, amy);

//stampo informazioni contenute all'interno del vettore
let ambassador;

for (let i = 0; i < utenti.length; i++) {
  utenti[i].isAmbassador == true
    ? (ambassador = "è un ambassador")
    : (ambassador = "non è un ambassador");
  console.log(`${utenti[i].name} ${utenti[i].lastName} ${ambassador} `);
}

//vettore con con soli ambassador
let arrayAmbassador = [];

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador) {
    arrayAmbassador.push(utenti[i]);
  }
}

console.log(`Ambassadors:` + JSON.stringify(arrayAmbassador));
