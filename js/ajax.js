const listProjet = document.querySelector('#listProjet');
const cv = document.querySelector('#cv');
const ul = document.createElement('ul');
const imgbox = document.querySelector('#imgbox');
const textbox = document.querySelector('#textbox');
const blocprojet = document.querySelector('#blocprojet');


fetch("https://my-json-server.typicode.com/bellamard/tp-portfolio/moi")
    .then((reponse) => {
        return reponse.json();
    })
    .then((moi) => {
        for (const key of moi) {
            for (const iterator of key.noms) {
                const nom = document.createElement('h1');
                nom.innerHTML = `${iterator.prenom} ${iterator.nom}`;
                textbox.appendChild(nom);
            }

            const com = document.createElement('p');
            com.innerHTML = key.commentaire;
            textbox.appendChild(com);
        }

    })

fetch("https://my-json-server.typicode.com/bellamard/tp-portfolio/cv")
    .then((reponse) => {
        return reponse.json();
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

fetch("https://my-json-server.typicode.com/bellamard/tp-portfolio/projets")
    .then(function (response) {
        return response.json();
    })
    .then(function (projets) {
        for (const projet of projets) {
            const bloc = document.createElement('div');
            bloc.classList.add('bloc');

            const blocp = document.createElement('div');
            blocp.classList.add('blocp');
            
            const blocimg= document.createElement('div');
            blocimg.classList.add('bloc-img');
            const imgprojet=document.createElement('img');
            imgprojet.setAttribute('src', projet.img);
            blocimg.appendChild(imgprojet);
            blocp.appendChild(blocimg);

            const bloctext= document.createElement('div');
            bloctext.classList.add('bloc-text');
            const titreprojet=document.createElement('h3');
            titreprojet.innerHTML=projet.titre1;
            const date= document.createElement('span');
            date.innerHTML=projet.date;
            const contenu= document.createElement('p');
            contenu.innerHTML=projet.contenu;
            bloctext.appendChild(titreprojet);
            bloctext.appendChild(date);
            
            blocp.appendChild(bloctext);

            bloc.appendChild(blocp);

            bloc.appendChild(contenu);

            bloc.addEventListener('click', ()=>{
                const apercus=document.querySelector('#apercus');
                const liens=document.querySelector('#liens');
                apercus.setAttribute('src', projet.img);
                liens.setAttribute('href', projet.liens)

            })

            blocprojet.appendChild(bloc);
        }
    });

