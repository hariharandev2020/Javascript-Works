      let show             = document.querySelector("#ans");
      let preview          = document.querySelector("#anss");
      let result,a,x,y,z,clone,text,res;   
      

    function number(event){

            // console.log(event);
            x = event;
            // alert(x.value); 
            preview.innerHTML = '';
            clone  = x.cloneNode(true);
            clone.classList.add(event.getAttribute("animate"));
            // console.log(y);
            x.appendChild(clone);
            setTimeout(function() {
            x.removeChild(clone);
            preview.innerHTML += x.value;
            show.innerHTML += x.value;

            },500)

            

            // text  = preview.innerText;
            // place = preview.getBoundingClientRect();
            // console.log(place);

     }

    function operator(event){

      let check = /[+,*,/,%,-]/g;

            y = event;

            if( (show.innerHTML === '' ) || preview.innerHTML === ''){

                  alert("Please enter a number ( 1 - 10 ) first");
                  return false;
            }
            else if(y === '=' ){

                  if( show.innerText.match(check) ){

                        preview.innerHTML = '';
                        result = eval(show.innerText);

                        z = document.querySelector("#anss");
                        z.classList.add("animation-res");
                        setTimeout(function(){

                              z.classList.remove("animation-res")

                        },500)
                        preview.innerHTML = result;
                        show.innerHTML    += y; 

                  }else {

                        alert("Please enter any operator (+, -, *, %, / )")
                        return false;       
                  }     

                  } else{

                        preview.innerHTML = '';
                        // alert(x.value); 
                        preview.innerHTML = '';
                        text = y.cloneNode(true);
                        text.classList.add(event.getAttribute("animation"));
                        y.appendChild(text);
                        setTimeout(function() {
                        y.removeChild(text);
                        preview.innerHTML += y.value;
                        show.innerHTML    += y.value;      

                        },500)
                        
                  }      
       
            }


    function clr(){   

           
            show.innerHTML    = '';
            z = document.querySelector("#anss");
            z.classList.add("animation-clr");
            setTimeout(function(){

                  z.classList.remove("animation-clr")

            },500)
                  preview.innerHTML = 0;       
                 
        
 	}   
