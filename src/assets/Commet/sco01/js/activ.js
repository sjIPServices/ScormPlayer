

 ///////////////GENERALES/////////////////
 //-------------------------------------//
/*
    var lote = new Array();
    var cantidad;
    var numeros = new Array();
    var sponge;
    var locked = "no";
    var status = "";
    var select_1 = "";
    var select_2 = "";
    var select_3 = "";
    var select_4 = "";
    var select_5 = "";
    var select_6 = "";
    var select_7 = "";
    var select_8 = "";
    var select_9 = "";


    function hitTestInRange(target, range) {

      console.log(sponge);

      if (target.x > sponge.mouseX - range &&
          target.x < sponge.mouseX + range &&
          target.y > sponge.mouseY - range &&
          target.y < sponge.mouseY + range)
      {
          return true;
      } 
         return false;
    }

    function seleccionar(cantidad, numeros) {
      //this.cantidad = cantidad;
      //this.numeros = numeros;
   
      var tamano = numeros.length;
      //var lote = new Array();
   
      var indice = 0;
      do {
        var aleatorio = numeros[parseInt(Math.random()* tamano)];
        if(lote.indexOf(aleatorio)!=-1){
          continue;
        }else{
                  lote[indice]=aleatorio;
                  indice++;
                    }
      } while(lote.length < cantidad);
   
      //console.log(lote);
    }

*/
/* GENERALES para la plantilla */

// deshabilita el menu contextual del botón derecho en el video
   /* function inhabilitar(){ 
        //alert ("Esta función está inhabilitada.\n\nPerdonen las molestias.") 
        return false 
    } 
    var elemento = document.querySelector("video");
    if(elemento){
      elemento.oncontextmenu=inhabilitar;   
    }*/
    


// Para pasar automaticamente a otra lamina
      /*var key_arreglo = new Array(0,0,0,0);
      var key_prev = 0;
      var root = this;
      // codigo para pasar de pagina automaticamente
      window.addEventListener("keydown",hazListener);
      function hazListener(e){
        console.log("click: " + e.keyCode);
        switch(e.keyCode){
          case 37:
          if(key_prev==40){
            key_arreglo[2] = 37;
            key_prev = 37;
          }else{
            key_arreglo = [0,0,0,0];
          }
          break;
          case 38:
          key_arreglo = [0,0,0,0];
          key_arreglo[0] = 38;
          key_prev = 38;
          break;
          case 39:
          if(key_prev==37){
            key_arreglo[3] = 39;
            key_prev = 0;
            console.log(key_arreglo.toString());
            if(key_arreglo.toString() == "38,40,37,39"){
              key_arreglo = [0,0,0,0];
              angular.element(document.getElementsByTagName('body')).scope().pagesService.brilla();
              angular.element(document.getElementsByTagName('body')).scope().pagesService.nextPage();
            }
          }
          break;
          case 40:
          if(key_prev==38){
            key_arreglo[1] = 40;
            key_prev = 40;
          }else{
            key_arreglo = [0,0,0,0];
          }
          break;
        }
      }*/

      function dameActual(){
        //return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCurrentPage();
        return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPages();
      }
      function irA(pagina_){
        angular.element(document.getElementsByTagName('body')).scope().pagesService.goToPage(pagina_);
      }    
      function saveGrade(num, num_intentos, done){
          
        angular.element(document.getElementsByTagName('body')).scope().pagesService.setCalif(num, num_intentos, done);
        //angular.element(document.getElementsByTagName('body')).scope().scormService.goToPage(pagina_);
      } 
      function getGrade(){
          
        return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCalif();        
      }
      function getIntentos(){
        return angular.element(document.getElementsByTagName('body')).scope().pagesService.getIntentos();        
      }
      function setCurrentPage(num){
        angular.element(document.getElementsByTagName('body')).scope().pagesService.setCurrentPage(num);
      }
    
    function getPageStatus(num){
        return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPageStatus(num);
      }

        function setVideoActiv(num, arg){
             angular.element(document.getElementsByTagName('body')).scope().setVideo(num, arg);
        }

        function getVideoActiv(){
            return  angular.element(document.getElementsByTagName('body')).scope().getVideoIndex();
        }

        function stopVideoActiv(){
            return  angular.element(document.getElementsByTagName('body')).scope().stopVideo();
        }


        function quitarFinSesion(num, arg){    
            angular.element(document.getElementsByTagName('body')).scope().changeFlag(num, arg);
        }


      function getBookmark(num){
        return angular.element(document.getElementsByTagName('body')).scope().pagesService.getBookmark();        
      }

      function setBookmark(num){
        return angular.element(document.getElementsByTagName('body')).scope().pagesService.setBookmark(num);        
      }

         //window.parent.allowfullscreen = true;
      if(parent != null){ 
        if(parent.document != null){ 
          var iframe = parent.document.querySelectorAll("iframe"); 
          //var frames = parent.document.querySelectorAll("#activityFrame"); 

          //console.log(iframe);
          if(iframe!=null){
              for(var i=0;i<iframe.length;i++){
               // console.log(iframe[i]);
                  iframe[i].allowfullscreen = true;
                  iframe[i].setAttribute("allowFullScreen","true"); 
              }
              //iframe.allowFullScreen = true; 
              //iframe.setAttribute("allowFullScreen","true"); 
          }
          
        } 
      }