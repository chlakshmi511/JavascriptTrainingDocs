//declare an associative arrays 4
var emp1 = [];
emp1["id"] = 111;
emp1["name"] = "Lakshmi";
emp1["sal"]=55500.00;
emp1["company"]="IBM";
emp1["position"]="UI Devloper";

var emp2 = [];
emp2["id"] = 112;
emp2["name"] = "Samba";
emp2["sal"]=70000.00;
emp2["company"]="Astra Microwave";
emp2["position"]="Design Engineer";

var emp3 = [];
emp3["id"] = 113;
emp3["name"] = "Nymisha";
emp3["sal"]=90000.00;
emp3["company"]="cts";
emp3["position"]="Ui";

var emp4 = [];
emp4["id"] = 114;
emp4["name"] = "zesan";
emp4["sal"] = 20000.00;
emp4["company"]="eqvilizor";
emp4["position"]="Ui";


var emps = [emp1 , emp2 , emp3 ,emp4];//nesting arrays to form collection

function displayEmpDetails(){
    var n = emps.length;
    var resultDiv = document.getElementById("ResultDiv");
    for (var i=0;i<n;i++){
        var emp = emps[i];//get the emp[0]--->emp1

         //iterate the emp1 to get the emp details
         for(k in emp){

            var newDiv = document.createElement("div");
            newDiv.innerHTML = k + " "+ emp[k];
            resultDiv.appendChild(newDiv);
         }

         //for giving space b/w one employee to other is we are creating new br spce
        var newbr = document.createElement("br");
        resultDiv.appendChild(newbr);
    }
}