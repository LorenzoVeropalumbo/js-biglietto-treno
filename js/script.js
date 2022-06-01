// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// FUNCTION
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

alert("Crea il tuo biglietto");

// Km of travel
let TotalKm = parseInt(prompt("Quanti Km di percorreza dei fare"));

// Check if TotalKm is a numer string
if (isNaN(TotalKm)) {
  alert("Insterici un valure numerico");
  TotalKm = parseInt(prompt("Quanti Km di percorreza dei fare"));
}

// passenger Age 
let UserAge = parseInt(prompt("Inserisci la tua età"));

// Check if passenger Age is a numer string
if (isNaN(UserAge)) {
  alert("Insterici un valure numerico");
  UserAge = parseInt(prompt("Inserisci la tua età"));
}

// calculate the standard ticket price
let TicketPrice = TotalKm * 0.21;
console.log(financial(TicketPrice));
console.log(TicketPrice.toFixed(2));

// Applay a discount if possible
if (UserAge < 18) {
  console.log("Minorenne");
}
else if (UserAge >= 65) {
  console.log("Over")
}
else{
  console.log(TicketPrice);
} 