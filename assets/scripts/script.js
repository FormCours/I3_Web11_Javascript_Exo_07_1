'use strict';

// Recuperation des elements
const inputNbTable = document.getElementById('nb-table');
const inputNbOpe = document.getElementById('nb-ope');
const btnCalc = document.getElementById('btn-calc');
const container = document.getElementById('container-multi');

// Réaction au clic
btnCalc.addEventListener('click', () => {

    // Récuperation des valeurs
    const nbTable = parseInt(inputNbTable.value);
    const nbOpe = parseInt(inputNbOpe.value);
    console.log(`Table de ${nbTable} / Nb operation ${nbOpe}`);

    // Cleanup
    while(container.firstElementChild !== null) {
        container.removeChild(container.firstElementChild);
    }

    // Affichage du resultat
    let count = 1;
    while(count <= nbOpe) {

        const resultat = count * nbTable;
        console.log(resultat);

        const baliseP = document.createElement('p');
        baliseP.innerText = `${nbTable} x ${count} = ${resultat}`;
        container.appendChild(baliseP);

        count++;
    }
        
    // for(let i = 0; i <= nbOpe; i++) {
    //     // Traitement
    // }
});