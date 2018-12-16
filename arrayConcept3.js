//1st way declaration of array
var ar1 = Array(4);
ar1[0] = "lakshmi1";
ar1[1]="nymisha1";
ar1[2]="zesan1";
ar1[3]="abhilash1";

//2nd way of declaring an array
var ar2 = Array("Lakshmi2","Abhilash2","dheeraj2","nymisha2");

//3rdway declaring an array
var ar3 = ["Lakshmi3","Abhilash3","dheeraj3","nymisha3"];


//4th way declaring an array
var ar4 =[];
ar4[0]="Lakshmi4";
ar4[1]="nani4";
ar4[2]="lakshmi_nani4";

function displayArray(ary){
   var n = ary.length;
    var resultDiv = document.getElementById("ResultDiv");
    while(resultDiv.hasChildNodes()){
        resultDiv.removeChild(resultDiv.lastChild)
    }
   for(var i=0;i<n;i++){
       var newDiv = document.createElement("div");
       newDiv.innerHTML="items"+(i+1).toString()+ " of " + n.toString() +" is " + ary[i];
       resultDiv.appendChild(newDiv);
   }
}