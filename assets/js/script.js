function berechnen(){
  let zwe =  document.getElementById("ZWE").value ;
  let liste = document.getElementById("liste").value ;
  let jahr2018 =document.getElementById("jahr2018").value ;
  let jahr2019 =document.getElementById("jahr2019").value ;
  let jahr2020 =document.getElementById("jahr2020").value ;
  let jahr = document.getElementById("jahr").value
  var y = " "
 
 
 if (jahr =="2018") {

    if(liste=="ledig"){
        if (zwe <= 9000) {
            document.getElementById("ER").innerHTML = est = 0 ;

        }   else if (zwe >=9001 && zwe <= 13996){
            let y = (zwe - 9000)/10000
            est = (997.80 * y + 1400) * y
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed())} €`; 
        
        }  else if (zwe >=13997 && zwe <= 54949){
            let y = (zwe - 13996)/10000
            est = (220.13 * y +2397) * y + 948.49
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        
        } else if (zwe >=54950 && zwe <= 260532){
            
            est = 0.42 * zwe - 8621.75
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        } else if(zwe >=260533) {
            est = 0.45 * zwe - 16437.70
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        }
     }else{
        zwe /= 2 
        if (zwe <= 9000) {
            document.getElementById("ER").innerHTML = est = 0 ;

        }   else if (zwe >=9001 && zwe <= 13996){
            let y = (zwe - 9000)/10000
            est = ((997.80 * y + 1400) * y) *2
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed())} €`; 
        
        }  else if (zwe >=13997 && zwe <= 54949){
            let y = (zwe - 13996)/10000
            est = ((220.13 * y +2397) * y + 948.49)*2
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        
        } else if (zwe >=54950 && zwe <= 260532){
            
            est = (0.42 * zwe - 8621.75) *2
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        } else if(zwe >=260533) {
            est = (0.45 * zwe - 16437.70) *2
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        }
    }

 }else if  (jahr =="2019") {
     
    if(liste=="ledig"){
 
        if (zwe <= 9168) {
            
            document.getElementById("ER").innerHTML = est = 0 ;

        }   else if (zwe >=9169 && zwe <= 14254){
            let y = (zwe - 9168)/10000
            est = (980.14 * y +1400) * y ;
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        
        }  else if (zwe >=14255 && zwe <= 55960){
            let y = (zwe - 14254)/10000
            est = (216.16 * y +2397) * y + 965.58
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        
        } else if (zwe >=55961 && zwe <= 265326){
            
            est = 0.42 * zwe - 8780.90
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
        } else if(zwe >=260533) {
            est = 0.45 * zwe -16740.68
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`;
        } 
    }else{
        zwe /= 2 

        if (zwe <= 9168) {
         
            document.getElementById("ER").innerHTML = est = 0 ;
    
        }   else if (zwe >=9169 && zwe <= 14254){
            let y = (zwe - 9168)/10000
            est = ((980.14 * y +1400) * y ) *2;
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
           
         }  else if (zwe >=14255 && zwe <= 55960){
            let y = (zwe - 14254)/10000
            est = ((216.16 * y +2397) * y + 965.58) * 2
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
           
         } else if (zwe >=55961 && zwe <= 265326){
            
            est = (0.42 * zwe - 8780.90) *2
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
         } else if(zwe >=260533) {
             est =( 0.45 * zwe -16740.68) *2
             document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`;
         } 
    }

    } 
    else if  (jahr =="2020") {
 
        if(liste=="ledig"){

        if (zwe <= 9408) {
             
            document.getElementById("ER").innerHTML = est = 0 ;
        
        }   else if (zwe >= 9408 && zwe <= 14532){
            est = (972.87 * (zwe - 9408) / 10000 + 1400) * (zwe - 9408) / 10000;
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
           
         }  else if (zwe >= 14533 && zwe <= 57051){
            let y = (zwe - 14532)/10000
            est = (212.02 * y +2397) * y + 972.79
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
           
         } else if (zwe >= 57052 && zwe <= 270500){
            
            est = 0.42 * zwe - 8963.74
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 

         } else if(zwe >= 270501) {
             est = 0.45 * zwe - 17078.74
             document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`;
         }
        }else{
        zwe /= 2 
        if (zwe <= 9408) {
            document.getElementById("ER").innerHTML = est = 0 ;
        
        }   else if (zwe >= 9408 && zwe <= 14532){
            est = ((972.87 * (zwe - 9408) / 10000 + 1400) * (zwe - 9408) / 10000) *2;
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
           
         }  else if (zwe >= 14533 && zwe <= 57051){
            let y = (zwe - 14532)/10000
            est = ((212.02 * y +2397) * y + 972.79) *2
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 
           
         } else if (zwe >= 57052 && zwe <= 270500){
            
            est = (0.42 * zwe - 8963.74) * 2
            document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`; 

         } else if(zwe >= 270501) {
             est = (0.45 * zwe - 17078.74) * 2
             document.getElementById("ER").innerHTML = ` ${Number(est.toFixed(2))} €`;
         }
        }

        }
      
}










