// --- Exemple 1 : répéter une action pour chaque utilisateur ---
export {};
const utilisateurs = [
  "standard_user",
  "locked_out_user",
  "problem_user",
  "visual_user",
];

// for...of : "pour chaque utilisateur de la liste utilisateurs"
for (const utilisateur of utilisateurs) {
  // Ce bloc est exécuté une fois par élément du tableau
  console.log("Test de connexion avec :", utilisateur);
}

// --- Exemple 2 : combiner une boucle et une condition ---
const prixDesProduits = [29.99, 9.99, 15.99, 49.99];

for (const prix of prixDesProduits) {
  if (prix > 20) {
    console.log(prix, "$ : produit cher");
  } else {
    console.log(prix, "$ : produit abordable");
  }
}

console.log("Fin des vérifications");
