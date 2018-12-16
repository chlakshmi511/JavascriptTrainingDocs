/* add elements dynamically to an 
  existing an array 
  template:arraysConcept2.html*/

  var list = [];

  function addAnItemToList(){
      var noOfItems = list.length;//list length intially 0 --->1
      list[noOfItems] = document.getElementById("txtvalue").value;
      //get the value of textbox and assign to list-->list[0]=1-->
      //
      //list[0]=1
      //list[1]=2
      //dispaly an array call displayResult()
      displayResults();
      
  }
  function displayResults(){
    //get the no of elemnts in the list using length property
    var n = list.length;//n=2

    //get the itemscount 
    //inorder to write inside the div using property is innerHTML
    document.getElementById("itemsCount").innerHTML ="no of items added :" +n.toString();

    //we need to have all the items to be displayed in the itemslist div,in order do that
    //get the itemlist div using document or get hold of itemslist div using document
    var itemsListDiv = document.getElementById("itemsList");
    console.log("itemsListDiv"+itemsListDiv);
    //remove all the existing nodes and recreate elements dynamically when the page refresh i.e,
    while(itemsListDiv.hasChildNodes()){//check itemslistDiv having any childnodes 
    //remove each and every child node ,here i am removing last child and repeating for removing every child 
       itemsListDiv.removeChild(itemsListDiv.lastChild);
    }  //by end of this we will remove allthe child elements completely one this done ,we will add the elements below
    
    for(var i=0;i<n;i++){
        //creating a new div 
        var newDiv = document.createElement("div");
        //writing information inside the div using innerHTML
        //what item we are going display
        newDiv.innerHTML = "item" + (i+1).toString() + " of " + n.toString() +" is " + list[i];//item 1 of 4 ; item 2 0f 4 etc //iem in side the array
        
        //i want to add newDiVElement to itemListDiv using appenChild()
        itemsListDiv.appendChild(newDiv);
    }
    document.getElementById("txtvalue").value = "";
  }
