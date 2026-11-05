// --- Exemple 1 : vérifier un titre, comme dans un cas de test ---
const titreAttendu: string = "Products";
const titreAffiche: string = "Product";

// if : "si". La question (la condition) se pose entre parenthèses ( )
// === signifie "est strictement égal à"
if (titreAffiche === titreAttendu) {
  // Ce bloc s'exécute seulement si la condition est VRAIE
  console.log("✅ Test réussi : le titre est correct");
} else {
  // else : "sinon". Ce bloc s'exécute seulement si la condition est FAUSSE
  console.log(
    "❌ Test échoué : attendu",
    titreAttendu,
    "mais reçu",
    titreAffiche,
  );
}

// --- Exemple 2 : plusieurs cas possibles avec "else if" ("sinon, si") ---
const nombreArticlesPanier: number = 3;

if (nombreArticlesPanier === 0) {
  console.log("Le panier est vide");
} else if (nombreArticlesPanier === 1) {
  console.log("Le panier contient 1 article");
} else {
  console.log("Le panier contient", nombreArticlesPanier, "articles");
}
