// Richiesta informazioni utente
var kilometri = prompt('Inserisci kilometri da percorrere: ');
var eta = prompt('Inserisci la tua etá: ');

// Prezzo al kilometro
var prezzoKilometro = 0.21;

// Costo biglietto senza sconto eventuale
var costoParziale = kilometri * prezzoKilometro;
var sconto = 0;

// Impostazione dello sconto
if (eta < 18) {
  sconto = costoParziale * 0.2;
} else if (eta > 65) {
  sconto = costoParziale * 0.4;
}

// Calcolo costo biglietto con sconto
var costoFinale = costoParziale - sconto;

// Validazione informazioni utente con messaggio sul sito
if ((isNaN(kilometri)) || (isNaN(eta))){
  // informazioni non corrette
  document.getElementById('prezzo').innerHTML = 'Impossibile calcolare il prezzo del biglietto, valori inseriti non corretti, riprova.';
} else{
  // Informazioni corrette
  document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto é ' + costoFinale.toFixed(2) + ' €';
}
