var b = 0;
var c = 1;
var y = 1;

function condition(){
    var value   = document.querySelector("#numberinput").value;
    if( (value > 5) && (value < 100)){
    var x = Math.floor(value/3);

    if(y == x){
       document.querySelector("#ansone").innerHTML += y*3 + ", ";
    }
    else{ 
      document.querySelector("#ansone").innerHTML += y*3 + ", ";
      b = y+1;
      y = b;
      condition();
    }
  }else{ 
      alert("Enter value in above 5");
  }    
}

function conditionTwo(){
    var value   = document.querySelector("#numberinput").value;
    if( (value > 5) && (value < 100) ){
    var z = Math.floor(value/5);

    if(c == z){
       document.querySelector("#anstwo").innerHTML += c*5 + ", ";
    }
    else{ 
      document.querySelector("#anstwo").innerHTML += c*5 + ", ";
      b = c+1;
      c = b;
      conditionTwo();
    }
  }else{
      alert("Enter the value in above 5");
  }
}

function multiple(){
condition();
conditionTwo();
}

