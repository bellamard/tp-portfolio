const listProjet= document.querySelector('#listProjet');
const cv= document.querySelector('')
fetch("http://localhost:3000/projets")
.then(function (response){
    return response.json();
})
.then(function(projets) {
    for (const projet of projets) {
        console.log(projet.img);
    }
});

