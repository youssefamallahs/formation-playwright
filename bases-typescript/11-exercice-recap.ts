import {
  urlSauceDemo,
  utilisateurStandard,
  utilisateurBloque,
} from "./donnees-de-test.ts";

// ============================================================
// ⚙️ SIMULATION DU SITE (fournie, ne pas modifier)
// ============================================================

// Attend un certain nombre de millisecondes (1000 ms = 1 seconde)
function attendre(millisecondes: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millisecondes));
}

// Simule l'ouverture d'une page (prend 0,5 seconde)
async function ouvrirLaPage(url: string): Promise<void> {
  await attendre(500);
  console.log("   Page ouverte :", url);
}

// Simule une tentative de connexion (prend 0,5 seconde)
// Renvoie le texte affiché à l'écran après le clic sur "Login"
async function seConnecter(
  identifiant: string,
  motDePasse: string,
): Promise<string> {
  await attendre(500);
  if (identifiant === "locked_out_user") {
    return "Epic sadface: Sorry, this user has been locked out.";
  }
  return "Products";
}

// ============================================================
// ✍️ À TOI DE JOUER
// ============================================================

// 1. Crée une fonction "async" nommée testerConnexion, avec 3 paramètres de type string :
//    identifiant, motDePasse, texteAttendu.
//    Elle doit, dans l'ordre :
//    a) afficher "Test :" suivi de l'identifiant
//    b) ouvrir la page urlSauceDemo (pense au await !)
//    c) se connecter, et ranger le texte renvoyé dans une boîte nommée texteAffiche
//    d) comparer texteAffiche et texteAttendu :
//       - s'ils sont égaux, afficher "✅ Test réussi"
//       - sinon, afficher "❌ Test échoué : attendu", texteAttendu, "mais reçu", texteAffiche

// 2. Crée une fonction "async" nommée lancerLesTests, qui appelle testerConnexion deux fois :
//    - avec utilisateurStandard : le texte attendu est "Products"
//    - avec utilisateurBloque : le texte attendu est "Epic sadface: Sorry, this user has been locked out."

// 3. Appelle lancerLesTests()

async function testerConnexion(
  identifiant: string,
  motDePasse: string,
  texteAttendu: string,
): Promise<void> {
  console.log("Test :", identifiant);
  await ouvrirLaPage(urlSauceDemo);
  const texteAffiche = await seConnecter(identifiant, motDePasse);

  if (texteAffiche === texteAttendu) {
    console.log("✅ Test réussi");
  } else {
    console.log("❌ Test échoué : attendu", texteAttendu, "mais reçu", texteAffiche);
  }
}

async function lancerLesTests(): Promise<void> {
  await testerConnexion(
    utilisateurStandard.identifiant,
    utilisateurStandard.motDePasse,
    "Products",
  );
  await testerConnexion(
    utilisateurBloque.identifiant,
    utilisateurBloque.motDePasse,
    "Epic sadface: Sorry, this user has been locked out.",
  );
}

lancerLesTests();
