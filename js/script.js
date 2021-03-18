// chiedere nome
var nome = prompt('Dimmi il nome');
console.log(nome);

//chiedere cognome
var cognome = prompt('Dimmi il cognome');
console.log(cognome);

//chiedere colore
var colore = prompt('Dimmi il tuo colore preferito');
console.log(colore);

//scritta che appare
var password;
password = nome + cognome + colore + 21

//mostrare le variabili
document.getElementById('password').innerHTML = (password);