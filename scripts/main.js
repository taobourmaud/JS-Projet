// LOAD DATA OF HEROES
const loadData = heroes => {
    console.log(heroes)
};

// Animation
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return alphabet[rand(0, alphabet.length - 1)]
}

function getRandomWord(word) {
    var text = word.innerHTML

    var finalWord = ''
    for (var i = 0; i < text.length; i++) {
        finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
    }

    return finalWord
}

var word = document.querySelector('h1')
var interv = 'undefined'
var canChange = false
var globalCount = 0
var count = 0
var INITIAL_WORD = word.innerHTML;
var isGoing = false

function init() {
    if (isGoing) return;

    isGoing = true
    var randomWord = getRandomWord(word)
    word.innerHTML = randomWord

    interv = setInterval(function() {
        var finalWord = ''
        for (var x = 0; x < INITIAL_WORD.length; x++) {
            if (x <= count && canChange) {
                finalWord += INITIAL_WORD[x]
            } else {
                finalWord += getRandomLetter()
            }
        }
        word.innerHTML = finalWord
        if (canChange) {
            count++
        }
        if (globalCount >= 20) {
            canChange = true
        }
        if (count >= INITIAL_WORD.length) {
            clearInterval(interv)
            count = 0
            canChange = false
            globalCount = 0
            isGoing = false
        }
        globalCount++
    }, 50)

}



word.addEventListener('mouseenter', init)

// SEARCH SYSTEM

const charactersList = document.getElementById('match-list');
const searchBar = document.getElementById('search');
let hpCharacters = [];

let sizepage = 0 // initialisation de 3 variables pour bien gèrer la taille des pages.
let i = 1
let temp = ""

function SizePage() {    // fonction changeant la taille dès que le select est modifié.
    sizepage = 0 // on redéclare ses 2 variables pour qu'à chaque fois que le Select est modifié on est pas d'erreur.
    i = 1
    const e = document.getElementById("ChooserSize"); // on récupère la valeur du select.
    sizepage = e.options[e.selectedIndex].value
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then(res => {
        res.json().then(data => {
            if (data.length > 0) {
                temp = "";
                data.forEach((u) => {    // on parcourt data qui est la variables contenant le fichier JSON
                    if (i <= sizepage) { // On va effectuer la suite seulement le nombre de fois que l'on veut, c'est à dire par rapport à ce qui est choisi pour le select.
                        i++
                        temp += "<tr>";
                        temp += "<td>" + "<img src=" + u.images.xs + ">" + "</td>";
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
                    }
                })
            }
            document.getElementById("data").innerHTML = temp; // On écrit sur le HTML la variable temp qui contient le tableau à mettre écrit déjà en HTML
        })
    })
}

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    var temp = "";
    filteredCharacters.forEach((u) => {
        temp += "<tr>";
        temp += "<td>" + "<img src=" + u.images.xs + ">" + "</td>";
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
});

const loadCharacters = async() => {
    try {
        const res = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json');
        hpCharacters = await res.json();
    } catch (err) {
        console.error(err);
    }
};

loadCharacters();

// SORT SYSTEM

// DISPLAYING JSON DATA
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then(res => {
    res.json().then(data => {
        if (data.length > 0) {
            var temp = "";
            data.forEach((u) => {
                temp += "<tr>";
                temp += "<td>" + "<img src=" + u.images.xs + ">" + "</td>";
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

// Fonction pour que la page soit de taille 20 par défault.
// C'est le même principe que la fonction SizePage sauf qu'ici, les valeurs sont en brutes et pas des variables.
function SizeDefault() {
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then(res => {
        res.json().then(data => {
            if (data.length > 0) {
                var temp = "";
                data.forEach((u) => {
                    if (i <= 20) {
                        temp += "<tr>";
                        temp += "<td>" + "<img src=" + u.images.xs + ">" + "</td>";
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
                        i++
                    }
                })
            }
            document.getElementById("data").innerHTML = temp;
        })
    })
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

    let index, result

    // Le tableau sera le résultat du tri 
    let tableau = new Array()

    for (index = 0; index < (trxb.length); index++) {
        // On va pousser tout les élément de la colonne voulu dans le tableau vide
        tableau.push(trxb[index].querySelectorAll("TD")[indexOfRow].innerHTML)

        result = trxb[index].querySelectorAll("TD")[indexOfRow].innerHTML
        var collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
        // On tri cette table
        tableau.sort(collator.compare)

        result.replace(tableau, trxb[index].querySelectorAll[indexOfRow])
    }

    console.log(tableau)

}