// const : une boîte scellée, son contenu ne changera jamais
const prenom = "Youssef";
const siteDeTest = "https://www.saucedemo.com";

// let : une boîte qu'on peut rouvrir, son contenu peut changer
let nombreDeTestsReussis = 0;

// On affiche le contenu des boîtes
console.log(prenom);
console.log("Site testé :", siteDeTest);
console.log("Tests réussis :", nombreDeTestsReussis);

// Un test vient de réussir : on change le contenu de la boîte "let"
nombreDeTestsReussis = 1;
console.log("Tests réussis :", nombreDeTestsReussis);
