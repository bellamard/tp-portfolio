let name_profil = document.querySelector("#name_profil");
let img_profil = document.querySelector("#img_profil");
let icon_link = document.querySelector("#icon_link");
let frontend = document.querySelector("#frontend");
let backend = document.querySelector("#backend");
let bdd = document.querySelector("#bdd");
let ci = document.querySelector("#ci");
let autre = document.querySelector("#autre");
let projets = document.querySelector("#projets");

fetch("http://localhost:3000/profil")
  .then((response) => {
    return response.json();
  })
  .then((description) => {
    const key = description;
    const nom = document.createElement("h3");
    nom.innerHTML = `${key.prenom} ${key.nom}`;
    const fonction = document.createElement("span");
    fonction.innerHTML = key.fonction;
    name_profil.appendChild(nom);
    name_profil.appendChild(fonction);
    img_profil.setAttribute("src", key.url_img);
  })
  .catch((error) => {
    console.log(error);
    const erreur = document.createElement("h3");
    erreur.innerHTML = ":: erreur donnée non envoie";
    name_profil.appendChild(erreur);
  });

fetch("http://localhost:3000/reseaux")
  .then((reponse) => {
    return reponse.json();
  })
  .then((reseaux) => {
    for (const key of reseaux) {
      const link = document.createElement("a");
      link.setAttribute("href", key.lien);
      const icon_rx = document.createElement("i");
      icon_rx.className = `bi bi-${key.name}`;
      icon_link.appendChild(link);
      link.appendChild(icon_rx);
    }
  })
  .catch((error) => {
    console.log(error);
  });
