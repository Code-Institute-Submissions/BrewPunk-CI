var data;

async function getDataABV() {
  let ABVValue = document.getElementById("ABVSlider").value;
  // sample API command  https://api.punkapi.com/v2/beers?page=2&per_page=80
  var response = await fetch(
    `https://api.punkapi.com/v2/beers?` + `abv_gt=${ABVValue}` + `&per_page=20`
  );
  data = await response.json();
  return data;
}

async function getDataIBU() {
  let IBUValue = document.getElementById("IBUSlider").value;
  // sample API command  https://api.punkapi.com/v2/beers?page=2&per_page=80
  var response = await fetch(
    `https://api.punkapi.com/v2/beers?` + `ibu_gt=${IBUValue}` + `&per_page=20`
  );
  data = await response.json();
  return data;
}

async function getDataABVIBU() {
  let IBUValue = document.getElementById("IBUSlider").value;
  let ABVValue = document.getElementById("ABVSlider").value;
  // sample API command  https://api.punkapi.com/v2/beers?page=2&per_page=80
  var response = await fetch(
    `https://api.punkapi.com/v2/beers?` +
      `abv_gt=${ABVValue}&ibu_gt=${IBUValue}` +
      `&per_page=20`
  );
  data = await response.json();
  return data;
}

//  Get Random Beer and Display on main page //
async function getDataRandom() {
  // sample API command  https://api.punkapi.com/v2/beers?page=2&per_page=80
  var response = await fetch("https://api.punkapi.com/v2/beers/random");
  data = await response.json();
  return data;
}

//  API  Templates for display of Data from api on return of MASH / MALTS/ HOPs / Yeast/Twist / Food  ///

function mashTemplate(beerMethod) {
  return `
  <ul class="list-group list-group-flush">
  ${beerMethod
    .map(
      (item) =>
        `<li class="list-group-item">${item.duration} mins at ${item.temp.value} &degc</li>`
    )
    .join("")}
  </ul>
  `;
}

function maltsTemplate(malts) {
  return `
    <ul class="list-group list-group-flush">
    ${malts
      .map(
        (item) => `
    <li class="list-group-item">Malt: ${item.name}</li>
    <li class="list-group-item"> ${item.amount.value} ${item.amount.unit}</li>
    `
      )
      .join("")}
    </ul>
    `;
}

function hopsTemplate(hops) {
  return `
    <ul class="list-group list-group-flush">
    ${hops
      .map(
        (item) => `
    <li class="list-group-item">Hop: ${item.name}</li>
    <li class="list-group-item">Attribute: ${item.attribute}</li>
    <li class="list-group-item">Add: ${item.add}</li>
    <li class="list-group-item">Qty: ${item.amount.value} ${item.amount.unit}</li>
    <hr>
    `
      )
      .join("")}
    </ul>
    `;
}

function yeastTemplate(yeast) {
  return `
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Yeast: ${yeast}</li>
    <hr>
    </ul>
    `;
}

function twistTemplate(twist) {
  return `
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Twist: ${twist}</li>
      <hr>
      </ul>
      `;
}

function foodTemplate(food) {
  return `
    <ul class="list-group list-group-flush">
    ${food.map((item) => `<li class="list-group-item">${item} </li>`).join("")}
    </ul>
    `;
}

/// Main Beer Template Function to display cards on retrieval of DATA from Punk API //

function beerTemplate(beer) {
  return `
    <div class="col s12 m12 l6 beer-card">
    <div class="card hoverable">
    <div class="card-image waves-effect waves-block waves-light materialboxed">
  <img class="activator beer-photo" src="${
    beer.image_url ? beer.image_url : "https://images.punkapi.com/v2/7.png"
  }" id="${beer.name}" alt="beer-image">
  </div>
  <div class="card-content">
  <span class="card-title activator black-text text-darken-4">${
    beer.name
  }<i class="material-icons right">expand_less</i></span>
  <h2 class="deep-orange-text">ABV ${
    beer.abv
  }%  <span class="new badge blue" data-badge-caption="IBU">${
    beer.ibu
  }</span></h2>
    <p>${beer.description}</p>
    <hr>
    <h4 class="deep-orange-text center"><em>"${beer.tagline}"</em></h4>
    <hr>
    <h5 >Tips from the Brewer!</h5>
    <p>${beer.brewers_tips}</p>
    <hr>
    </div>
    <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">${
      beer.name
    }<i class="material-icons right">close</i></span>
    <h5 class="card-title deep-orange-text center">Ingredients</h5>
    <h6 class="card-title">Malts</h6>
  ${beer.ingredients.malt ? maltsTemplate(beer.ingredients.malt) : ""}
    <hr>
    <h6 class="card-title">Hops</h6>
    ${beer.ingredients.hops ? hopsTemplate(beer.ingredients.hops) : ""}
    <hr>
    <h6 class="card-title">Yeast</h6>
    ${beer.ingredients.yeast ? yeastTemplate(beer.ingredients.yeast) : ""}
    <h5 class="card-title deep-orange-text center">Mash Method</h5>
  ${beer.method.mash_temp ? mashTemplate(beer.method.mash_temp) : ""}
  <h6 class="card-title deep-orange-text center">Twist</h6>
  ${beer.method.twist ? twistTemplate(beer.method.twist) : ""}
  <hr>
  <h4 class="card-title deep-orange-text center">Food Pairings</h4>
  ${beer.food_pairing ? foodTemplate(beer.food_pairing) : ""}
  <hr>
  <h4 class="card-title deep-orange-text center">Stats</h4>
  <ul>
    <li>IBU : ${beer.ibu}</li>
    <li>EBC: ${beer.ebc}</li>
    <li>Target Original Gravity:${beer.target_og} </li>
    <li>Target Final Gravity: ${beer.target_fg}</li>
    <li>Boil Volume: ${beer.boil_volume.value} ${beer.boil_volume.unit}</li>
    <li>Final Volume: ${beer.volume.value} ${beer.volume.unit}</li>
    <li class="list-group-item">Fermentation Temp: ${
      beer.method.fermentation.temp.value
    } ${beer.method.fermentation.temp.unit}</li>
  </ul>
    <h4 class="card-title">First Brewed: ${beer.first_brewed}</h4>
</div>
</div>
</div>

`;
}

// TODO -- Creatmenu based off retrieval of DATa to select Beer
function createMenu(data) {
  let i = 0;
  document.getElementById("beerSelector").innerHTML ='<option value="0" disabled selected>Choose your option</option>';
  for (i = 0; i < data.length; i++) {
    document.getElementById("beerSelector").innerHTML += `
    <option value="${i + 1}">${data[i].name}--${data[i].abv}%</option>`;
  }
  document.getElementById("selectorLabel").innerText = "Beer Select"; 
  $(document).ready(function () {
    $('#beerSelector').formSelect();
  });
}

/// GET Alcohol by Volume function call on Get REcipes by ABV button
function getABV() {
  getDataABV().then((data) => {
    console.log(data);
    document.getElementById("root").innerHTML = `
    <h1 class="center">ABV Recipe Results</h1>
    <div class="row center"> ${data.map(beerTemplate).join("")}</div>
    `;
    createMenu(data);
   // return data;
  });
}

/// GET Bitteness unit function call on Get REcipes by IBU button
function getIBU() {
  getDataIBU().then((data) => {
    console.log(data);
    document.getElementById("root").innerHTML = `
      <h1 class="center">IBU Recipe Results</h1>
      <div class="row center"> ${data.map(beerTemplate).join("")}</div>
      `;
    // createMenu(data);
  });
}

/// GET Bitteness + ABV  unit function call on Get REcipes by IBU and ABV button
function getABVIBU() {
  getDataABVIBU().then((data) => {
    console.log(data);
    document.getElementById("root").innerHTML = `
        <h1 class="center">ABV IBU Recipe Results</h1>
        <div class="row center"> ${data.map(beerTemplate).join("")}</div>
        `;
    // createMenu(data);
  });
}

// Load Random Beer on loading of Browser window ///
window.onload = function getRandom() {
  getDataRandom().then((data) => {
    console.log(data);
    document.getElementById("random").innerHTML = `
     
      <div class="row center"> 
      ${data.map(beerTemplate).join("")}</div>
      `;
    // createMenu(data);
  });
};
