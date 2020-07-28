

async function getData(){
    await fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => console.log(data[0].name));
       
    }
    
    getData();
//Calculate Alcohol Content based on Inital and Final Gravity:

function calcABV(){
   let ig =  parseFloat(document.getElementById("initialGravity").value);
   let fg = parseFloat(document.getElementById("finalGravity").value);
   //ABV = (OG - FG) * 131.25
   let abv = ((ig -fg) * 131.25);
   document.getElementById("ABVResult").placeholder = "hello";
   document.getElementById("ABVResult").value = abv.toFixed(2) + " %";
};
//Reset Text Areas in ABV Calculator:
function resetABV(){
    document.getElementById("initialGravity").value = "";
    document.getElementById("finalGravity").value = "";
    document.getElementById("ABVResult").value = "";

}
