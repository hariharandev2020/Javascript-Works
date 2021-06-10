// Month Printer Js ---

function printMonth(){


    clear();
    monthValidate(); 
    createDays();
    createDates(); 
  
}        

function monthValidate(){

    var monthValue = document.querySelector("#month").value -1;

    if (  (monthValue < 0) || ( monthValue > 11) ) {

        alert("Please enter correct month");
        return false;
    }
}

//..................

 function createDays() {
     
     var days       = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
     var day,div,p,text,ans;

    for (let i = 0; i < days.length; i++) {
           
    day = days[i];
    text = document.createTextNode(day);
    // alert(text);
    div  = document.createElement("div");
    p    = document.createElement("p");
    p.appendChild(text);
    ans = div.appendChild(p);
    
    if ( (day === "Sunday") || (day === "Saturday") ) {

         ans.style.color = "red";
         
    }
    
    document.querySelector(".month-days").appendChild(ans);      

   }
   
}   
//.........

function createDates(){

    var days       = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    var month      = ["January","February","March","April","May","June","July","Auguest","September","October","November","December"];
    var monthDays  = [31,28,31,30,31,30,31,31,30,31,30,31];
    var year       = 2021;
    var date       = 1;
    var year       = 2021;   
    var monthValue = document.querySelector("#month").value -1;
    var day,div,p,text,ans,pdate,res,check,val,a,b;
    

    var nDay = 0;

    if ( monthValue === 0 ){

        a =  nDay + 5;

     }else if( monthValue === 5 ){

        a = nDay + 5;
       
     }
    else{

        for (let x = 0; x < monthValue; x++) {

                nDay +=  monthDays[x]; 
                          
        }              
          a  = nDay +1;

    }    

    if ( (monthValue === 5) && (a === 5) ) {
        
            b = 4;
            alert(b);
            
    }

        b =  a % 7;
    
        if ( (monthValue === 5) && (a === 5) ) {
        
            b = 2;   
       }
        else if( b === 4){

            b = b-3;

        }else if(  (b === 0) || (b === 2) || (b === 1)){

            b = b + 4;
        }else if( (b === 3) || (b === 6) ){

            b = b - 3;
        }

        alert(b);

    document.querySelector(".title").innerHTML = month[monthValue] + "&nbsp;" + "&nbsp;" + 2021 ;

    for (let j = 1; j <= monthDays[monthValue] ; j++) {

    text = document.createTextNode(j);
    // alert(text.textContent);
    div  = document.createElement("div");
    p    = document.createElement("p");
    p.appendChild(text);
    res  = div.appendChild(p);


    if( j === 1 ){

        res.style.gridColumnStart = b + 1 ; 
    }
    
    if ( ( month[monthValue] === "January")  &&   ( 5 * j ) % 7 == 3 || ( 5 * j ) % 7 == 1 ){

        res.style.color = "red";

    } else if ( (month[monthValue] === "February") && ( 1 * j ) % 7 == 6 || ( 1 * j ) % 7 == 0 ){

         res.style.color = "red";

    } //if (  (month[monthValue] === "March") && ( b === 1 ) && ( b * j ) % 7 === 6 || ( b * j ) % 7 === 0 ){

    // // res.style.color = "red";
    //  } //else if (  (month[monthValue] === "April") && ( b === 1 ) && ( b * j ) % 7 === 6 || ( b * j ) % 7 === 0 ){

    // res.style.color = "red";
    // }


        document.querySelector(".month-dates").appendChild(res);      

   }
      
      document.querySelector("#month").value = '';     
}

//..........

function clear(){

    document.querySelector(".month-days").innerHTML  = '';
    document.querySelector('.month-dates').innerHTML = '';
    
}

