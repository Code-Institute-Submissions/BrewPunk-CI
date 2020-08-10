let ABVValue = document.getElementById("ABVSlider").value;
let IBUValue = document.getElementById("IBUSlider").value;

//Set Button values based on slider
document.getElementById("abv-slider-value").innerHTML = ABVValue;
document.getElementById("ibu-slider-value").innerHTML = IBUValue;
document.getElementById(
  "abvibu-slider-value"
).innerHTML = `ABV>${ABVValue}% + IBU>${IBUValue}`;

function getABVValue() {
  ABVValue = document.getElementById("ABVSlider").value;
  return ABVValue;
};

function getIBUValue() {
  IBUValue = document.getElementById("IBUSlider").value;
  return IBUValue;
};

function updateABVButton() {
  ABVValue = getABVValue();
  document.getElementById("abv-slider-value").innerHTML = ABVValue;
};

function updateIBUButton() {
  IBUValue = getIBUValue();
  document.getElementById("ibu-slider-value").innerHTML = IBUValue;
};

function updateABVIBUButton() {
  ABVValue = getABVValue();
  IBUValue = getIBUValue();

  document.getElementById(
    "abvibu-slider-value"
  ).innerHTML = `ABV > ${ABVValue}% + IBU > ${IBUValue}`;
};

// Do not display Selext Beer Buttoon until function called
document.getElementById("selectButton").style.display = "none";
