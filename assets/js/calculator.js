///////////////////////////////
////Calculators Section //////
//////////////////////////////
    
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
   let BSType = parseFloat(document.getElementById("sugarSelect").value);
   let factor = 1;
 
   switch (BSType) {
     case 0:
       factor = 1;
       break;
     case 1:
       factor = 1;
       break;
     case 2:
       factor = 1.1;
       break;
     case 3:
       factor = 1.5;
       break;
     case 4:
       factor = 1.3666;
       break;
     case 5:
       factor = 1.4666;
       break;
     case 6:
       factor = 1.1333;
   }
 
   //PS = 15.195 * VB (cd  - 3.0378 + 5.0062 - 2.6555*10^-2 *T * 10^-4 *T^2)
   let ps = factor *(15.195 * vb * (cd - 3.0378 + 5.0062 * Math.pow(10,-2) * temp -2.6555 * Math.pow(10,-4) * Math.pow(temp,2)));
 
   
   document.getElementById("sugarResult").value = `Sugar Amount = ${ps.toFixed(2)} grams`;
 };
 //Reset Text Areas in PS Calculator:
 function resetPrimingSugar(){
    document.getElementById("initialAmount").value = "";
    document.getElementById("volumeCO2").value = "";
    document.getElementById("initialTemp").value = "";
    document.getElementById("sugarResult").value = "";
    //document.getElementById("sugarSelect").value = "0";
    alert('Priming Calculator Reset');
 
 }
 
 // END -- Priming Sugar Calculation