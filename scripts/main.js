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

function test() {
    const tbody = document.querySelector('tbody');
    //const thx = document.querySelectorAll('th');
    const trxb = tbody.querySelectorAll('tr');
    let shouldSwitch, element, nextElement, index
    let click = true
    while (click) {
        click = false
        for (index = 0; index < (trxb.length - 1); index++) {
            shouldSwitch = false

            element = trxb[index].getElementsByTagName("TD")[index];
            nextElement = trxb[index + 1].getElementsByTagName("TD")[index];
            
            if (element.innerHTML.toLowerCase() > nextElement.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
        }
        if (shouldSwitch) {
            trxb[index].parentNode.insertBefore(trxb[index + 1], trxb[index]);
            switching = true;
          }
    }
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