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

// fetch("http://localhost:3000/competence")
//   .then((reponse) => {
//     return reponse.json();
//   })
//   .then((competence) => {
//     for (const key of competence) {
//       for (const iterator of key.frontend) {
//         const item_frontend = document.createElement("li");
//         item_frontend.innerText = iterator.name;
//         frontend.appendChild(item_frontend);
//       }
//       for (const iterator of key.backend) {
//         const item_backend = document.createElement("li");
//         item_backend.innerText = iterator.name;
//         backend.appendChild(item_backend);
//       }
//       for (const iterator of key.ci) {
//         const item_ci = document.createElement("li");
//         item_ci.innerText = iterator.name;
//         ci.appendChild(item_ci);
//       }
//       for (const iterator of key.autre) {
//         const item_autre = document.createElement("li");
//         item_autre.innerText = iterator.name;
//         autre.appendChild(item_autre);
//       }
//       for (const iterator of key.bdd) {
//         const item_bdd = document.createElement("li");
//         item_bdd.innerText = iterator.name;
//         bdd.appendChild(item_bdd);
//       }
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

fetch("http://localhost:3000/projet")
  .then((reponse) => {
    return reponse.json();
  })
  .then((projet) => {
    for (const key of projet) {
      const projet_item = document.createElement("a");
      projet_item.setAttribute("href", key.url);
      projet_item.innerText = key.title;
      // projets.appendChild(projet_item);
      console.log(key.url);
    }
  })
  .catch((error) => {
    console.log(error);
  });
