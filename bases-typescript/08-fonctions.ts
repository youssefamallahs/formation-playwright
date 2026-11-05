export {};

// --- Exemple 1 : une fonction qui exécute des actions ---
// "function" + le nom + les paramètres entre parenthèses, avec leur type
function seConnecter(identifiant: string, motDePasse: string) {
  console.log("Saisie de l'identifiant :", identifiant);
  console.log("Saisie du mot de passe :", motDePasse);
  console.log("Clic sur Login");
}

// Appeler la fonction : son nom + les valeurs à lui donner
seConnecter("standard_user", "secret_sauce");
seConnecter("problem_user", "secret_sauce");

// --- Exemple 2 : une fonction qui RENVOIE un résultat avec "return" ---
// ": boolean" après les parenthèses annonce le type du résultat
function verifierTitre(titreAttendu: string, titreAffiche: string): boolean {
  return titreAttendu === titreAffiche;
}

// On range le résultat dans une boîte, puis on l'affiche
const resultat = verifierTitre("Products", "Products");
console.log("Le titre est correct ?", resultat);

// On peut aussi afficher le résultat directement
console.log("Le titre est correct ?", verifierTitre("Products", "Produits"));

// --- Exemple 3 : la "fonction fléchée", une autre façon d'écrire une fonction ---
const direBonjour = (prenom: string) => {
  console.log("Bonjour", prenom);
};

direBonjour("Youssef");
seConnecter("standard_user", "secret_sauce");
