// Un tableau : une liste d'éléments, entre crochets [ ], séparés par des virgules
const utilisateurs = ["standard_user", "locked_out_user", "problem_user"];

// Afficher tout le tableau
console.log(utilisateurs);

// .length donne le nombre d'éléments ("length" = longueur)
console.log("Nombre d'utilisateurs :", utilisateurs.length);

// Accéder à un élément par sa position (on commence à compter à 0 !)
console.log("Premier utilisateur :", utilisateurs[0]);
console.log("Deuxième utilisateur :", utilisateurs[1]);

// .push() ajoute un élément à la fin du tableau
utilisateurs.push("visual_user");
console.log("Après ajout :", utilisateurs);
console.log("Nombre d'utilisateurs :", utilisateurs.length);
