
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
    


