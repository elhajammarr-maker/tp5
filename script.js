const etudiants = [];
const formulaire = document.getElementById("Formetudiant");
const Liste = document.getElementById("listeEtudiante");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const Email = document.getElementById("email");
const Age = document.getElementById("age");
const btnAjouter = document.getElementById("btnAjouter");
const btnAnnuler = document.getElementById("btnAnnuler");
formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  let nouvelleEtudiant = {
    id: Data.now(),
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    age: age.value,
  };
  etudiants.push(nouvelleEtudiant);
  alert("etudiants ajouter avec succes");
});
function AfficherEtudiant() {
  Liste.replaceChildren();
  etudiants.forEach(function (etudiant) {
    let list = document.createElement("tr");
    let CId = document.createElement("td");
    let Cnom = document.createElement("td");
    let Cprenom = document.createElement("td");
    let Cemail = document.createElement("td");
    let CAction = document.createElement("td");
    CId.textContent = etudiant.id;
    Cnom.textContent = etudiant.nom;
    Cprenom.textContent = etudiant.prenom;
    Cemail.textContent = etudiant.email;
    CAction.textContent = etudiant.Action;
    creation.bouton;
    btnModifier.className(modifier);
    btnModifier.textContient = modifier;
    CAction.appendChild(btnModifier);
    CAction.appendChild(btnsupp);
    ligne.appendChild(CID);
    ligne.appendChild(Cnom);
    ligne.appendChild(Cprenom);
    ligne.appendChild(Cemail);
    ligne.appendChild(CAction);
    list.appendChild(ligne);
  });
}
