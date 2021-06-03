// calender js

function gettingDay(){

    var month = ["January","February","March","April","May","June","July","Auguest","September","October","November","December"];
    var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    var day  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var monthVal = document.querySelector("#month").value -1;    
    // alert(monthVal);
    var date = document.querySelector("#date").value;
    var year = 2021;


    var  m = monthDays[monthVal];
    alert(m);
    document.querySelector("#ans-3").style.color = "white";

 
    if (  (monthVal < 0) || ( monthVal > 11) ) {

            alert("Please enter correct month");
            return false;

    }else if (  ( m === 31) && ( date < 1 || date > 31 )){
    
            alert("Please enter the correct date into 1-31");
            return false;
    }else if ( ( m  === 28 ) && ( date < 1 || date > 28 ) ){

        alert("Please enter the date into 1-28");
        return false;
    }
    
    else if ( ( m === 30) &&  (date < 1 ||  date > 30) ){

            alert ("Please enter correct into 1-30");
            return false;
    }
     
    
    var nDay = new Date(year,monthVal,date).getDay();
    // alert(nDay);
    
     if ( (nDay == 0) || (nDay == 6) ) {
        
        document.querySelector("#ans-3").style.color = "red";
        
    }


    document.querySelector("#ans-1").innerHTML = month[monthVal];
    document.querySelector("#ans-2").innerHTML = date;
    document.querySelector("#ans-3").innerHTML = day[nDay];


}

