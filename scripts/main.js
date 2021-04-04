// LOAD DATA OF HEROES
const loadData = heroes => {
    console.log(heroes)
};

// SEARCH SYSTEM

const charactersList = document.getElementById('match-list');
const searchBar = document.getElementById('search');
let hpCharacters = [];

let sizepage = 0
let i = 1
let temp = ""

function SizePage() {
    sizepage = 0
    i = 1
    console.log(sizepage)
    const e = document.getElementById("ChooserSize");
    sizepage = e.options[e.selectedIndex].value
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then(res => {
        res.json().then(data => {
            if (data.length > 0) {
                temp = "";
                data.forEach((u) => {
                    if (i <= sizepage) {
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
            document.getElementById("data").innerHTML = temp;
        })
    })
    console.log(sizepage)
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
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

loadCharacters();

// SORT SYSTEM

// DISPLAYING JSON DATA
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then(res => {
    res.json().then(data => {
        console.log(data);
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

function SizeDefault() {
    console.log("je refresh à chaque fois miskine")
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then(res => {
        res.json().then(data => {
            console.log(data);
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
}