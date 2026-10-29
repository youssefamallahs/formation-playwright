// string : du texte, entre guillemets
const identifiant: string = "standard_user";
const motDePasse: string = "secret_sauce";

// number : un nombre, sans guillemets (point pour les décimales)
const nombreDeProduits: number = 6;
const prixDuSacADos: number = 29.99;

// boolean : vrai (true) ou faux (false)
let estConnecte: boolean = false;

console.log("Identifiant :", identifiant);
console.log("Nombre de produits :", nombreDeProduits);
console.log("Prix du sac à dos :", prixDuSacADos);
console.log("Connecté ?", estConnecte);

// L'utilisateur vient de se connecter
estConnecte = true;
console.log("Connecté ?", estConnecte);
