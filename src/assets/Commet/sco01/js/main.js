var mi_ruta = "";
var bandera_biblio = false;
var link_actual = "";
var elegido;

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}




$( document ).ready(function() {
    //"use strict";


	var todos_scroll=$('a.page-scroll');
	todos_scroll.bind('click', function(event) {

		var $anchor = $(this);
		console.log("click: " + $anchor.attr('href'));
		link_actual = $anchor.attr('href');
		//$('#content-wrapper').stop().animate({
        console.log("click: " + $anchor.attr('id'));
        
        if($anchor.attr('id')=="fin1"){
            quitarFinSesion(1,true);
        }
        if($anchor.attr('id')=="fin2"){
            quitarFinSesion(2,true);
        }
        if($anchor.attr('id')=="fin3"){
            quitarFinSesion(3,true);
        }
        
        
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
		}, 1250, 'easeInCubic');
		
		event.preventDefault();
	});
		
	var num_slide=0;
	var slideshows=$(".slideshow");
	slideshows.hide();
	
	var botones_normales=$(".slide-buttons .normal");
	var botones_elegidos=$(".slide-buttons .elegido");
	botones_elegidos.addClass("hidden");
	botones_normales.removeClass("hidden");
	
	console.log($(".slide-buttons .normal"));
	$('#btn-siguiente').bind('click', function(event) {

		var $anchor = $(this);
		var num_antes = num_slide;
				
		slideshows.hide();
		
		num_slide++;
		$("#slide"+num_slide).show();		
		$("#slide"+num_slide).css("marginLeft","100%").animate({        
            marginLeft:"0%"
        }); 
		
		//botones_normales.css("display","block");
		//botones_elegidos.css("display","none");
		//console.log(botones_normales);
		botones_elegidos.addClass("hidden");
		botones_normales.removeClass("hidden");
		
		$("#bullet"+num_slide+" .normal").addClass("hidden");
		$("#bullet"+num_slide+" .elegido").removeClass("hidden");
		
		if(num_slide>1){
			$("#btn-regresar").removeClass("disabled");
		}
		if(num_slide>=4){
			$("#btn-siguiente").addClass("disabled");
		}
		
		event.preventDefault();
	});
	
	
	
	$('#btn-regresar').bind('click', function(event) {

		var $anchor = $(this);
		var num_antes = num_slide;
				
		slideshows.hide();
		
		num_slide--;
		$("#slide"+num_slide).show();
		$("#slide"+num_slide).css("marginLeft","-100%").animate({        
            marginLeft:"0%"
        }); 
		
		botones_elegidos.addClass("hidden");
		botones_normales.removeClass("hidden");
		
		$("#bullet"+num_slide+" .normal").addClass("hidden");
		$("#bullet"+num_slide+" .elegido").removeClass("hidden");
		
		$("#btn-siguiente").removeClass("disabled");		
		if(num_slide<=1){
			$("#btn-regresar").addClass("disabled");
		}		
		
		event.preventDefault();
	});
	
	$(".slide-buttons a").bind('click', function(event) {
		
		var $anchor = $(this);
		var num_antes = num_slide;
				
		slideshows.hide();		
		verSlide($anchor.attr('href'));
				
		event.preventDefault();
	});

	
	function verSlide(que_numero){
		if(num_slide<que_numero){
			num_slide=que_numero;
			$("#slide"+num_slide).show();
			$("#slide"+num_slide).css("marginLeft","100%").animate({        
				marginLeft:"0%"
			}); 						 
		}else{
			num_slide=que_numero;
			$("#slide"+num_slide).show();
			$("#slide"+num_slide).css("marginLeft","-100%").animate({        
				marginLeft:"0%"
			});
		}
		
		
		botones_elegidos.addClass("hidden");
		botones_normales.removeClass("hidden");
		
		$("#bullet"+num_slide+" .normal").addClass("hidden");
		$("#bullet"+num_slide+" .elegido").removeClass("hidden");
						
		if(num_slide<=1){
			$("#btn-regresar").addClass("disabled");
		}else{
			$("#btn-regresar").removeClass("disabled");
		}
		if(num_slide>=4){
			$("#btn-siguiente").addClass("disabled");
		}else{
			$("#btn-siguiente").removeClass("disabled");
		}
	}
	// inicializa slideshow
	$('#btn-siguiente').click();
	
	
	// detecta si el usuario moueve la barra de scroll
	$(window).scroll(function() {
		
		//console.log($(window).scrollTop() + " == " + $("#info1").offset().top);
		/*switch($(window).scrollTop()){
			  case $(window).scrollTop() >= $("#info1").offset().top:
				$("#info1.elegido").removeClass("hidden");
				break;
		}*/
		//console.log("El usuario movio la barra de scroll");
		//console.log($("#elegido1").hasClass("hidden"));
		//if($(".elegido").hasClass("hidden")==false){		
			checaScroll();
	});
	
	
	
	if(window.parent){
	  window.parent.document.body.style.WebkitOverflowScrolling = "touch";
	  //alert("si estoy envuelto en un iframe");
	}
	
    $("tr.boton").on("click", function() {

        elegido = $(this).attr("id");
        if($(this).attr("movieurl")!=undefined){
            //var $iframe = $("#videos_drive");
            //if ( $iframe.length ) {
                //$iframe.attr('src',$(this).attr("movieurl") + "?autoplay='1'");                              
            //}
            HazModal($(this).attr("movieurl"));

        }                
    })
    
    
    var todos_section1=$('a.section1');
	todos_section1.bind('click', function(event) {

		var $anchor = $(this);
		console.log("click: " + $anchor.attr('href'));
        console.log("id: " + $anchor.attr('id'));
		//link_actual = $anchor.attr('href');
		//$('#content-wrapper').stop().animate({
        if($("#hoja1_1").hasClass("hidden")==false){		
			$("#hoja1_1").addClass("hidden");
		}
        if($("#hoja2_1").hasClass("hidden")==false){		
			$("#hoja2_1").addClass("hidden");
		}
        if($("#hoja3_1").hasClass("hidden")==false){		
			$("#hoja3_1").addClass("hidden");
		}
        
        $(".alphaImagen").css({borderBottom: "5px solid #ccc"});
        $(".alphaImagenRosa").css({borderBottom: "5px solid #ccc"});
        
        //var indice = $("#"+$anchor.attr('id'));
        //console.log(indice);
        if($("#"+$anchor.attr('href')).hasClass("hidden")==true){		
			$("#"+$anchor.attr('href')).removeClass("hidden");
                            
            $("#im"+$anchor.attr('id')).css({borderBottom: "5px solid #003d79"}); //a50050
            
		}
		
		
		event.preventDefault();
	});
    
    
    var todos_section2=$('a.section2');
	todos_section2.bind('click', function(event) {

        
        // obtengo el indice del video actual
        //var indice_video = getVideoActiv();
        // paro el video actual
        //setVideoActiv(indice_video, false);
        stopVideoActiv();
        
		var $anchor = $(this);
		console.log("click: " + $anchor.attr('href'));
        console.log("id: " + $anchor.attr('id'));
		//link_actual = $anchor.attr('href');
		//$('#content-wrapper').stop().animate({
        if($("#hoja1_2").hasClass("hidden")==false){		
			$("#hoja1_2").addClass("hidden");
		}
        if($("#hoja2_2").hasClass("hidden")==false){		
			$("#hoja2_2").addClass("hidden");            
		}       
        
        $("#info3").css("height","700");
        $("#conte_azul").css("height","405");
        
        $(".alphaImagen").css({borderBottom: "5px solid #ccc"});
        $(".alphaImagenRosa").css({borderBottom: "5px solid #ccc"});
        
        
        if($("#"+$anchor.attr('href')).hasClass("hidden")==true){
            
			$("#"+$anchor.attr('href')).removeClass("hidden");                        
            $("#im"+$anchor.attr('id')).css({borderBottom: "5px solid #a50050"}); //a50050
            
            
            if($anchor.attr('href') == "hoja1_2"){
                $("#info3").css("height","1446");
                $("#conte_azul").css("height","1150");
                
                // inicia el primer texto 
                //setCurrentPage(7); 
                //setVideoActiv(1, false);
                //setTexto(1);
                //saveGrade();
                //$("#videogral").hide();
            }
            if($anchor.attr('href') == "hoja2_2"){
                $("#info3").css("height","768");
                $("#conte_azul").css("height","473");
            }
		}
		
		
		event.preventDefault();
	});
    
    
    var todos_section3=$('a.section3');
	todos_section3.bind('click', function(event) {

		var $anchor = $(this);
		console.log("click: " + $anchor.attr('href'));
        console.log("id: " + $anchor.attr('id'));
		//link_actual = $anchor.attr('href');
		//$('#content-wrapper').stop().animate({
        if($("#hoja1_3").hasClass("hidden")==false){		
			$("#hoja1_3").addClass("hidden");
		}
        if($("#hoja2_3").hasClass("hidden")==false){		
			$("#hoja2_3").addClass("hidden");
		}       
        if($("#hoja3_3").hasClass("hidden")==false){		
			$("#hoja3_3").addClass("hidden");
		} 
        
        $(".alphaImagen").css({borderBottom: "5px solid #ccc"});
        $(".alphaImagenRosa").css({borderBottom: "5px solid #ccc"});
        
        if($("#"+$anchor.attr('href')).hasClass("hidden")==true){		
			$("#"+$anchor.attr('href')).removeClass("hidden");
            
             $("#im"+$anchor.attr('id')).css({borderBottom: "5px solid #a50050"}); //a50050
            
		}
		
		
		event.preventDefault();
	});
    
    
    /* despliega popup */
    /*$("#b5").click(function(event){
		var coordenadas = $(this).offset();
        for(var vari in coordenadas){
           // console.log(vari + " :: " + coordenadas[vari]);    
        }
        //console.log($(event.currentTarget).parent().style.offsetLeft);
        		
		$("#pop1").css("left",coordenadas.left - (parseInt($("#pop1").css("width"))/2) + (parseInt($(event.currentTarget).parent().css("width"))/2));
		$("#pop1").fadeIn("fast");
        event.preventDefault();
    }); 
	$("#cerrar_pop").click(function(){
		$("#pop1").fadeOut("fast");
	});
    */
    
    //$("#pop1").hide();
    checaScroll();
    // inicializa la lista de videos
    /*$("#num1").click(function(event){
        openCity(event, 'London');
     });
     $("#num1").click();*/
    
    setVideoActiv(1, true);
});


function setTexto(num){
    
    if($("#a1").hasClass("hidden")==false){		
		$("#a1").addClass("hidden");
	}
    if($("#a2").hasClass("hidden")==false){		
		$("#a2").addClass("hidden");
	}
    if($("#a3").hasClass("hidden")==false){		
		$("#a3").addClass("hidden");
	}
    if($("#a4").hasClass("hidden")==false){		
		$("#a4").addClass("hidden");
	}
    
    		
    $("#a"+num).removeClass("hidden");

}

function checaScroll(){
    console.log("Checa scroll:::");
        
    if($("#elegido1").hasClass("hidden")==false){
        $("#elegido1").addClass("hidden");
    }
    if($("#elegido2").hasClass("hidden")==false){
        $("#elegido2").addClass("hidden");
    }
    if($("#elegido3").hasClass("hidden")==false){
        $("#elegido3").addClass("hidden");
    }
    if($("#elegido4").hasClass("hidden")==false){
        $("#elegido4").addClass("hidden");
    }
    /*if($("#elegido5").hasClass("hidden")==false){
        $("#elegido5").addClass("hidden");
    }*/

		
				
        if($("#pagina1").hasClass("hidden")==false){                    
            if ($(window).scrollTop() >= $("#info1").offset().top && $(window).scrollTop() < $("#info2").offset().top-60) {               
              $("#elegido1").removeClass("hidden");  
                console.log("getCurrentPageStatus(1)::: " + getPageStatus(1));
                if(getPageStatus(1)===false){
                    setCurrentPage(1);
                    saveGrade();
                }
               
            }
            if ($(window).scrollTop() >= $("#info2").offset().top-60 && $(window).scrollTop() < $("#info3").offset().top-60) {			
              $("#elegido2").removeClass("hidden");
            }
            if ($(window).scrollTop() >= $("#info3").offset().top-60 && $(window).scrollTop() < $("#info4").offset().top-60) {			
              $("#elegido3").removeClass("hidden");
            }
            if ($(window).scrollTop() >= $("#info4").offset().top-60) {			
              $("#elegido4").removeClass("hidden");
                if(getPageStatus(8)===false){
                    setCurrentPage(8);
                    saveGrade();
                }                
            }
            /*if ($(window).scrollTop() >= $("#info5").offset().top) {			
              $("#elegido5").removeClass("hidden");  
                setCurrentPage(10);
                saveGrade();
            }*/
        } 
            
            
    if(window.parent){
	  window.parent.document.body.style.WebkitOverflowScrolling = "touch";
	  //alert("si estoy envuelto en un iframe");
	}
    
}
function HazModal(_str){
    console.log("HAZ MODAL::::");
    //alert("Haz modal");
    Resize();
    
    stopVideoActiv();
    
	// Hago visible la ventana modal
    var mod=document.getElementById("openModal");            
    var ruta = "";
    mi_ruta = _str;
    switch(_str){
            // videos        
            
        case "mod1":
			setCurrentPage(1);
        	ruta = "contenido/m_videos/index1.html";
        	break;
            
		case "mod2":
			setCurrentPage(2);
        	ruta = "contenido/capsula1/index.html";
        	break;
            
		case "mod3": // FALTA
			setCurrentPage(3);           
        	ruta = "contenido/capsula2/index.html";
            //ruta = "contenido/m3_No4/index.html";
        	break;
		
        case "mod4": 
			setCurrentPage(4);           
        	ruta = "contenido/capsula3/index.html";
        	break;
       
        case "mod5": 
			setCurrentPage(5);           
        	ruta = "contenido/capsula4/index.html";
        	break;
                                
		case "mod6": 
			setCurrentPage(6);
        	ruta = "contenido/capsula5/index.html";
        	break;
            
        /*case "mod7": // FALTA
			setCurrentPage(7);
        	ruta = "descargas/ejemplo_BF.pdf";
        	break;
            
            
        case "mod8": 
			setCurrentPage(8);
        	ruta = "descargas/infografia.pdf";
        	break;
            */
        case "mod9": 
			setCurrentPage(7);
        	ruta = "contenido/evaluacion/index.html";
        	break;
            
    }
	
    console.log("ruta: " + ruta); 
    //console.log(ruta.lastIndexOf("pdf"));
    if(ruta.lastIndexOf("pdf")!=-1){
      	// actualiza el currentPage de donde estoy
        //setCurrentPage(2);
        /* Guarda la calificacion */
        saveGrade();   
        // abre el pdf    
        window.open(ruta,"_blank");          

    }else if(ruta.indexOf("popup")!=-1){
        setTimeout(function(){
            mod.classList.add("visible");
        },100);
    }else if(ruta!=""){
        setTimeout(function(){
            mod.classList.add("visible");
        },100);

        //console.log("ruta.indexOf(m5_evaluacion) :::" + ruta.indexOf("m5_evaluacion"));
        
        if(ruta.indexOf("evaluacion") == -1){
            //console.log("SAVE GRADE:::::::");
            //saveGrade(); 
        }
         
        
        // Hago visible el curso Elearning dentro de la ventana modal
        var iframRecursosNuevo_ = document.getElementById("iframRecursosNuevo");
        iframRecursosNuevo_.style.display="block";
        iframRecursosNuevo_.src = ruta;    
    }
            
}

function HazCerrar(){
    console.log("cerrar MODAL::::");
    // quito el contenido del Elearning
    var iframRecursosNuevo_ = document.getElementById("iframRecursosNuevo");
    iframRecursosNuevo_.style.display="none";
    iframRecursosNuevo_.src = ""

    // oculto la ventana modal     
    var dTop=  document.getElementById("openModal");
	if(dTop){
		dTop.classList.remove("visible");       	
	}
    
    console.log("mi_ruta: " + mi_ruta);
	if(mi_ruta=="mod0_1"){
		//$("#oculto1").click();
		var $anchor = $("#oculto1");
		console.log("click: " + $anchor.attr('href'));
		//$('#content-wrapper').stop().animate({
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top)
		}, 1250, 'easeInCubic');
	}
    /*var dTop1=  document.getElementById("openModal2");
    dTop1.classList.remove("visible");  

    var dTop2=  document.getElementById("openModal3");
    dTop2.classList.remove("visible"); */ 
}

function verInfo(str){
    console.log("Ver pagina"+str);
    
    
        $("#pagina1, #pagina2, #pagina3, #pagina4, #pagina5").hide();  
    
        //$("#elegido1, #elegido2, #elegido3, #elegido4, #elegido5").hide(); 
    
    
        if($("#elegido1").hasClass("hidden")==false){
            $("#elegido1").addClass("hidden");
        }
        if($("#elegido2").hasClass("hidden")==false){
            $("#elegido2").addClass("hidden");
        }
        if($("#elegido3").hasClass("hidden")==false){
            $("#elegido3").addClass("hidden");
        }
        if($("#elegido4").hasClass("hidden")==false){
            $("#elegido4").addClass("hidden");
        }
        if($("#elegido5").hasClass("hidden")==false){
            $("#elegido5").addClass("hidden");
        }
    
    
        if($("#elegido"+str).hasClass("hidden")==true){
            $("#elegido"+str).removeClass("hidden");
        }
        //$("#elegido"+str).show(100);
        
	
    
        //angular.element(document.getElementsByTagName('body')).scope().stopVideo('video1');
    //angular.element(document.getElementsByTagName('body')).scope().stopVideo('video2');
    //angular.element(document.getElementsByTagName('body')).scope().stopVideo('video3');
    
        //setCurrentPage(str);
    
    
    
        /*$("#pagina"+str).scrollTop(0);
        checaScroll();
        $("#pagina"+str).show(600, function(){
            checaScroll();
        });*/
    
    
    
    
    //stayTopScroll(str);
}

/*
var slideIndex = [1,1];
// Class the members of each slideshow group with different CSS classes 
var slideId = ["mySlides1", "mySlides2"] 
//showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  console.log(slideIndex[no]+"="+n + "::: no="+no);  
  showSlides(slideIndex[no]=n, no);


  
  setCurrentPage(3);
  
  saveGrade();   

  //
  var acc = document.getElementsByClassName("accordion");
  if(n==1){
    
    acc[0].click();
  }
  if(n==2){
   
    acc[1].click();
  }
  if(n==3){   
    acc[2].click();
  }
  if(n==4){   
    acc[7].click();
  }
  if(n==5){   
    acc[12].click();
  }
}

function showSlides(n, no) {
  var i;
  //console.log("buscar: " + no + " :: " + slideId[no]);

  var x = document.getElementsByClassName(slideId[no]);
  //console.log(x);
  var dots;

  if (n > x.length) {slideIndex[no] = 1} 
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }

  //console.log(x[1]);
  x[slideIndex[no]-1].style.display = "block"; 

  if(no==0){
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex[no]-1].className += " active";
  }

  if(no==1){
     $(".panel2").css("max-height","");
     var pf = document.getElementsByClassName("pf");
    for (i = 0; i < pf.length; i++) {
        pf[i].className = pf[i].className.replace(" active-menu", "");
    }
    pf[slideIndex[no]-1].className += " active-menu";
  }
  
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active_accordion");
    var panel = this.nextElementSibling;

    for (j = 0; j < acc.length; j++) {
        //if(j!=i){
          var panel2 = acc[j].nextElementSibling;
            panel2.style.maxHeight = null;
        //}

      }
   //console.log("panel.style.maxHeight:: " + panel.style.maxHeight);
    //console.log("panel.scrollHeight:: " + panel.scrollHeight);

    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
    //console.log("panel.scrollHeight:: " + panel.scrollHeight);
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    setTimeout(ultimo,800);
  });
}

function ultimo(){
    $("#info_6").click();
}*/

/* funcion que redimensiona el iframe del curso */
function Resize(){
  console.log("RESIXZE::::");
  var iframRecursosNuevo_ = document.getElementById("iframRecursosNuevo");
  iframRecursosNuevo_.style.height = (window.innerHeight * 0.95) + "px";    
  iframRecursosNuevo_.style.marginTop = ((window.innerHeight * 0.05) / 2) + "px"; 
	
	// posiciona el scroll en el inicio de una seccion
	if(link_actual!=""){		
		/*$('html, body').stop().animate({
			scrollTop: ($(link_actual).offset().top)
		}, 1, 'easeInCubic');*/
	}
		

}
Resize();

window.onresize = function(){
    Resize();
}


 $("#btn_biblioteca").click(function(){

    if(bandera_biblio==false){
        $("#biblio").stop().animate({left: "0px"}, 600, "easeOutQuad");    
    }else{
        $("#biblio").stop().animate({left: "-290px"}, 600, "easeOutQuad");
    }
    bandera_biblio = !bandera_biblio;

}); 





// inicia las preguntas
