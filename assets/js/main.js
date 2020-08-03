
  let ABVValue = document.getElementById("ABVSlider").value;
  let IBUValue = document.getElementById("IBUSlider").value;

//Set Button values based on slider
document.getElementById("abv-slider-value").innerHTML = ABVValue;
document.getElementById("ibu-slider-value").innerHTML = IBUValue;


function updateABVButton() {
  let ABVValue = document.getElementById("ABVSlider").value;
  document.getElementById("abv-slider-value").innerHTML =  ABVValue;
}

function updateIBUButton() {
  let IBUValue = document.getElementById("IBUSlider").value;
  document.getElementById("ibu-slider-value").innerHTML =  IBUValue;
}
//Fetch Data from punkAPI

async function getDataABV(){

  console.log(ABVValue);
  console.log(typeof(IBUValue));
 // sample API command  https://api.punkapi.com/v2/beers?page=2&per_page=80
    await fetch(`https://api.punkapi.com/v2/beers?` + `abv_gt=${ABVValue}`+ `&per_page=80`)
      .then(response => response.json())
      .then(data => console.log(data));
       
    }
    

 //Calculators Section
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });
//Calculate Alcohol Content based on Inital and Final Gravity:

function calcABV(){
   let ig =  parseFloat(document.getElementById("initialGravity").value);
   let fg = parseFloat(document.getElementById("finalGravity").value);
   //ABV = (OG - FG) * 131.25
   let abv = ((ig -fg) * 131.25);
   
   document.getElementById("ABVResult").value = `Alcohol Content = ${abv.toFixed(2)} %`;
};
//Reset Text Areas in ABV Calculator:
function resetABV(){
    document.getElementById("initialGravity").value = "";
    document.getElementById("finalGravity").value = "";
    document.getElementById("ABVResult").value = "";
    alert('ABV Calculator Reset');

}
