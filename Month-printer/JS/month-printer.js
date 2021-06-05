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
    var day,div,p,text,ans,pdate,res,check;


    var nDay = new Date(year,monthValue,date).getDay();
    document.querySelector(".title").innerHTML = month[monthValue] + "&nbsp;" + "&nbsp;" + 2021 ;

    for (let j = 1; j <= monthDays[monthValue] ; j++) {

    text = document.createTextNode(j);
    div  = document.createElement("div");
    p    = document.createElement("p");
    p.appendChild(text);
    res  = div.appendChild(p);

    if(  (new Date(year,monthValue,j).getDay()=== 0) || (new Date(year,monthValue,j).getDay() === 6 ) ){

        res.style.color = "red";
    }    

    if( j === 1 ){

        res.style.gridColumnStart = nDay + 1; 
    } 
    document.querySelector(".month-dates").appendChild(res);      

   }    

   document.querySelector("#month").value = '';
}

//..........

function clear(){

    document.querySelector(".month-days").innerHTML  = '';
    document.querySelector('.month-dates').innerHTML = '';
    
}
