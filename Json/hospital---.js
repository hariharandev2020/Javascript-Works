var hospital = {

                  
    admisison:{

          inpatients:[
                 
               {

                   "name"           :"abc",
                   "patient-id"     : 273645,
                   "age"            : 25,
                   "blood-grp"      :"a",
                   "admisison num"  : 768765,
                   "room-no"        : 25,
                   "disease"        :"abc",
                   "city"           : "tenkasi",
                   "status"         : "available"

               },

               {

                "name"          :"asd",
                "patient-id"    : 273646,
                "age"           : 45,
                "blood-grp"     :"a",
                "admisison num" : 768765,
                "room-no"       : 62,
                "disease"       :"def",
                "city"            : "tirunelveli",
                "status"         : "discharge"
                

            },
            {

                "name"         :"aed",
                "patient-id"   : 273647,
                "age"          : 18,
                "blood-grp"    :"a",
                "admisison num": 768765,
                "room-no"      : 177,
                "disease"      :"abc",
                "city"         : "minnagar"

            }
            
              ],  

           outpatients:[
            
            {
                      
                    "name"         :"abc",
                    "patient-id"   : 273645,
                    "age"          : 25,
                    "blood-grp"    :"a",
                    "doctor"       : "hh",
                    "disease"      :"bb",
                    "city"         : "muppiliyoor"
                      
                },  

                {
                      
                    "name"         :"abc",
                    "patient-id"   : 273645,
                    "age"          : 25,
                    "blood-grp"    :"a",
                    "doctor"       : "hh",
                    "disease"      :"bb",
                    "city"         : "mathalamparai"
                      
                }, 
                {
                      
                    "name"         :"anh",
                    "patient-id"   : 273649,
                    "age"          : 52,
                    "blood-grp"    :"b",
                    "doctor"       : "af",
                    "disease"      :"bc",
                    "city"         : "kallidai"
                      
                }    
           
           
                ]  


        }, 
                  // <!-- ///////////////////////////////////////////////////////////// -->

    staffs:{
             
          doctors:[
               
              {
                 
                name          :"jh", 
                "posting"       :"general junior",
                "age"           : 30,
                "salary"        : 30000,
                "duty"          : "night",
                "consult fee"   : 400

            },
           
             {
                 
                "name"          :"ha", 
                "posting"       :"senior sergant",
                "age"           : 50,
                "salary"        : 70000,
                "duty"          : "day",
                "consult fee"   : 800,

            },
           
             {
                 
                "name"          :"jh", 
                "posting"       :"general junior",
                "age"           : 30,
                "salary"        : 30000,
                "duty"          : "day",
                "consult fee"   : 400,

            }
          
          ],
                   //    <!-- //////////////////////////////////////////////////////// -->
         
        nurse:[
               
           {
                 
            "name"          :"nb", 
            "posting"       :"Head nurse",
            "age"           : 52,
            "salary"        : 28000,
            "duty"          : "day"

         },  

           {
                 
            "name"          :"nc", 
            "posting"       :"assistance",
            "age"           : 52,
            "salary"        : 15000,
            "duty"          : "night"

         }, 
          
         {
                 
            "name"          :"qb", 
            "posting"       :"trainee",
            "age"           : 21,
            "salary"        : 10000,
            "duty"          : "night"

         }  
   
         ],
                        //  <!-- //////////////////////////////////////// -->
        workers:{
           
             
            housekeepingteam:[
              
             {
                 
                "name"          :"nb", 
                "age"           : 32,
                "salary"        : 8000,
                "duty"          : "day"
    
             },  
              {
                     
                "name"          :"nc", 
                "age"           : 42,
                "salary"        : 8000,
                "duty"          : "night"
    
             }   
            
            ],
            securities:[
            
            {
                 
                "name"          :"nb", 
                "posting"       :"Head security",
                "age"           : 40,
                "salary"        : 20000,
                "duty"          : "day"
    
             },  
             {
                     
                "name"          :"nc", 
                "posting"       :"assistant",
                "age"           : 31,
                "salary"        : 15000,
                "duty"          : "night"
    
             },  
             {
                     
                "name"          :"qb", 
                "posting"       :"assitant",
                "age"           : 21,
                "salary"        : 15000,
                "duty"          : "night"
    
             }  
            
            
            ]          
 
        
        
        }

    
        },
  
                 // <!-- ///////////////////////////////////////////////////////////// -->
     floorManagement:[
          
             {
                "name"           :"ground-floor",
                "rooms"          : 1-40,
                "available"      :1-10 & 21-30,
                "not-available"  : 11-20 & 31-40,
                
             },
             
             {

             "name"              :  "first-floor",
             "rooms"             :   41-60,
             "available"         :   45-60,
             "not-available"     :   41-44

             }
          
     
     ]  


};