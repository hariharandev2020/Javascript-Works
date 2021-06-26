// Month Printer Js ---

function printMonth(){

    monthValidate(); 
    clear();
    createDays();
    createDates(); 
  
}        

function monthValidate(){

    var monthValue = document.querySelector("#month").value -1;
    var date       = document.querySelector("#date").value;
    var monthDays  = [31,28,31,30,31,30,31,31,30,31,30,31];

    if (  (monthValue < 0) || ( monthValue > 11) ) {

        alert("Please enter valid month");
        return false;
    }

    if (  ( date < 0) || ( date < monthDays[monthDays]) ) {

        alert("Please enter valid date");
        return false;
    }else if( (monthValue === 1 ) && (date > 28) ){

        alert("Please enter valid date")
        return false;
    } else if ((monthValue === 3) && (date > 30) || (monthValue === 5) && (date > 30) || (monthValue === 8) && (date > 30) || (monthValue === 10) && (date > 30) ){

        alert ("Please enter valid date");
        return false;
    }
     

    document.querySelector(".content").style.display = "flex";
    document.querySelector(".c2").style.display = "flex";
}   

//..................

 function createDays() {
     
     var days       = ["Su", "Mo", "Tu", "We","Th", "Fr", "Sa"];
     var day,div,p,text,ans;

    for (let i = 0; i < days.length; i++) {
           
    day = days[i];
    
    text  = document.createTextNode(day);
    textOne = document.createTextNode(day);
    
    div  = document.createElement("div");
    p    = document.createElement("p");
    p.appendChild(text);
    ans   = div.appendChild(p);

    div  = document.createElement("div");
    p    = document.createElement("p");
    p.appendChild(textOne);
    anss   = div.appendChild(p);
     
    document.querySelector(".month-days").appendChild(ans);      
    document.querySelector(".m-days").appendChild(anss); 

   }

   
}   
//.........

function createDates(){

    var days       = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    var month      = ["January","February","March","April","May","June","July","Auguest","September","October","November","December"];
    var monthDays  = [31,28,31,30,31,30,31,31,30,31,30,31];
    var year       = 2021;
    var date       = document.querySelector("#date").value;
    var d          = 1;
    var year       = 2021;   
    var monthValue = document.querySelector("#month").value -1;
    var day,div,p,text,ans,pdate,res,check,val,a,b,c;

    var nDay = 0;

    if(month[monthValue] === "January"){

        dateNew = date;
        // alert(dateNew);

    } else {

    for (let x = 0; x <= monthValue -1; x++) {

       c =  nDay += monthDays[x]; 
        
      }  

    // alert(c);  

    var dateNew = Number(c) + Number(d);
    
    // alert(dateNew);
  
    }  
      var newDay = (dateNew) % 7;

    //   alert(newDay);

      if ( (newDay === 1) || ( newDay === 2 )) {

            a = newDay + 5;
      }
      else if( (newDay === 4) || (newDay === 5) || (newDay === 7) || (newDay === 3) || (newDay === 6)  ){

            a = newDay -2;

      }else if( newDay === 0){

          a = newDay + 5;
      }
      
         

    document.querySelector("#title").innerHTML = month[monthValue] + "&nbsp;" + "&nbsp;" + 2021 ;
    document.querySelector("#title-2").innerHTML = month[monthValue] + "&nbsp;" + "&nbsp;" + 2021 ;
    var date       = document.querySelector("#date").value;

    for (let j = 1; j <= monthDays[monthValue] ; j++) {

    text = document.createTextNode(j);
    textOne = document.createTextNode(j);
    // alert(text.textContent);
    div  = document.createElement("div");
    p    = document.createElement("p");
    p.appendChild(text);
    res  = div.appendChild(p);    

    div  = document.createElement("div");
    p    = document.createElement("p");
    p.appendChild(textOne);
    ress  = div.appendChild(p);


    if ( j === 1 ){

        res.style.gridColumnStart = a;
        ress.style.gridColumnStart = a;
    }

    if ( (j == date) || (j == date) ) {

        res.style.color  = "#088EFA";
        res.style.border = "3px solid #CCE9FD";
        res.style.padding = "4px 8px";
        res.style.borderRadius = "10px";
        
        ress.style.color = "#088EFA";
        ress.style.padding = "4px 8px";
        ress.style.border = "3px solid #CCE9FD";
        ress.style.borderRadius = "10px";
   }

    document.querySelector(".month-dates").appendChild(res);      
    document.querySelector(".m-dates").appendChild(ress);

    } //else if ( (monthValue === ) )
      
      document.querySelector("#month").value = ''; 
      document.querySelector("#date").value = '';     
}

//..........

function clear(){

    document.querySelector(".month-days").innerHTML  = '';
    document.querySelector('.month-dates').innerHTML = ''; 
    document.querySelector(".m-days").innerHTML = '';  
    document.querySelector(".m-dates").innerHTML = '';
}
