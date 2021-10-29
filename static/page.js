function validateForm() {
    let y=0;
    let food = ["salad", "pizza", "coffee","pasta","maggie","paneer","naan","special thali"];
    var x = document.forms["myForm"]["fname"].value;
    for (let i= 0; i < food.length; i++) {
    if(x==food[i]){
       y++;
    }
        
    }
    if(y==0){
    alert(" NOT AVAILABLE");
    }
    else{
     menu();
    } 
   
   
}
function menu(){
    document.getElementById("java").innerHTML = "all type of pizza are available";
}
function specialfunction(){
var t = document.forms["life"]["order"].value;
if(t==""){
    alert("mam order please");
}
}

