      let show             = document.querySelector("#ans");
      let preview          = document.querySelector("#anss");
      let result;   

    function number(x){

            preview.innerHTML = '';
            preview.innerHTML += x;
            show.innerHTML += x;    
     }

    function operator(y){

      let check = /[+,*,/,%,-]/g;

            if( (show.innerHTML === '' ) || preview.innerHTML === ''){

                  alert("Please enter a number ( 1 - 10 ) first");
                  return false;
            }
            else if(y === '=' ){

                  if( show.innerText.match(check) ){

                        preview.innerHTML = '';
                        result = eval(show.innerText);
                        preview.innerHTML = result;
                        show.innerHTML    += y; 

                  }else {

                        alert("Please enter any operator (+, -, *, %, / )")
                        return false;       
                  }     

                  } else{

                        preview.innerHTML = '';
                        preview.innerHTML += y;
                        show.innerHTML    += y;      
                  }      
       
            }


    function clr(){   
       
       show.innerHTML    = '';
       preview.classList.toggle("ani");
       preview.innerHTML = 0; 
        
 	}   

//     function animation(){

      

//     }
//     function stopAnimate(){

//       preview.style.animationPlayState = "paused";

//     }