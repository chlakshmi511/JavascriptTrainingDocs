var ary=[10,"Lakshmi",20.00,true,80];

function displayArrayResults(){
    var n = ary.length;
    document.getElementById("aryCount").innerHTML = "array count"+" "+n.toString();

    var aryitems = document.getElementById("aryItems");
     while(aryitems.hasChildNodes())
     {
         aryitems.removeChild(aryitems.lastChild);
     }
     for(var i=0;i<n;i++){
         var newDiv = document.createElement("div");
         newDiv.innerHTML = "index"+i.toString()+"item" +(i+1).toString()+ "of" + n.toString() + " is" +ary[i];
         aryItems.appendChild(newDiv);
     }
}

//push method
function btn_push(){
    var v = document.getElementById("enter_any_value").value;
    ary.push(v);
    displayArrayResults();
}
function btn_pop(){
   
    ary.pop();
    displayArrayResults();
}
function btn_unshift(){
    var v = document.getElementById("enter_any_value").value;
    ary.unshift(v);
    displayArrayResults();
}
function btn_shift(){
  
    ary.shift();
    displayArrayResults();
}

window.onload = displayArrayResults;