export {};

// ⚙️ La même simulation de chargement lent (2 secondes)
function chargerLaPage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Page d'accueil de SauceDemo"), 2000);
  });
}

// --- Le scénario, AVEC attente ---
// "async" devant la fonction : elle contient des attentes
async function scenarioDeTest() {
  console.log("1. Je demande le chargement de la page...");

  // "await" : attends que la promesse soit tenue (que le bipeur sonne)
  const page = await chargerLaPage();

  console.log("2. Je lis la page :", page);
  console.log("3. Je clique sur le bouton Login");
}

// On lance le scénario
scenarioDeTest();
