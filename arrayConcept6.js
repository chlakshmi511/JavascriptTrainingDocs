//array.length properly work on numeric index's not for string based indexs 
var emp = [];
emp["id"] = 111;
emp["name"] = "Lakshmi";
emp["sal"]=55500.00;
emp["company"]="IBM";
emp["position"]="UI Devloper";

function btn1()
{
    alert("emp lentgh --- > using string based indexs using length property is :: "+emp.length);
    alert("emp lentgh --- > using string based indexs using length property is---------- :: "+Object.keys(emp).length);
    //output : 0 (because wecan't find length by lentgth for associate arrays)
}

var emp2 = [];//0 1 2 3
emp2[3] = "some thing";//assigning value direct index 3 //0 ,1 ,2 -->3


function btn2()
{
    alert("emp2 length --> js automatically assign 0,1,2 indexs before index 3,so lentgh is :: " 
    +emp2.length);//output :: 4
}


var emp3 =[];//having numeric and string index based array 
//not good practice both indexs having in single array
emp3[3] = "some thing";

emp3["name"]="some name";

//finding length of emp3
function btn3(){
    alert("only numeric index array length should be printe by using length property :: " +emp3.length);
    //output 4 but actually its 5
    //todo for associate array length by using Object.keys(arrayname).length
    alert ("associate array length for emp :: "+ Object.keys(emp).length)//output : 5
    
}