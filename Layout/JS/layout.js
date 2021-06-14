   
function likeChange(){

    var x  =  document.querySelector(".ic-3");
    var y  =  document.querySelector(".ic-4");
    var z  =  document.querySelector("#card-1");

    document.querySelector(".content").style.display = "none";
    document.querySelector(".card-1").style.display  = "grid";
    document.querySelector(".card-1").style.display.gridArea  = "2/1/3/2";

    x.style.fontSize            = "3.5rem"; 
    x.style.backgroundColor     = "#f96786";
    x.style.backgroundImage     = "linear-gradient(85deg, #f96786 48%, #f9eb5e 100%)";
    x.style.transition          = "500ms";   
    x.style.boxShadow           = "10px 20px 30px lightblue";
    
    

    y.style.fontSize             = "2rem";  
    y.style.backgroundColor      = "#f96786";
    y.style. backgroundImage     = "linear-gradient(to left, #2487FA 30%, #12D771)";


    animateFront();
}
function documentChange(){

    var x =  document.querySelector(".ic-4");
    var y =  document.querySelector(".ic-3");

    x.style.fontSize            = "3.5rem";
    x.style.backgroundColor     = "#f96786";
    x.style.backgroundImage     = "linear-gradient(85deg, #f96786 48%, #f9eb5e 100%)";
    x.style.boxShadow           = "10px 20px 30px lightblue";
    x.style.backgroundClip      =  "text";


    y.style.fontSize            = "2rem";
    y.style.transition          = "500ms";
    y.style.color               = "#F96786";
    y.style.backgroundColor     = "#f96786";
    y.style. backgroundImage    = "linear-gradient(to left, #2487FA 30%, #12D771)";


    animateBack()
    
    document.querySelector(".content").style.display = "grid";
    document.querySelector(".card-1").style.display  = "none";
    document.querySelector(".card-1").style.display.gridArea  = '';
}        

function profilePage(){


    document.querySelector(".profile").style.display    = "block";
    document.querySelector(".profile").style.transition = "2s";
    document.querySelector("#head-img1").style.animation = "swing 2s ease";
    document.querySelector("#head-img2").style.animation = "swing2 2s ease";
    document.querySelector("#head-img3").style.animation = "swing3 2s ease";

    document.querySelector(".main").style.filter = "brightness";
    // document.querySelector("#head-img").style.display = "none";
}
 function closing(){
    
     document.querySelector(".profile").style.display = "none";
     document.querySelector(".profile").style.transition = "2s";   
    
    }


function animateFront(){

    document.querySelector(".cc").style.animation = "front  800ms backwards ease";
    document.querySelector(".cc1").style.animation = "front1  800ms backwards ease";
    document.querySelector(".cc2").style.animation = "front2  800ms backwards ease";
    document.querySelector(".cc3").style.animation = "front3  800ms backwards ease";
    document.querySelector(".cc4").style.animation = "front4  800ms backwards ease";
    document.querySelector(".cc5").style.animation = "front5  800ms backwards ease";
    document.querySelector(".cc6").style.animation = "front6  800ms backwards ease";

}


function animateBack(){

    document.querySelector(".c1").style.animation = "back  800ms backwards ease";
    document.querySelector(".c2").style.animation = "back1  800ms backwards ease";
    document.querySelector(".c3").style.animation = "back2  800ms backwards ease";
    document.querySelector(".c4").style.animation = "back3  800ms backwards ease";
    document.querySelector(".c5").style.animation = "back4 800ms backwards ease";
    document.querySelector(".c6").style.animation = "back5  800ms backwards ease";
    document.querySelector(".c7").style.animation = "back6  800ms backwards ease";

}
