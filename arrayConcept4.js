var emp = [];
//by using string indexes we are creating associative an array

emp["id"]  = 1001;
emp["name"]  = "Lakshmi";
emp["sal"]  = 54000.00;
emp["company"]  = "IBM";
emp["position"]  = "UI Devloper";

function showEmp(){
   

    var n ="length of thid"+ Object.keys(emp).length;
    var ResultDiv = document.getElementById("ResultDiv");
    for(k in emp){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = k + "  " + emp[k];
        ResultDiv.appendChild(newDiv);
    }
}