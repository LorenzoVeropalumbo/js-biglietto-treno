// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

alert("Crea il tuo biglietto")

// Km of travel
let TotalKm = prompt("Quanti Km di percorreza dei fare")

// Check if TotalKm is a numer string
if (isNaN(TotalKm)) {
  alert("Insterici un valure numerico")
  TotalKm = prompt("Quanti Km di percorreza dei fare")
}


// passenger Age 
let UserAge = prompt("Inserisci la tua età")

// Check if passenger Age is a numer string
if (isNaN(UserAge)) {
  alert("Insterici un valure numerico")
  UserAge = prompt("Inserisci la tua età")
}