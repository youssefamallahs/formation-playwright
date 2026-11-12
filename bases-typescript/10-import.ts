// "import" : on emprunte ce que l'autre fichier a mis en rayon
// { ... } : la liste des boîtes qu'on veut emprunter
// from "./donnees-de-test.ts" : le fichier où elles se trouvent
import {
  urlSauceDemo,
  utilisateurStandard,
  utilisateurBloque,
} from "./donnees-de-test.ts";

console.log("Site à tester :", urlSauceDemo);
console.log("Connexion avec :", utilisateurStandard.identifiant);
console.log("Connexion avec :", utilisateurBloque.identifiant);
