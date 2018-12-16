//declaring an Array
var arr1 = Array(4);
var arr2= Array("a",123);
var arr3=["1",true];
var arr4 = new Array(1,2);
//Assigning values to an annary by using index
arr1[0]="john";
arr1[1]=2500;
arr1[2]=true;
arr1[3]=67.5;


//function declararion for accessing and printing array elemnts in the console 
var resultsDiv = document.getElementById("resultsDiv");

function dispalyArray(){
    for (var i=0;i<arr1.length;i++){
        //creating a new div 
        var newDiv = document.createElement("div");
        newDiv.innerHTML ="item" + (i+1).toString() +"of"+arr1.length.toString()+ "is " + arr1[i];
        //adding childdiv to parent div
        resultsDiv.appendChild(newDiv);
    }
}

