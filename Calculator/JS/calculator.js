    
    var show      = document.getElementById('displaycontent');
    var container = document.querySelector('#container');
    var newValu   = document.querySelectorAll(".number").textContent;

    
     
    var x;
    var y;  
    var displayValue;
    var result;
    
 	function darktheme(){
    
      show.style.color ="black";
      show.style.border = "5px solid  rgb(40, 42, 44)"
      container.style.backgroundColor="rgb(40, 42, 44)";
      container.style.transition="2s";
      show.style.backgroundColor="white";
     
    }
 	function lighttheme(){
    
      show.style.backgroundColor="grey";
      container.style.backgroundColor="#2DBBB";
      container.style.transition="2s"; 
            
 	}

 	function clr(){
 	 
      show.innerHTML=" ";      
 
 	}

  	function dlt(){

    	show.innerHTML= ".";	   
    }

    function mul(){
 	
    	show.innerHTML= "*";
 	
  	}

   function dev(){

    	show.innerHTML= "%";
 	
 	    
  }

    function plus(){
 	
     show.innerHTML = " + ";
     var x = show.textContent + newValu.textContent;
     show.innerHTML = x;
    
     
 	}

   function min(){
 	
     show.innerHTML ="-"; 	
 	 
     
 	}

 	function equal(){
      
      show.innerHTML = "=";

 	}      
