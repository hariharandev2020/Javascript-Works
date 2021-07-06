let show = document.querySelector("#ans");
let preview = document.querySelector("#anss");
let result, a,b,c,x, y, z, clone, text, res,find,index,n1,n2;


function number(event) {

      // // console.log(event);
      x = event;
      // alert(x.value); 
      preview.innerHTML = '';
      clone  = x.cloneNode(true);
      clone.classList.add(event.getAttribute("animate"));
      x.appendChild(clone);
      setTimeout(function() {
      x.removeChild(clone);
      preview.innerHTML += x.value;
      show.innerHTML += x.value;

      },400)


}

function operator(event) {

      let check = /[+,*,/,%,-]/g;

      y = event;

      if ((show.innerHTML === '') || preview.innerHTML === '') {

            alert("Please enter a number ( 1 - 10 ) first");
            return false;
      }
      else if (y === '=') {

            a = [show.innerText];
            b = a.toString();
            find = b.match(check);
            index = b.indexOf(find);
            

                  if( find == "+" ){

                        
                        n1 = b.slice(0,index);
                        n2 = b.slice(index+1);
                        result = Number(n1) + Number(n2);
                        
                        preview.innerHTML = '';
                        preview.innerHTML = result;
                        show.innerHTML += y;

                        z = document.querySelector("#anss");
                        z.classList.add("animation-equal");
                        setTimeout(function(){

                        z.classList.remove("animation-equal")

                        },500)


                  }else if (find == "-" ) {

                        n1 = b.slice(0,index);
                        n2 = b.slice(index+1);   
                        result = Number(n1) - Number(n2);

                        preview.innerHTML = '';
                        preview.innerHTML = result;
                        show.innerHTML += y;

                        z = document.querySelector("#anss");
                        z.classList.add("animation-equal");
                        setTimeout(function(){

                        z.classList.remove("animation-equal")

                        },500)

                  }
                  else if (find == "*" ){


                        n1 = b.slice(0,index);                     
                        n2 = b.slice(index+1);
                        result = Number(n1) * Number(n2);

                        preview.innerHTML = '';
                        preview.innerHTML = result;
                        show.innerHTML += y;

                        z = document.querySelector("#anss");
                        z.classList.add("animation-equal");
                        setTimeout(function(){

                        z.classList.remove("animation-equal")

                        },500)

                  }

                  else if (find == "/" ){

                        n1 = b.slice(0,index);                        
                        n2 = b.slice(index+1);
                        result = Number(n1) / Number(n2);

                        preview.innerHTML = '';
                        preview.innerHTML = result;
                        show.innerHTML += y;

                        z = document.querySelector("#anss");
                        z.classList.add("animation-equal");
                        setTimeout(function(){

                        z.classList.remove("animation-equal")

                        },500)

                     
                  }
                  else if (find == "%" ){

                        n1 = b.slice(0,index);                        
                        n2 = b.slice(index+1);
                        result = Number(n1) % Number(n2);

                        preview.innerHTML = '';
                        preview.innerHTML = result;
                        show.innerHTML += y;

                        z = document.querySelector("#anss");
                        z.classList.add("animation-equal");
                        setTimeout(function(){

                        z.classList.remove("animation-equal")

                        },500)

                     
                  }
   

            else {

                  alert("Please enter any operator (+, -, *, %, / )")
                  return false;
            }

      } else {

            preview.innerHTML = '';
            preview.innerHTML = '';
            text = y.cloneNode(true);
            text.classList.add(event.getAttribute("animation"));
            y.appendChild(text);
            setTimeout(function() {
            y.removeChild(text);
            preview.innerHTML += y.value;
            show.innerHTML += y.value;

            },500)

      }

}


function clr() {


      show.innerHTML = '';
      z = document.querySelector("#anss");
      z.classList.add("animation-clr");
      setTimeout(function () {

            z.classList.remove("animation-clr")

      }, 500)
      preview.innerHTML = 0;


}
