let longueur = 0;
let nb_mots = 1;
let nb_voyelles = 0;
const vowels =["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

let phrase = ("Veuillez saisir une phrase qui se termine par un point :");
longueur=phrase.length()
for (let i = 0; i < longueur; i++) {
    if (phrase[i] === " ") {
        nbMots++;
    }
}
if (vowels.includs(phrase[i])) {
    nbVoyelles++;
}   
    

console.log("Longueur de la phrase :", longueur);
console.log("Nombre de mots :", nbMots);
console.log("Nombre de voyelles :", nbVoyelles);
