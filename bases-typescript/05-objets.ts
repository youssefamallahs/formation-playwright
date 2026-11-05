// Un objet : une fiche qui regroupe plusieurs informations, entre accolades { }
// Chaque ligne : propriété (l'intitulé), deux-points, valeur, virgule
const utilisateur = {
  identifiant: "standard_user",
  motDePasse: "secret_sauce",
  estBloque: false,
};

// Afficher toute la fiche
console.log(utilisateur);

// Lire une propriété : le nom de l'objet, un point, le nom de la propriété
console.log("Identifiant :", utilisateur.identifiant);
console.log("Mot de passe :", utilisateur.motDePasse);

// Modifier une propriété
utilisateur.estBloque = true;
console.log("Bloqué ?", utilisateur.estBloque);

// On peut combiner : un tableau qui contient des objets
const produits = [
  { nom: "Sauce Labs Backpack", prix: 29.99 },
  { nom: "Sauce Labs Bike Light", prix: 9.99 },
];

// Le premier produit (index 0), puis sa propriété "nom" et sa propriété "prix"
console.log("Premier produit :", produits[0].nom, "-", produits[0].prix, "$");
