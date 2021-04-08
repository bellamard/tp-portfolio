const listProjet = document.querySelector('#listProjet');
const cv = document.querySelector('#cv');
const ul = document.createElement('ul');
const imgbox = document.querySelector('#imgbox');
const textbox = document.querySelector('#textbox');

fetch("http://localhost:3000/moi")
    .then((response) => {
        return response.json();
    })
    .then((moi) => {
        for (const key of moi) {
            for (const iterator of key.noms) {
                const nom= document.createElement('h1');
                nom.innerHTML=`${iterator.prenom} ${iterator.nom}`;
                textbox.appendChild(nom);
            }

            const com= document.createElement('p');
            com.innerHTML=key.commentaire;
            textbox.appendChild(com);
        }

    })

fetch("http://localhost:3000/cv")
    .then((response) => {
        return response.json();
    })
    .then((cv) => {
        for (const key of cv) {

            for (const iterator of key.noms) {

                const nom = document.createElement('li');
                nom.innerHTML = `Noms: ${iterator.nom}- ${iterator.postnom}`;
                ul.appendChild(nom);

            }

            const prenom = document.createElement('li');
            prenom.innerHTML = `Prénom: ${key.prenom}`;
            ul.appendChild(prenom);

            const nation = document.createElement('li');
            nation.innerHTML = `Nationalité: ${key.nationalité}`;
            ul.appendChild(nation);

            const profes = document.createElement('li');
            profes.innerHTML = `Profession: ${key.profession}`;
            ul.appendChild(profes);

            const imgcv = document.createElement('img');
            imgcv.setAttribute('src', key.img);
            imgbox.appendChild(imgcv);

            const pdf = document.createElement('a');
            pdf.setAttribute('href', key.pdf)
            pdf.innerHTML = "TELECHARGER ICI"
            imgbox.appendChild(pdf);


        }
    });
cv.appendChild(ul);

fetch("http://localhost:3000/projets")
    .then(function (response) {
        return response.json();
    })
    .then(function (projets) {
        for (const projet of projets) {
            console.log(projet.img);
        }
    });

