const loadData = heroes => {
    console.log(heroes)
};

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');



const searchStates = async searchText => {
    const res = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json');
    const states = await res.json();

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    };
    outputHtml(matches);
};

const outputHtml = matches => {
    if (matches.length >= 0) {
        const html = matches.map(match => `
            <div class="match-list>
                <h4>${match.name}</h4>
        `).join('');
        matchList.innerHTML = html;
        console.log(html);
    };
};


// Selection de toutes les en-têtes des colonnes
const th = document.querySelectorAll('th')

// On parcours les en-tête afin d'exécuter le tri sur la colonne choisie
for (let indexTH = 0; indexTH < th.length; indexTH++) {
    // Ajout d'un évenement lors d'un click 
    th[indexTH].addEventListener('click', item(indexTH))
}

// Retourne fonction anonyme qui exécute le tri
function item(c) {
    return function() {
        sort(c)
    }
}

function sort(indexOfRow) {
    // Sélection des balises html voulu
    const tbody = document.querySelector('tbody');
    const trxb = tbody.querySelectorAll('tr');

    let index

    // Le tableau sera le résultat du tri 
    let tableau = new Array()

    for (index = 0; index < (trxb.length); index++) {
        // On va pousser tout les élément de la colonne voulu dans le tableau vide
        tableau.push(trxb[index].querySelectorAll("TD")[indexOfRow].innerHTML)


        var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
        // On tri ce table
        tableau.sort(collator.compare)

        
        for (let indexTable = 0; indexTable <= tableau.length; indexTable++) {
            trxb[index].querySelectorAll("TD")[indexOfRow].appendChild(tableau[indexTable])
        }
    }
    
    console.log(tableau)

}


search.addEventListener('input', () => searchStates(search.value));

fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then(res => {
    res.json().then(data => {
        console.log(data);
        if (data.length > 0) {
            var temp = "";
            data.forEach((u) => {
                temp += "<tr>";
                temp += "<td>" + "<img src="+ u.images.xs+">" + "</td>";
                temp += "<td>" + u.name + "</td>";
                temp += "<td>" + u.biography.fullName + "</td>";
                temp += "<td>" + u.powerstats.intelligence + "</td>";
                temp += "<td>" + u.powerstats.strength + "</td>";
                temp += "<td>" + u.powerstats.speed + "</td>";
                temp += "<td>" + u.powerstats.durability + "</td>";
                temp += "<td>" + u.powerstats.power + "</td>";
                temp += "<td>" + u.powerstats.combat + "</td>";
                temp += "<td>" + u.appearance.race + "</td>";
                temp += "<td>" + u.appearance.gender + "</td>";
                temp += "<td>" + u.appearance.height + "</td>";
                temp += "<td>" + u.appearance.weight + "</td>";
                temp += "<td>" + u.biography.placeOfBirth + "</td>";
                temp += "<td>" + u.biography.alignment + "</td></tr>";
            })
            document.getElementById("data").innerHTML = temp;
        }
    })
})