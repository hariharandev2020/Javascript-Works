var x = 1;
var a = 3;
var b = 5;

function multiple(){	
  var y = document.querySelector("#numberinput").value;
if(y > 3 && y <= 100){

if(x == y){
 if(x % a == 0){
  document.querySelector("#ansone").innerHTML += x*1 +", ";
 }else if(x % b == 0){
  document.querySelector("#ansone").innerHTML += x*1 +", ";
 }
 else{
  document.querySelector("#ansone").innerHTML += ".";
 }
}
else if( (x % a === 0) && (x % b === 0) ){
  document.querySelector("#ansone").innerHTML += x*1 +", ";
  x += 1;
  multiple();
}
else if(x % a == 0){
  document.querySelector("#ansone").innerHTML += x*1 +", ";
  x += 1;
  multiple();
}
else if (x % b == 0){
  document.querySelector("#ansone").innerHTML += x*1 +", ";
  x += 1;
  multiple();
}
else{
  x += 1;
  multiple(); 
  }
 }else {
      alert("Please enter number into 5 - 100")
 }

}
