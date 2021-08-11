(function() {
    'use strict';

    var plantillaApp = angular.module('plantillaApp', 
        ['ngZavModal', 
        'scormwrapper', 
        'angularLoad', 
        'angularSpinner',
        "ngSanitize",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.buffering"
        ]);

    /*plantillaApp.config(function(snapRemoteProvider) {
        snapRemoteProvider.globalOptions = {
          disable: 'right',
          dragger: null,
          maxPosition: 255,
          hyperextensible: false,
          resistance: 0.5,
          tapToClose: false
          // ... others options
      };
    });*/

    plantillaApp.value('debug', true);
    plantillaApp.value('masteryScore', 80);

    plantillaApp.run([
      '$window',
      '$rootScope',
      function($window, scormService) {
        $window.addEventListener('beforeunload', function() {
          window.scormService.finish();
        });
      }
    ]);

    plantillaApp.controller('plantillaAppController', function($scope, $window, PagesService, $rootScope, $sce, scormService, videoService, $timeout){
        scormService.init();
        PagesService.init();
    
        $window.scormService = scormService;
        $scope.scormService = scormService;

        $scope.pagesService = PagesService;

        $scope.pagesArray = PagesService.getPages();

        $scope.nameUser = '';

        $scope.grade = 0;

        $scope.response = 'false';

        $scope.courseTitle = PagesService.getCourseTitle();


        /* ESPECIAL */
		$scope.item0_1 = false;
        $scope.fin_eval1 = false;

        $scope.item1_1 = false;                        
        $scope.item1_2 = false;                        
        $scope.item1_3 = false;                        
        $scope.item1_4 = false;                        
        $scope.item1_5 = false;                                                            
        $scope.fin_eval2 = false;

        $scope.item2_1 = false; 
        $scope.fin_eval3 = false;

        $scope.item3_1 = false; 
        $scope.fin_eval4 = false;

        
         // Video 

        $scope.videoVisible = false;

        $scope.state = null;
        $scope.API = null;
        $scope.currentVideo = 0;

        $scope.videos = [
            {
                sources: [{src: $sce.trustAsResourceUrl("contenido/m_videos/videos/solistica_commet.mp4"), type: "video/mp4"}]
            }
        ];

        $scope.config = {
                preload: 'auto',
                autoplay: false,
                sources: $scope.videos,
                theme: "bower_components/videogular-themes-default/videogular.css",
                plugins: {
                    controls: {
                        autoHide: true,
                        autoHideTime: 5000
                    }
                }
            };

        $scope.onPlayerReady = function(API) {
            //console.log("$scope[id]::: " + $scope);                                                
            $scope.API = API;            
            for (var vari in $scope.API){
                //console.log(vari + " ::: " + $scope.API[vari]);
            }                        
            videoService.init($scope);                                    
            
            console.log('init video...');
        };
        /*vm.onPlayerReady = function(API, id) {
		        	console.log('ID:', id );
		            vm.API = API;
		            videoService.init(vm);
		            console.log('init video...');
		        };*/
        

        $scope.onCompleteVideo = function() {
                $scope.isCompleted = true;
                console.log('Video is completed');
        };

        $scope.setVideo = function(index,iniciar) {
            console.log("Abrir video: " + index);
                $scope.API.stop();
                $scope.videoVisible = true;
                $scope.isCompleted = false;
                $scope.currentVideo = index;
                $scope.config.sources = $scope.videos[index-1].sources;
                if(iniciar==true){
                    //$timeout($scope.API.play.bind($scope.API), 500);
                }
                
                /*$timeout( function () {
                    console.log('play');
                    //$scope.API.play.bind($scope.API);
                    $scope.API.stop();
                }, 1000);*/
        };

        $scope.stopVideo = function(id) {
            //console.log("::::::::stop video::::::" + $scope.currentVideo + " id: " + id);
            
            /*for (vari in $scope){
                console.log(vari + " ::: " + $scope[vari]);
            }*/
            
                //$scope.config.sources = "";
                $scope.API.stop();
                //$scope.videoVisible = false;
                $scope.isCompleted = false;
        }; 

        $scope.getVideoIndex = function() {
            return $scope.currentVideo;
        };
        
        ///// Especial para esta version de CURSO
        $scope.goToPage = function(page){
			if(page==1){
				PagesService.goToPage(page);
			}else{// if(PagesService.getCurrentPageStatus()){
                console.log("currentPage:: " + $scope.pagesService.getCurrentPage());             
                if($scope.pagesService.getCurrentPage()>1){                
                    PagesService.goToPage(page);
                }
            }            
        };

        /*Agregados*/
        $scope.changeFlag = function(num, arg){
            console.log("CHANGE FLAG:: " + num + " arg:: " + arg);
            switch(num){
                case 1:
                    $scope.quitar_fin_eval1 = arg;
                    break;
                case 2:
                    $scope.quitar_fin_eval2 = arg;
                    break;
                case 3:
                    $scope.quitar_fin_eval3 = arg;
                    break;
            }
            $scope.$apply();
        }
        /* Hata aqui*/
        $scope.openQuit = function(){
            //$scope.openQuitModal = true;
            //$window.location.href = "../../index.html";
            /*$scope.openQuitModal = true;
            snapRemote.close();
            scormService.finish();*/
			$window.top.close();
             //$window.parent.HazCerrar();
        };

        $scope.$on('page_event', function(event, page) {
            console.log('page_event plantillaAppController:::');
            $scope.pagesArray = PagesService.getPages();

            //console.log(PagesService.getIntentos(2) + " ==1 || " + PagesService.getCalif(2) + " >=80");

			/* Primer boton en primer pantalla */
			//$scope.item0_1 = PagesService.getPageStatus(1);

			/* Menu 1 */
            $scope.item0_1 = PagesService.getPageStatus(1);
            $scope.fin_eval1 =$scope.item0_1;
                
			$scope.item1_1 = PagesService.getPageStatus(2);                        
            $scope.item1_2 = PagesService.getPageStatus(3);                        
            $scope.item1_3 = PagesService.getPageStatus(4);                        
            $scope.item1_4 = PagesService.getPageStatus(5);                        
            $scope.item1_5 = PagesService.getPageStatus(6);                                                            
            $scope.fin_eval2 = $scope.item1_1 && $scope.item1_2 && $scope.item1_3 && $scope.item1_4 && $scope.item1_5;
            
            $scope.item2_1 = PagesService.getPageStatus(7); 
            $scope.fin_eval3 = $scope.item2_1;
            
            $scope.item3_1 = PagesService.getPageStatus(8); 
            $scope.fin_eval4 = $scope.item3_1;
            
            console.log($scope.fin_eval1 + " :: " + $scope.fin_eval2 + " :: " + $scope.fin_eval3 + " :: " + $scope.fin_eval4);


            /* ESPECIAL para ENVIAR a LMS*/
            var vistos_todos=true;
            var suma_calif = 0;
            var divisor = 3; //$scope.pagesArray.length-1;
            //console.log("DIVISOR:: " + divisor);*/

            console.log("$scope.pagesArray.length:: " , $scope.pagesArray);
            for (var j = 0; j < $scope.pagesArray.length; j++) {
                if($scope.pagesArray[j].done==0){
                    vistos_todos = false;
                }
                if($scope.pagesArray[j].calif!="" && $scope.pagesArray[j].calif!=undefined){
                    if(String($scope.pagesArray[j].calif).indexOf("|")==-1 && String($scope.pagesArray[j].calif).indexOf("&")==-1){ 
                        console.log("SUMAR: " + parseInt($scope.pagesArray[j].calif));
                        suma_calif += parseInt($scope.pagesArray[j].calif);
                        console.log("SUMA_CALIF: " + suma_calif);
                    }
                    
                }
            }          

            // Ya se vieron todos y ya hay calificacion
            // En este caso solo hay una vez que s envia la calificacion y se cierra el curso
            //console.log("SE TERMINO el JUEGO::: " + vistos_todos + " && " + $scope.fin_eval1 + " && " + $scope.fin_eval2 + " && " + $scope.fin_eval3 + " && " + $scope.fin_eval4 + " && " + $scope.fin_eval5);
            console.log("SE TERMINO el JUEGO::: " + vistos_todos);
			
            var enviar_calif = suma_calif; // Math.round(suma_calif/divisor); ya que solo hayuna evaluación
            console.log("ENVIAR CALIF1 :: " + enviar_calif);			
            //if(vistos_todos && $scope.fin_eval1 && $scope.fin_eval2 && $scope.fin_eval3 && $scope.fin_eval4 && $scope.fin_eval5){
            if(vistos_todos==true){    
                //var enviar_calif = Math.round(suma_calif/divisor);
                //console.log("ENVIAR CALIF2 :: " + enviar_calif);

                scormService.saveGrade(enviar_calif);          
                // tambien se actualiza el objetivo            
				
                /*scormService.setValue("cmi.objectives.0.score.scaled",String((enviar_calif/100)));
                scormService.setValue("cmi.objectives.0.score.raw",String(enviar_calif));                          
                scormService.setValue("cmi.objectives.0.description",String(1));
                
                // debido a que utiliza completionThreshold en el manifest, lo que vuelve complete el sco es 
                // la variable progress_measure
                scormService.setValue("cmi.progress_measure","1"); 
                scormService.setValue("cmi.objectives.0.progress_measure","1");
                
                scormService.setValue("cmi.objectives.0.completion_status","completed");
                scormService.setValue("cmi.objectives.0.success_status","passed");
                */
				scormService.saveStatus("completed");
				
				/*
				var calif_final = 0;
				
				calif_final =  ( (parseInt(getCalif(6))+parseInt(getCalif(14))+parseInt(getCalif(17)) ) /3);  
				
				console.log("calif_final:: " + calif_final);
				
				scormService.saveGrade(calif_final);			
				scormService.setValue("cmi.objectives.0.score.scaled",String((calif_final/100)));
				scormService.setValue("cmi.objectives.0.score.raw",String(calif_final));							
				scormService.setValue("cmi.objectives.0.description",String(1));	
				*/
				
                //scormService.saveStatus("completed");
				
				if(enviar_calif>=80){
					scormService.saveStatus("passed");
				}else{
					scormService.saveStatus("failed");
				}
                
                              
            }

            //console.log("$scope.fin_eval1:: " + $scope.fin_eval1); 
        });

        $scope.$on('page_event_status', function(event) {
            console.log('page_event_status plantillaAppController:::');
            $scope.pagesArray = PagesService.getPages();
            			
			/* Primer boton en primer pantalla */
			//$scope.item0_1 = PagesService.getPageStatus(1);

			/* Menu 1 */
            $scope.item0_1 = PagesService.getPageStatus(1);
            $scope.fin_eval1 =$scope.item0_1;
                
			$scope.item1_1 = PagesService.getPageStatus(2);                        
            $scope.item1_2 = PagesService.getPageStatus(3);                        
            $scope.item1_3 = PagesService.getPageStatus(4);                        
            $scope.item1_4 = PagesService.getPageStatus(5);                        
            $scope.item1_5 = PagesService.getPageStatus(6);                                                            
            $scope.fin_eval2 = $scope.item1_1 && $scope.item1_2 && $scope.item1_3 && $scope.item1_4 && $scope.item1_5;
            
            $scope.item2_1 = PagesService.getPageStatus(7); 
            $scope.fin_eval3 = $scope.item2_1;
            
            $scope.item3_1 = PagesService.getPageStatus(8); 
            $scope.fin_eval4 = $scope.item3_1;
            
            console.log($scope.fin_eval1 + " :: " + $scope.fin_eval2 + " :: " + $scope.fin_eval3 + " :: " + $scope.fin_eval4);
            
            $scope.$apply();
        });


    });

    plantillaApp.service('PagesService', function ($http, $rootScope, scormService) {
        var _title = "";
        var _subtitle = "";
        var _currentPage = "";
        var _pagesArray = [];
        var _pagesLength = _pagesArray.length;
        var _nextEnabled = false;

        function _broadcast () {
            /* Coloca suspend en location*/
            var cadena="";
            for (var j = 0; j < _pagesArray.length; j++) {
                cadena += (_pagesArray[j].done ? 1:0);
                if(_pagesArray[j].calif!=undefined && _pagesArray[j].calif!=""){
                    cadena += "#"+(_pagesArray[j].calif);
                }
                if(_pagesArray[j].tiempo!=undefined && _pagesArray[j].tiempo!=""){
                    cadena += "#"+(_pagesArray[j].tiempo);
                }
                if(_pagesArray[j].intentos!=undefined && _pagesArray[j].intentos!=""){
                    cadena += "#"+(_pagesArray[j].intentos);
                }
                if(_pagesArray[j].bookmark!=undefined && _pagesArray[j].bookmark!=""){
                    cadena += "#"+(_pagesArray[j].bookmark);
                }
				
                if(j<_pagesArray.length-1){
                    cadena += "°";
                }
            }

            console.log("Guarda CALIF e INTENTOS en " + _currentPage);
            scormService.saveLocation(_currentPage);  

            console.log("Guarda BOOKMARK en SUSPEND::" + cadena);
            scormService.saveSuspend(cadena);			
			
            $rootScope.$broadcast('page_event', _pagesArray[_currentPage-1]);
        }

        function _broadcastStatus() {
            $rootScope.$broadcast('page_event_status');
            //console.log(_pagesArray);
        }

        function init() {
            $http.get('contenido/temario.json').success(function(data) {
                _currentPage = 1;
                _title = data.title;
                _pagesArray = data.pages;
                _pagesLength = _pagesArray.length;

                //scorm stuff
                var location = scormService.getLocation();
                //var location = "";

				/* Actualiza Suspend data en JSON*/
				//var get_cadena=scormService.getLocation();
				var get_cadena=scormService.getSuspend();
                
				
				//var get_cadena="1°1#1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|1|1|1|1|1&&96&&1°1#1|1&&2&&0°1#1&&1&&0°1#1&&1&&0°1#27#011#1&&1&&0°1°1°1°1°1#1|1&&2&&0°1#1|1&&2&&0°1#1|1&&2&&0°1#40#011#1&&1&&0°1#1&&1&&0°1°1#50#011#1&&1&&0°1°1";
				
				
				
				//var get_cadena="0°0#1|1|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0&&4&&0°0°0°0°0°0°0°0°0°1°1°1°0°0°0°0°0°0";
				
				//var get_cadena="0#0#0#0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0&&1&&0°0#0#0#1|1|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0&&4&&0°0°0°0°0°0°0°0°0°1°1°1°0°0°0°0°0°0";
				
				//var get_cadena = "1°1#1|1|1|1|1|1|1|1&&8&&°0°0°0°0°0°1";
				if(get_cadena){
					//var arreglo_cadena = get_cadena.split("&&");
                    //location = arreglo_cadena[1];

					//var cadena_array = arreglo_cadena[0].split("|");
					//var cadena_array = arreglo_cadena[0].split("°");
					var cadena_array = get_cadena.split("°");
					for (var j = 0; j < _pagesArray.length; j++) {
						console.log("CADENA PRUEBA::::" + cadena_array[j]);
						var _str_array = cadena_array[j].split("#");
						if(_str_array.length>1){
							_pagesArray[j].done = (_str_array[0]==1);
                            console.log("Se coloca en CALIF:: " + _str_array[1]);
							_pagesArray[j].calif = _str_array[1];							
							//_pagesArray[j].tiempo=_str_array[2];
							_pagesArray[j].intentos=_str_array[2];	
							_pagesArray[j].bookmark=_str_array[3];
						}else{
							_pagesArray[j].done = (cadena_array[j]==1);
						}
						
					}
				}	
				/* Hasta aqui suspend */
				/*for(var vari in _pagesArray){
                    console.log(vari  + " == " + _pagesArray[vari]);
                    for(var vari2 in _pagesArray[vari]){
                        console.log(vari2  + " == " + _pagesArray[vari][vari2]);
                    }
                }
				console.log("Temario inicial: " + _pagesArray);
                */
                if(location){
                    _currentPage = parseInt(location);
                }
				
                _broadcast();

            });
        }

        function getCurrentPage () {
            return _currentPage;
        }

        function getCurrentPageStatus () {
            if(_pagesArray!=undefined && _pagesArray.length>0){
                return _pagesArray[_currentPage - 1].done;
            }
        }

        function getPageStatus (num) {
            if(_pagesArray!=undefined && _pagesArray.length>0){
                return _pagesArray[num - 1].done;
            }
            
        }

        function getCourseTitle () {
            return _title;
        }

        function getCurrentSubtitle () {
            return _pagesArray[_currentPage - 1].name;
        }

        function getPages() {
            return _pagesArray;
        }

        function previousPage() {
            _currentPage--;
            //_subtitle = _pagesArray[_currentPage - 1].name;
            _broadcast ();
        }

        /* Adicionales */
        function setCalif(num, num_intentos, done){
            console.log(_currentPage + " num: " + num + " num_intentos: " + num_intentos + " done: " + done);
            if(num!=undefined){
                _pagesArray[_currentPage-1].calif = num;  			
				
            }
            if(num_intentos!=undefined){
                _pagesArray[_currentPage-1].intentos = num_intentos;    
            }
            if(done!=undefined){
                _pagesArray[_currentPage-1].done = done;
            }else{
                if(_pagesArray!=undefined && _pagesArray.length>0){
                    console.log("ACTUALIZA " + _currentPage + " a true ");
                    _pagesArray[_currentPage-1].done = true;
                }
                
            }
            
            //_pagesArray[_currentPage-1].done = true;

            _broadcast();
            _broadcastStatus();
            /* Verificar que ya esten todas las calificaciones o en su defecto las 2 oportunidades */

        }
        function getCalif(num){
            
            console.log("Regresa Calif: " + _pagesArray[_currentPage-1].calif);
            var valor=0;
            if(num!=undefined){
                if(_pagesArray[num-1].calif!=undefined){
                    valor = _pagesArray[num-1].calif;
                }                
            }else{
                if(_pagesArray[_currentPage-1].calif!=undefined){
                    valor = _pagesArray[_currentPage-1].calif;
                }
            }
            return valor;
        }
		
        /* Adicionales */
        function setBookmark(num){
            console.log(_currentPage + " num BOOKMARK: " + num);
            if(num!=undefined){
                _pagesArray[_currentPage-1].bookmark = num;
				
                if(_pagesArray[_currentPage-1].calif != undefined){                    
                }else{ _pagesArray[_currentPage-1].calif = "0"; }
				
                if(_pagesArray[_currentPage-1].intentos != undefined){                     
                }else{ _pagesArray[_currentPage-1].intentos = "0"; }				
            }else{
                if(_pagesArray!=undefined && _pagesArray.length>0){
                    _pagesArray[_currentPage-1].bookmark = "";
                }			
				
            }
            
            //_pagesArray[_currentPage-1].done = true;

            _broadcast();
            _broadcastStatus();
            /* Verificar que ya esten todas las calificaciones o en su defecto las 2 oportunidades */

        }
		
        function getBookmark(num){
            
            console.log("Regresa Bookmark: " + _pagesArray[_currentPage-1].bookmark);
            var valor=0;
            if(num!=undefined){
                if(_pagesArray[num-1].bookmark!=undefined){
                    valor = _pagesArray[num-1].bookmark;
                }                
            }else{
                if(_pagesArray[_currentPage-1].bookmark!=undefined){
                    valor = _pagesArray[_currentPage-1].bookmark;
                }
            }
            return valor;
        }		
		
        function getIntentos(num){
            console.log("_currentPage:: " + _currentPage);
            console.log("Regres array: ", _pagesArray[_currentPage-1]);
            console.log("Regres aIntentos: " + _pagesArray[_currentPage-1].intentos);
            var valor=0;
            if(num!=undefined){
                if(_pagesArray[num-1].intentos!=undefined){
                    valor = _pagesArray[num-1].intentos;
                }
            }else{
                for(var vari in _pagesArray[_currentPage-1]){
                    console.log(vari + " :: " + _pagesArray[_currentPage-1][vari]);
                }
                
                console.log(_pagesArray[_currentPage-1].intentos +"!=undefined ::: " + (_pagesArray[_currentPage-1].intentos!=undefined));
                if(_pagesArray[_currentPage-1].intentos!=undefined){
                    valor = _pagesArray[_currentPage-1].intentos;
                }
            }
            return valor;
        }
        function setCurrentPage(num){
            console.log("actualiza currentPage---- "  + num);
            _currentPage = num;
        }
        /* Hasta aqui agregados*/
       function nextPage() {
            console.log(_currentPage +" === " + _pagesArray.length);
            if(_currentPage === _pagesArray.length){
                scormService.Continue();
            }else{
                if(_pagesArray[_currentPage-1].done){ 
                    _pagesArray[_currentPage-1].done = true;
                    _currentPage++;
                    //_subtitle = _pagesArray[_currentPage - 1].name;
                    _broadcast ();
                }
            }
          
        }

        function goToPage(page) {
            _currentPage = page;
            //_subtitle = _pagesArray[_currentPage - 1].name;
            _broadcast ();
        }

        function brilla(page) {
            console.log('brilla');
            _pagesArray[_currentPage-1].done = true;

            /* Coloca suspend en location*/
            var cadena="";
            for (var j = 0; j < _pagesArray.length; j++) {
                cadena += (_pagesArray[j].done ? 1:0);
                if(_pagesArray[j].calif!=undefined && _pagesArray[j].calif!=""){
                    cadena += "#"+(_pagesArray[j].calif);
                }
                if(_pagesArray[j].tiempo!=undefined && _pagesArray[j].tiempo!=""){
                    cadena += "#"+(_pagesArray[j].tiempo);
                }
                if(_pagesArray[j].intentos!=undefined && _pagesArray[j].intentos!=""){
                    cadena += "#"+(_pagesArray[j].intentos);
                }

                if(_pagesArray[j].bookmark!=undefined && _pagesArray[j].bookmark!=""){
                    cadena += "#"+(_pagesArray[j].bookmark);
                }
				
				
                if(j<_pagesArray.length-1){
                    cadena += "°";
                }
            }

            scormService.saveLocation(_currentPage); 
			scormService.saveSuspend(cadena); 
			
            _broadcastStatus();
        }

        return {
            getCourseTitle: getCourseTitle,
            getCurrentSubtitle: getCurrentSubtitle,
            getCurrentPage: getCurrentPage,
            getPageStatus: getPageStatus,
            getCurrentPageStatus: getCurrentPageStatus,
            getPages: getPages,
            pagesArray: _pagesArray,
            pagesLength: _pagesLength,
            init: init,
            previousPage: previousPage,
            nextPage: nextPage,
            goToPage: goToPage,
            brilla: brilla,
            setCalif: setCalif,
            getCalif: getCalif,
            getIntentos: getIntentos,
            setCurrentPage: setCurrentPage,
			setBookmark: setBookmark,
			getBookmark: getBookmark
        };
    });

    plantillaApp.controller('navController', function($scope, PagesService){

        $scope.title = PagesService.getCourseTitle();
        $scope.currentPage = "";
        $scope.pagesLength = PagesService.getPages().length;
        $scope.currentPageStatus = false;

        $scope.goPrevious = function(){
            PagesService.previousPage();
        };

        $scope.goNext = function(){
            PagesService.nextPage();
        };

        $scope.$on('page_event', function(event, page) {
            console.log('page_event ---NAV_CONTROLER---');
            $scope.title = PagesService.getCourseTitle();
            //$scope.subtitle = page.name;
            $scope.currentPage = PagesService.getCurrentPage();
            $scope.pagesLength = PagesService.getPages().length;
            $scope.currentPageStatus = PagesService.getCurrentPageStatus();
            console.log('FIN ---NAV_CONTROLER---');
        });

        $scope.$on('page_event_status', function(event) {
            console.log('page_event_status -- NAV_CONTROLER --');
            $scope.currentPageStatus = PagesService.getCurrentPageStatus();

            $scope.$apply();
            console.log('FIN -- NAV_CONTROLER --');
        });

    });

   plantillaApp.service('scormService', function(scormWrapper, debug){

        var api;
        var startTime;

        this.time_sco = function(intTotalMilliseconds){
            var ScormTime = "";
            
            var HundredthsOfASecond;    //decrementing counter - work at the hundreths of a second level because that is all the precision that is required
            
            var Seconds;    // 100 hundreths of a seconds
            var Minutes;    // 60 seconds
            var Hours;      // 60 minutes
            var Days;       // 24 hours
            var Months;     // assumed to be an "average" month (figures a leap year every 4 years) = ((365*4) + 1) / 48 days - 30.4375 days per month
            var Years;      // assumed to be 12 "average" months
            
            var HUNDREDTHS_PER_SECOND = 100;
            var HUNDREDTHS_PER_MINUTE = HUNDREDTHS_PER_SECOND * 60;
            var HUNDREDTHS_PER_HOUR   = HUNDREDTHS_PER_MINUTE * 60;
            var HUNDREDTHS_PER_DAY    = HUNDREDTHS_PER_HOUR * 24;
            var HUNDREDTHS_PER_MONTH  = HUNDREDTHS_PER_DAY * (((365 * 4) + 1) / 48);
            var HUNDREDTHS_PER_YEAR   = HUNDREDTHS_PER_MONTH * 12;
            
            HundredthsOfASecond = Math.floor(intTotalMilliseconds / 10);
            
            Years = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_YEAR);
            HundredthsOfASecond -= (Years * HUNDREDTHS_PER_YEAR);
            
            Months = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MONTH);
            HundredthsOfASecond -= (Months * HUNDREDTHS_PER_MONTH);
            
            Days = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_DAY);
            HundredthsOfASecond -= (Days * HUNDREDTHS_PER_DAY);
            
            Hours = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_HOUR);
            HundredthsOfASecond -= (Hours * HUNDREDTHS_PER_HOUR);
            
            Minutes = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MINUTE);
            HundredthsOfASecond -= (Minutes * HUNDREDTHS_PER_MINUTE);
            
            Seconds = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_SECOND);
            HundredthsOfASecond -= (Seconds * HUNDREDTHS_PER_SECOND);
            
            if (Years > 0) {
                ScormTime += Years + "Y";
            }
            if (Months > 0){
                ScormTime += Months + "M";
            }
            if (Days > 0){
                ScormTime += Days + "D";
            }
            
            //check to see if we have any time before adding the "T"
            if ((HundredthsOfASecond + Seconds + Minutes + Hours) > 0 ){
                
                ScormTime += "T";
                
                if (Hours > 0){
                    ScormTime += Hours + "H";
                }
                
                if (Minutes > 0){
                    ScormTime += Minutes + "M";
                }
                
                if ((HundredthsOfASecond + Seconds) > 0){
                    ScormTime += Seconds;
                    
                    if (HundredthsOfASecond > 0){
                        ScormTime += "." + HundredthsOfASecond;
                    }
                    
                    ScormTime += "S";
                }
                
            }
            
            if (ScormTime == ""){
                ScormTime = "0S";
            }
            
            ScormTime = "P" + ScormTime;
            
            return ScormTime;
        }

        this.init = function() {
            this.log("Finding API...");
            scormWrapper.setAPIVersion('1.2');
            api = scormWrapper.doLMSInitialize();
			
            if(api){  
                this.log('API Founded!');              
				
                startTime = new Date;

                var estatus = this.getStatus();
				if(scormWrapper.getAPIVersion()=="2004"){
					if(estatus=="unknown"){
						this.saveStatus('incomplete');
					}
				}else{
					if(estatus=="not attempted"){
						this.saveStatus('incomplete');
					}
				}
				
				scormWrapper.doLMSCommit();
            }
        };

        this.finish = function() {
            this.log('Finish');
            if(api){

                /* Reporte de sesion de tiempo*/                
                var endTimeStamp = new Date();
                var totalMilliseconds = (endTimeStamp.getTime() - startTime.getTime());
                var scormTime = this.time_sco(totalMilliseconds);

                console.log(scormWrapper.getAPIVersion() + " == 2004 ::: " + (scormWrapper.getAPIVersion()=="2004"));
				if(scormWrapper.getAPIVersion()=="2004"){
                    console.log("Guardo el tiempo: " + scormTime + " y EXIT a suspend");
                    scormWrapper.doLMSSetValue("cmi.session_time",scormTime);
					scormWrapper.doLMSSetValue("cmi.exit","suspend");
				}else{
                    scormWrapper.doLMSSetValue("cmi.core.session_time",scormTime);
                }
                scormWrapper.doLMSFinish();
            }
        };

        this.Continue = function(){
            // we request the next SCO from the LMS
            scormWrapper.doLMSSetValue("adl.nav.request", "continue");
           
            // we terminate this SCO's communication with the LMS
            this.finish();
        }

        this.getGrade = function() {
            var result;
            this.log('getGrade');
            if(api){
				if(scormWrapper.getAPIVersion()=="2004"){
                    result = scormWrapper.doLMSGetValue('cmi.score.raw');					
				}else{
					result = scormWrapper.doLMSGetValue('cmi.core.score.raw');
				}
                if(result) {
                    this.log('Grade: ' + result);
                }
            }
            return result;
        };

        this.saveGrade = function(grade) {
            var result;
            this.log('saveGrade: ' + grade);
            if(api){
				if(scormWrapper.getAPIVersion()=="2004"){
					result = scormWrapper.doLMSSetValue("cmi.score.min","0");
                    result = scormWrapper.doLMSSetValue("cmi.score.max","100");
                    result = scormWrapper.doLMSSetValue("cmi.score.raw",String(grade));
                    result = scormWrapper.doLMSSetValue("cmi.score.scaled",String(grade/100));
				}else{	
                    result = scormWrapper.doLMSSetValue('cmi.core.score.raw', grade);					
				}
                
                scormWrapper.doLMSCommit();
                if(result) {
                    this.log('Grade saved succesfully!');
                }
            }
        };

        this.getLocation = function() {
            var result;
            this.log('getLocation');
            if(api){
				if(scormWrapper.getAPIVersion()=="2004"){
                	result = scormWrapper.doLMSGetValue('cmi.location');
				}else{
                    result = scormWrapper.doLMSGetValue('cmi.core.lesson_location');					
				}
                if(result) {
                    this.log('Location: ' + result);
                }
            }
            return result;
        };

        this.saveLocation = function(location) {
            var result;
            this.log('saveLocation: ' + location);
            if(api){    
				if(scormWrapper.getAPIVersion()=="2004"){
					result = scormWrapper.doLMSSetValue('cmi.location', location);
				}else{
                    result = scormWrapper.doLMSSetValue('cmi.core.lesson_location', location);
				}
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('Location saved succesfully!');
            }
        };

        this.getSuspend = function() {
            var result;
            this.log('getSuspend');
            if(api){
				// es igual en 1.2 y 2004
                result = scormWrapper.doLMSGetValue('cmi.suspend_data');
                if(result) {
                    this.log('suspend_data: ' + result);
                }
            }
            return result;
        };

        this.saveSuspend = function(suspend_data) {
            var result;
            this.log('saveSuspend: ' + suspend_data);
            if(api){	
				// es igual en 1.2 y 2004
                result = scormWrapper.doLMSSetValue('cmi.suspend_data', suspend_data);
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('suspend_data saved succesfully!');
            }
        };

        this.getStatus = function() {
            var result;
            this.log('getStatus');
            if(api){
				if(scormWrapper.getAPIVersion()=="2004"){
                	result = scormWrapper.doLMSGetValue('cmi.completion_status');
				}else{
                    result = scormWrapper.doLMSGetValue('cmi.core.lesson_status');					
				}
                if(result) {
                    this.log('Status: ' + result);
                }
            }
            return result;
        };

        this.saveStatus = function(status) {
            var result;
            this.log('saveStatus: ' + status);
            if(api){
				if(scormWrapper.getAPIVersion()=="2004"){
                	if(status=="passed"){
                        result = scormWrapper.doLMSSetValue('cmi.success_status', status);
                    }else{
                        result = scormWrapper.doLMSSetValue('cmi.completion_status', status);
                    }
				}else{
                    result = scormWrapper.doLMSSetValue('cmi.core.lesson_status', status);									
				}
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('Status saved succesfully!');
            }
        };

        this.getValue = function(cual_variable){
            var result;
            this.log('getValue: ' + cual_variable);
            if(api){ 
                result = scormWrapper.doLMSGetValue(cual_variable);              
            }
            if(result) {
                this.log('result: ' + result);
            }
            return result;
        };

        this.setValue = function(cual_variable, status) {
            var result;
            this.log('setValue: ' + cual_variable + " = " + status);
            if(api){
                result = scormWrapper.doLMSSetValue(cual_variable, status);                                    
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log(cual_variable + ' saved succesfully!');
            }
        };

        this.log = function(msg) {
            if(debug){
                console.log(msg);
            }
        };

    });

    plantillaApp.directive('canvasLoader', function (angularLoad, $window, scormWrapper, PagesService, usSpinnerService) {

       return {
           restrict : 'EAC',
           replace : true,
           scope :{
           },

           template: '<div class="contenedorPaginas"><span us-spinner spinner-key="spinner"></span><canvas id="canvas" width="1024" height="588"></canvas></div>',
           link: function (scope, element, attribute, rootScope) {
               var w, h, loader;

               scope.currentPage = "";
               console.log("LINK:: CANVAS");
               scope.$on('page_event', function(event, page) {
                    console.log("PAGE_EVENT:: CANVAS");
                    scope.currentPage = page.name;
                    usSpinnerService.spin('spinner');
                    console.log("Ver spinner:::: ");

                    if (scope.stage) {
                        console.log("GRAL ya hay stage y lo limpia:::: ");
                      scope.stage.autoClear = true;
                      scope.stage.removeAllChildren();
						
					  // Para videos si esta en ejecucion y los quita de la vista JGC
					 /* $window.video1.pause();				 
					  $window.video1.currentTime = 0;
					  $window.video1.style.display = "none";	
					  // Para sonidos
					  createjs.Sound.stop();
						*/
                    }
                    
                    console.log('contenido/' + page.name + '/' + page.name + '.js');

                    angularLoad.loadScript('contenido/' + page.name + '/' + page.name + '.js').then(function() {
                        // Script loaded succesfully.
                        drawGame();
                    }).catch(function() {
                        // There was some error loading the script. Meh
                        console.log("Error Loading page!");
                    }).finally(function() {

                    });
                    //drawGame();
                });




               function drawGame() {
                   //drawing the game canvas from scratch here
                   //In future we can pass stages as param and load indexes from arrays of background elements etc

                   /*if (scope.stage) {
                       scope.stage.autoClear = true;
                       scope.stage.removeAllChildren();
                       scope.stage.update();
                       createjs.Sound.stop();

                        //----------//CAMBIO MARZO 16 2016 
                        //FUNCIONALIDAD EN MOVIL DE DRAG AND DROP
                       createjs.Touch.enable(scope.stage);

                        // enabled mouse over / out events
                        scope.stage.enableMouseOver(10);
                        // keep tracking the mouse even when it leaves the canvas
                        scope.stage.mouseMoveOutside = true; 
                        //----------///
                        
                   } else {
                       scope.stage = new createjs.Stage(element.children(1)[1]);

                       onResize();
                   }
                   w = lib.properties.width;
                   h = lib.properties.height;

                   loader = new createjs.LoadQueue(false);
                    loader.installPlugin(createjs.Sound);
                    if(lib.properties.manifest.length === 0){
                        handleComplete();
                    } else {
                        loader.addEventListener("fileload", handleFileLoad);
                        loader.addEventListener("complete", handleComplete);
                        loader.loadManifest(lib.properties.manifest, true, "contenido/" + scope.currentPage + "/");
                    }
                    */
               }

               function handleFileLoad(evt) {
                   if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
               }

               function handleComplete(evt, name) {
                    /*scope.exportRoot = new lib[scope.currentPage]();
                    scope.exportRoot.scormService = scormService;
                    scope.exportRoot.pagesService = PagesService;
                    scope.exportRoot.ModalsService = ModalsService;
                    scope.exportRoot.GradeService = GradeService;
                    scope.exportRoot.videoService = videoService;
                    scope.exportRoot.scope = scope;

                    //scope.stage = new createjs.Stage(scope.canvas);
                    scope.stage.addChild(scope.exportRoot);

                    sponge = scope.stage;
                    //console.log(scope.stage);
                    //console.log(scope.exportRoot);
                    scope.stage.update();
                    usSpinnerService.stop('spinner');

                    createjs.Ticker.setFPS(lib.properties.fps);
                    createjs.Ticker.addEventListener("tick", scope.stage);
                    // llama a onResize
                    //createjs.Ticker.addEventListener("tick", onResize);
                    */
               }

               function onResize(){
                console.log("ONRESIZE");
                    // var WIDTHSIZE = lib.properties.width;
                    // var HEIGHTSIZE = lib.properties.height;
                   /*var WIDTHSIZE = 1024;
                    var HEIGHTSIZE = 588;				   								   

                    var gameWidth = $window.innerWidth;
                    var gameHeight = $window.innerHeight-70;

                    var scaleToFitX = gameWidth / WIDTHSIZE;
                    var scaleToFitY = gameHeight / HEIGHTSIZE;

                    var currentScreenRatio = gameWidth / gameHeight;
                    var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
					
                    if (currentScreenRatio >= 1.76 && currentScreenRatio <= 1.77) {
                        //canvas.style.width = gameWidth + "px";
                        //canvas.style.height = gameHeight + "px";

						canvas.width = gameWidth;
                        canvas.height = gameHeight;

						scope.stage.scaleX = optimalRatio;			
						scope.stage.scaleY = optimalRatio;
						//Para redimensionar los VIDEOS
						$window.video1.style.width = "1010px";	
						$window.video1.style.top = "30px";
						
                    } else {
                        //canvas.style.width = WIDTHSIZE * optimalRatio + "px";
                        //canvas.style.height = HEIGHTSIZE * optimalRatio + "px";

                        canvas.width = WIDTHSIZE * optimalRatio;
                        canvas.height = HEIGHTSIZE * optimalRatio;
						
						scope.stage.scaleX = 1 * optimalRatio;			
						scope.stage.scaleY = 1 * optimalRatio;
						//Para redimensionar los VIDEOS
						$window.video1.style.width = (1010 * optimalRatio) + "px";	
						$window.video1.style.top = (30 * optimalRatio) + "px";
                    }
         
                    /// centrar animacion
                    canvas.style.marginLeft = ((gameWidth - parseInt(canvas.width)) / 2) + "px";
                    //canvas.style.marginTop = ((gameHeight - parseInt(canvas.height)) / 2) + "px";

                    $window.video1.style.left = ((gameWidth - parseInt($window.video1.style.width)) / 2) + "px"; 
                    //if(parseInt(canvas.style.marginTop)>0){
                    $window.video1.style.top = ((gameHeight - parseInt($window.video1.style.height)) / 2) + "px";
                    //}  
                    */                  
               }

			   $window.playSound = function(id, loop) {
                    //createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
                };
			   
                //$window.onresize = function(){onResize();scope.$apply();};

           }
       };
   });
    /*
    plantillaApp.factory('gradeFactory', ['$http', function($http) {

        var url = 'server/mailService.php';
        var gradeFactory = {};

        gradeFactory.sendGrade = function (obj) {
            return $http(
             {method: 'POST',
              url: url,
              // headers: {
              //   'Content-Type':'application/x-www-form-urlencoded'
              // },
              data: {
                name : obj.name,
                grade: obj.grade,
                courseTitle: obj.courseTitle
              }
          });
        };

        return gradeFactory;

    }]);
*/
    plantillaApp.service('videoService', function() {

        var scope;

        this.init = function($scope) {
            scope = $scope;
        };

        this.playVideo = function(index){
            console.log('play video: ' + index);
            if(scope){
                scope.setVideo(index - 1);
            } else {
                console.log('Service not initialized');
            }
        };

    })

    plantillaApp.service('GradeService', function(scormService){
        var grade = 0;

        var attempt = 0;

        this.setGrade = function(num){
            grade = num;
            scormService.saveGrade(grade);
        };

        this.getGradedo = function(){
            return grade;
        };

        this.addAttempt = function(){
            attempt++;
        };

        this.getAttempt = function(){
            return attempt;
        };

        return this;
    });

    plantillaApp.service('ModalsService', function(){
        
        var scope;

        this.init =function($scope){
            scope = $scope;
        };

        this.openSendDataModal = function(){
            console.log('openSendDataModal called');
            if(scope){
                scope.openSendData();
            } else {
                console.log('service not initialized');
            }
        };

        return this;
    });

})();

