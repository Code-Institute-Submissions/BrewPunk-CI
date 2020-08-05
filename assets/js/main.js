
  let ABVValue = document.getElementById("ABVSlider").value;
  let IBUValue = document.getElementById("IBUSlider").value;

//Set Button values based on slider
document.getElementById("abv-slider-value").innerHTML = ABVValue;
document.getElementById("ibu-slider-value").innerHTML = IBUValue;
document.getElementById("abvibu-slider-value").innerHTML = `ABV > ${ABVValue}% + IBU > ${IBUValue}`;


function updateABVButton() {
  let ABVValue = document.getElementById("ABVSlider").value;
  document.getElementById("abv-slider-value").innerHTML =  ABVValue;
}

function updateIBUButton() {
  let IBUValue = document.getElementById("IBUSlider").value;
  document.getElementById("ibu-slider-value").innerHTML =  IBUValue;
}

function updateABVIBUButton() {
  let ABVValue = document.getElementById("ABVSlider").value;
  let IBUValue = document.getElementById("IBUSlider").value;
  document.getElementById("abvibu-slider-value").innerHTML = `ABV > ${ABVValue}% + IBU > ${IBUValue}`;
}
    
///////////////////////////////
////Calculators Section //////
//////////////////////////////

// initialise selectors
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#sugarSelect');
  var instances = M.FormSelect.init(elems, {});
});
//Calculate [ABV] Alcohol Content based on Inital and Final Gravity:

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
// END -- ABV Calculation

//Calculate Priming Sugar ///////////

function calcPrimingSugar(){
  let vb =  parseFloat(document.getElementById("initialAmount").value);
  let cd = parseFloat(document.getElementById("volumeCO2").value);
  let temp = parseFloat(document.getElementById("initialTemp").value);
  //PS = 15.195 * VB (cd  - 3.0378 + 5.0062 - 2.6555*10^-2 *T * 10^-4 *T^2)
  let ps = ((vb -cd) * 131.25 +  temp);
  
  document.getElementById("sugarResult").value = `Sugar Amount = ${ps.toFixed(2)} grams`;
};
//Reset Text Areas in PS Calculator:
function resetPrimingSugar(){
   document.getElementById("initialAmount").value = "";
   document.getElementById("volumeCO2").value = "";
   document.getElementById("initialTemp").value = "";
   alert('Priming Calculator Reset');

}

// END -- Priming Sugar Calculation

