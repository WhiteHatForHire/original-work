const buildingSelect = document.querySelectorAll('.building');
const buildingArea = document.getElementById('buildingsBuilt');
const cash = document.getElementById('cash');
var cashBalance = 1000;
var buildingsBuilt = [];

// Event Listener for Building Click
buildingSelect.forEach(buidling => buidling.addEventListener('click', buy))

function buy(e) {
    const buildingSelection = e.target.id;
    console.log(buildingArea);
    purchase(buildingSelection);
    updateCash();
    updateBuildings();
}


function purchase(b) {
    if(b === 'torii-gate') {
        cashBalance = cashBalance - 100;
        buildingsBuilt += '<i id="torii-gate" class="building fas fa-torii-gate"></i>'
    } else if (b === 'mosque') {
        cashBalance = cashBalance - 100;
        buildingsBuilt += '<i id="mosque" class="building fas fa-mosque"></i>'
    
    } else if (b === 'place-of-worship') {
        cashBalance = cashBalance - 100;
        buildingsBuilt += '<i id="place-of-worship" class="building fas fa-place-of-worship"></i>'
    
    } else if (b === 'church') {
        cashBalance = cashBalance - 100;
        buildingsBuilt += '<i id="church" class="building fas fa-church"></i>'
    
    } else if (b === 'gopuram') {
        cashBalance = cashBalance - 100;
        buildingsBuilt += '<i id="gopuram" class="building fas fa-gopuram"></i>'
    
    } else if (b === 'kaaba') {
        cashBalance = cashBalance - 100;
        buildingsBuilt += '<i id="kaaba" class="building fas fa-kaaba"></i>'
    
    } else if (b === 'vihara') {
        cashBalance = cashBalance - 100;
        buildingsBuilt += '<i id="vihara" class="building fas fa-vihara"></i>'
    
    } else if (b === 'synagogue') {
        cashBalance = cashBalance - 100;
        buildingsBuilt += '<i id="synagogue" class="building fas fa-synagogue"></i>'
    }
    
    console.log(buildingsBuilt);
    console.log(cashBalance);
    // return buildingsBuilt;
}

function updateBuildings() {
    buildingArea.innerHTML = buildingsBuilt;
}

function updateCash() {
    cash.innerHTML = `$ ${cashBalance}`;
}

// console.log(buildings);