(function() {
    'use strict';

    var plantillaApp = angular.module('plantillaApp', 
        ['snap', 
        'ngZavModal', 
        'scormwrapper', 
        'angularLoad', 
        'angularSpinner',
        "ngSanitize",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.buffering",
        "com.2fdevs.videogular.plugins.poster"
        ]);
//,"com.2fdevs.videogular.plugins.poster"
    plantillaApp.config(function(snapRemoteProvider) {
        snapRemoteProvider.globalOptions = {
          disable: 'right',
          dragger: null,
          maxPosition: 255,
          hyperextensible: false,
          resistance: 0.5,
          tapToClose: false
          // ... others options
      };
    });

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

    plantillaApp.controller('plantillaAppController', function($scope, $window, PagesService, $rootScope, snapRemote, scormService, gradeFactory, GradeService, ModalsService, $sce, videoService, $timeout){
        scormService.init();
        PagesService.init();
        

        ModalsService.init($scope);
                   

        $window.scormService = scormService;
        $scope.scormService = scormService;

        $scope.pagesService = PagesService;

        $scope.pagesArray = PagesService.getPages();

        $scope.cargando = false;

        $scope.audio = true;

        $scope.nameUser = '';

        $scope.grade = 0;

        $scope.response = 'false';

        $scope.courseTitle = PagesService.getCourseTitle();

        // Video 

        $scope.videoVisible = false;

        $scope.state = null;
        $scope.API = null;
        $scope.currentVideo = 0;

        $scope.videos = [
            {sources: [{src: $sce.trustAsResourceUrl("videos/BBVA1801_MA_Etapa_2_AJ_video intro_v5.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/df/Como_eliminar_y_editar_mis_Factores_Criticos.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/df/Como_definir_y_capturar_mis_Factores_Criticos_Valores_en_el_modulo_de_Formulario_de_Talento.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/df/Como_cascadearme_un_Factor_Critico.mp4"), type: "video/mp4"}]},
            
            {sources: [{src: $sce.trustAsResourceUrl("videos/jefe/df/Como_definir_y_capturar_Factores_Criticos_y_Valores_a_mis_colaboradores_en_el_modulo_de_Formularios_de_Talento.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/jefe/df/Como_cascadear_mis_Factores_Criticos_a_colaboradores_directos.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/jefe/df/Como_eliminar_y_editar_un_Factor_Critico_a_mis_colaboradores.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/jefe/df/Como_definir_y_capturar_un_Factor_Critico_a_un_Colaborador.mp4"), type: "video/mp4"}]},

            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/revision/Como_capturar_una_Revision_Vertical.mp4"), type: "video/mp4"}]},

            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/seguimiento/Como_utilizar_Seguimiento_Continuo.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/jefe/seguimiento/Como_utilizar_el_modulo_de_Seguimiento_Continuo_con_mis_colaboradores.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/jefe/seguimiento/Como_solicitar_una_retroalimentacion_en_cualquier_etapa_de_Gestion_del_Desempeno.mp4"), type: "video/mp4"}]},
            
            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/cierre/Como_responder_una_retroalimentacion_del_Gestion_de_Desempeno.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/cierre/Como_realizar_el_cierre_de_mis_Factores_Criticos_y_Valores.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/cierre/Como_responder_una_retroalimentacion_en_etapa_de_cierre.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/cierre/Como_firmar_el_Formulario_de_Gestion_del_Desempeno_en_etapa_de_cierre.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/colaborador/cierre/Como_validar_los_resultados_de_mis_Formularios_de_Gestion_de_Desempeno_en_Perfil_del_Colaborador.mp4"), type: "video/mp4"}]},            

            {sources: [{src: $sce.trustAsResourceUrl("videos/jefe/cierre/Como_realizar_el_cierre_del_Formulario_de_Gestion_del_Desempeno_de_mis_colaboradores.mp4"), type: "video/mp4"}]},
            {sources: [{src: $sce.trustAsResourceUrl("videos/jefe/cierre/Como_solicitar_una_retroalimentacion_en_etapa_de_cierre.mp4"), type: "video/mp4"}]}
        ];

        $scope.config = {
                preload: 'auto',
                autoplay: false,                
                sources: $scope.videos,                
                theme: "bower_components/videogular-themes-default/videogular.css",
                plugins: {
                    poster: "img/poster.jpg",
                    controls: {
                        autoHide: true,
                        autoHideTime: 5000
                    }
                                   
                }
            };

        $scope.onPlayerReady = function(API) {
            $scope.API = API;
            videoService.init($scope);
            console.log('init video...');
        };

        $scope.onCompleteVideo = function() {
                $scope.isCompleted = true;
                /*$scope.pagesService.brilla();*/
                $scope.scormService.saveGrade();
                console.log('Video is completed');
        };

        $scope.setVideo = function(index) {
                $scope.currentTime = 50;
                $scope.API.stop();
                $scope.videoVisible = true;
                $scope.isCompleted = false;
                $scope.currentVideo = index;

                $scope.config.sources = $scope.videos[index].sources;
                //$timeout($scope.API.play.bind($scope.API), 2000);
                $timeout( function () {
                    console.log('play');
                    //$scope.API.play.bind($scope.API);
                    $scope.API.stop();
                }, 1000);
        };

        $scope.stopVideo = function() {
                $scope.API.stop();
                //$scope.videoVisible = false;
                $scope.isCompleted = false;
                $scope.openQuit();
        };

        ///// Especial para esta version de CURSO
        $scope.goToPage = function(page){
            /*if(page==1){
                PagesService.goToPage(page);
                snapRemote.close();
            }else{// if(PagesService.getCurrentPageStatus()){
                console.log("currentPage:: " + $scope.pagesService.getCurrentPage());             
                if($scope.pagesService.getCurrentPage()>1){                
                    PagesService.goToPage(page);
                    snapRemote.close();
                }
            }*/
                PagesService.goToPage(page);
                snapRemote.close();        
        };

        $scope.toogleAudio = function() {            
            var iVideo = $window.video1;
            if($scope.audio){
                createjs.Sound.volume = 0;
        
                if(iVideo!=undefined){
                    iVideo.volume=0;
                }

                $scope.audio = false;
            } else {
                createjs.Sound.volume = 1;
                 
                if(iVideo!=undefined){
                    iVideo.volume=1;
                }

                $scope.audio = true;
            }
        };


        $scope.openHelp = function(){
            $scope.openHelpModal = true;
            snapRemote.close();
        };

        $scope.openGlosario = function(){
            $scope.openGlosarioModal = true;
            snapRemote.close();
        };

        $scope.openQuit = function(){
            //$scope.openQuitModal = true;
            //$window.location.href = "../../index.html";
            /*$scope.openQuitModal = true;
            snapRemote.close();
            scormService.finish();*/
            //$window.top.close();
             $window.parent.HazCerrar();
        };

        $scope.openSendData = function(){
            console.log('click openSendData');
            $scope.grade = GradeService.getGrade();
            $scope.response = '';
            $scope.courseTitle = PagesService.getCourseTitle();
            $scope.openSendDataModal = true;
            snapRemote.close();
        };

        $scope.sendGrade = function(name){

            var obj = {
                name: name,
                grade: $scope.grade,
                courseTitle: PagesService.getCourseTitle()
            };

            gradeFactory.sendGrade(obj).then(function(response){
                //success
                console.log(response.data.message);
                $scope.response = response.data.message;
            },function (error) {
                // body...
                console.log(error);
            });
        };

        $scope.iframeLoadedCallBack = function(){
          $scope.cargando = true;
        };


        $scope.$on('page_event', function(event, page) {

            $scope.cargando = false;

            //console.log("cambiando " + page.url);

            $scope.pagina = "contenido/" + page.url;

            $scope.pagesArray = PagesService.getPages();

        });

        $scope.$on('page_event_status', function(event) {
            //console.log('page_event_status');
            $scope.pagesArray = PagesService.getPages();
            $scope.$apply();
        });


    });

    plantillaApp.service('PagesService', function ($http, $rootScope, scormService, $window) {
        var _title = "";
        var _subtitle = "";
        var _currentPage = "";
        var _pagesArray = [];
        var _pagesLength = _pagesArray.length;
        var _nextEnabled = false;

        var _brillando = false;

        function _broadcast () {
            $rootScope.$broadcast('page_event', _pagesArray[_currentPage-1]);

            /* Coloca suspend en location*/
            var cadena="";
            for (var j = 0; j < _pagesArray.length; j++) {
                cadena += (_pagesArray[j].done ? 1:0);
                if(_pagesArray[j].calif!=undefined && _pagesArray[j].calif!=""){
                    cadena += "-"+(_pagesArray[j].calif);
                }
                if(_pagesArray[j].tiempo!=undefined && _pagesArray[j].tiempo!=""){
                    cadena += "-"+(_pagesArray[j].tiempo);
                }
                if(_pagesArray[j].intentos!=undefined && _pagesArray[j].intentos!=""){
                    cadena += "-"+(_pagesArray[j].intentos);
                }
                    
                if(j<_pagesArray.length-1){
                    cadena += "|";
                }
            }

            scormService.saveLocation(cadena + "&&" + _currentPage);           
        }

        function _broadcastStatus() {
            $rootScope.$broadcast('page_event_status');
            //console.log(_pagesArray);
        }

        function init() {
            /*
            $http.get('contenido/temario.json').success(function(data) {
                _currentPage = 1;
                _title = data.title;
                _pagesArray = data.pages;
                _pagesLength = _pagesArray.length;

                //scorm stuff
                //var location = scormService.getLocation();
                var location = "";

                // Actualiza Suspend data en JSON
                var get_cadena=scormService.getLocation();
                if(get_cadena){
                    var arreglo_cadena = get_cadena.split("&&");
                    location = arreglo_cadena[1];

                    var cadena_array = arreglo_cadena[0].split("|");
                    for (var j = 0; j < _pagesArray.length; j++) {
                        
                        var _str_array = cadena_array[j].split("-");
                        if(_str_array.length>1){
                            _pagesArray[j].done = (_str_array[0]==1);
                            _pagesArray[j].calif = _str_array[1];                           
                            _pagesArray[j].tiempo=_str_array[2];
                            _pagesArray[j].intentos=_str_array[3];                          
                        }else{
                            _pagesArray[j].done = (cadena_array[j]==1);
                        }
                        
                    }
                }   
                // Hasta aqui suspend 
                
                
                if(location){
                    _currentPage = parseInt(location);
                }
                
                _broadcast();
            });
            */
        }

        function getCurrentPage () {
            return _currentPage;
        }

        function getCurrentPageStatus () {
            return _pagesArray[_currentPage - 1].done;
        }

        function getPageStatus (num) {
            return _pagesArray[num - 1].done;
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
            _brillando = false;
            _currentPage--;
            //_subtitle = _pagesArray[_currentPage - 1].name;
            _broadcast ();
        }

       function nextPage() {
        _brillando = false;
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
            _brillando = false;
            _currentPage = page;
            //_subtitle = _pagesArray[_currentPage - 1].name;
            _broadcast ();
        }

        function brilla(page) {
            console.log('brilla');

            _brillando = true;


            _pagesArray[_currentPage-1].done = true;

            /* Coloca suspend en location*/
            var cadena="";
            var vistos_todos_ = true;
            for (var j = 0; j < _pagesArray.length; j++) {
                cadena += (_pagesArray[j].done ? 1:0);

                if(_pagesArray[j].done == 0){
                	vistos_todos_ = false;
                }

                if(_pagesArray[j].calif!=undefined && _pagesArray[j].calif!=""){
                    cadena += "-"+(_pagesArray[j].calif);
                }
                if(_pagesArray[j].tiempo!=undefined && _pagesArray[j].tiempo!=""){
                    cadena += "-"+(_pagesArray[j].tiempo);
                }
                if(_pagesArray[j].intentos!=undefined && _pagesArray[j].intentos!=""){
                    cadena += "-"+(_pagesArray[j].intentos);
                }
                    
                if(j<_pagesArray.length-1){
                    cadena += "|";
                }
            }


            console.log("_pagesArray::: " , _pagesArray);
            if(vistos_todos_==true){
            	// actualiza el currentPage de donde estoy
				//if(this.pagesService){
					//this.pagesService.setCurrentPage(1);
					//this.setCurrentPage(2);
				//}
				/* Guarda la calificacion */
				//if(this.scormService){
					// necesario para que coloque 1 en el indice de este elearning
					scormService.saveGrade();
				//}
            }

            scormService.saveLocation(cadena + "&&" + _currentPage); 

            _broadcastStatus();
        }
        /*Extra*/
        function setCurrentPage(num){
            //console.log("actualiza currentPage---- "  + num);
            if($window.parent){
                $window.parent.setCurrentPage(num);
            }
            
        }
        /* */

        function getBrillar(){
            return _brillando;
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
            setCurrentPage: setCurrentPage,
            getBrillar:getBrillar
        };
    });

    plantillaApp.controller('navController', function($scope, PagesService){

        $scope.title = PagesService.getCourseTitle();
        $scope.currentPage = "";
        $scope.pagesLength = PagesService.getPages().length;
        $scope.currentPageStatus = false;
        
        $scope.brillar = false;

        $scope.goPrevious = function(){
            PagesService.previousPage();
        };

        $scope.goNext = function(){
            PagesService.nextPage();
        };

        $scope.$on('page_event', function(event, page) {
            $scope.title = PagesService.getCourseTitle();
            $scope.subtitle = page.name;
            $scope.currentPage = PagesService.getCurrentPage();
            $scope.pagesLength = PagesService.getPages().length;
            $scope.currentPageStatus = PagesService.getCurrentPageStatus();
            $scope.brillar = PagesService.getBrillar();
        });

        $scope.$on('page_event_status', function(event) {
            //console.log('page_event_status');
            $scope.currentPageStatus = PagesService.getCurrentPageStatus();
            $scope.brillar = PagesService.getBrillar();
            $scope.$apply();
        });

    });

   plantillaApp.service('scormService', function(scormWrapper, debug, $window){

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
            this.log("Finding API EMPTY...");
            /*scormWrapper.setAPIVersion('2004');
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
            }*/
        };

        this.finish = function() {
            this.log('Finish Course EMPTY');
            /*if(api){

                // Reporte de sesion de tiempo
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
            }*/
        };

        this.Continue = function(){
            // we request the next SCO from the LMS
            scormWrapper.doLMSSetValue("adl.nav.request", "continue");
           
            // we terminate this SCO's communication with the LMS
            this.finish();
        }

        this.getGrade = function() {
            /*var result;
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
            */
            var value = 0;
            if($window.parent){
                value = $window.parent.getGrade();
            }
            return value;
        };

        this.saveGrade = function(grade, num_intentos) {
            var result;
            this.log('saveGrade: ' + grade);
            /*if(api){
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
            }*/
            if($window.parent){
                $window.parent.saveGrade(grade, num_intentos);
            }
        };
        /* Agregado*/
        this.getAttempts = function(){
            var value = 0;
            if($window.parent){
                value = $window.parent.getIntentos();
            }
            return value;
        }
        this.getLocation = function() {
            /*var result;
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
            */
            return "";
        };

        this.saveLocation = function(location) {
            /*var result;
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
            */
        };

        this.getSuspend = function() {
            /*var result;
            this.log('getSuspend');
            if(api){
                // es igual en 1.2 y 2004
                result = scormWrapper.doLMSGetValue('cmi.suspend_data');
                if(result) {
                    this.log('suspend_data: ' + result);
                }
            }
            return result;
            */
            return "";
        };

        this.saveSuspend = function(suspend_data) {
            /*var result;
            this.log('saveSuspend: ' + suspend_data);
            if(api){    
                // es igual en 1.2 y 2004
                result = scormWrapper.doLMSSetValue('cmi.suspend_data', suspend_data);
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('suspend_data saved succesfully!');
            }*/
        };

        this.getStatus = function() {
            /*var result;
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
            */
            return "";
        };

        this.saveStatus = function(status) {
            /*var result;
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
            */
        };

        this.getValue = function(cual_variable){
            /*var result;
            this.log('getValue: ' + cual_variable);
            if(api){ 
                result = scormWrapper.doLMSGetValue(cual_variable);              
            }
            if(result) {
                this.log('result: ' + result);
            }
            return result;*/
            return "";
        };

        this.setValue = function(cual_variable, status) {
            /*var result;
            this.log('setValue: ' + cual_variable + " = " + status);
            if(api){
                result = scormWrapper.doLMSSetValue(cual_variable, status);                                    
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log(cual_variable + ' saved succesfully!');
            }*/
        };

        this.log = function(msg) {
            if(debug){
                console.log(msg);
            }
        };

    });

    plantillaApp.directive('iframeOnload', [function(){
        return {
            scope: {
                callBack: '&iframeOnload'
            },
            link: function(scope, element, attrs){
                element.on('load', function(){
                    return scope.callBack();
                });
            }
        };
    }]);

    plantillaApp.directive('canvasLoader', function (angularLoad, $window, scormWrapper, PagesService, usSpinnerService, ModalsService, GradeService, videoService) {

       return {
           restrict : 'EAC',
           replace : true,
           scope :{
           },

           template: '<div class="contenedorPaginas"><span us-spinner spinner-key="spinner"></span><canvas id="canvas" width="1024" height="638"></canvas></div>',
           link: function (scope, element, attribute, rootScope) {
               var w, h, loader;

               scope.currentPage = "";

               scope.$on('page_event', function(event, page) {
                    scope.currentPage = page.name;
                    usSpinnerService.spin('spinner');
                    if (scope.stage) {
                      scope.stage.autoClear = true;
                      scope.stage.removeAllChildren();
                        
                      // Para videos si esta en ejecucion y los quita de la vista JGC
                      /*
                      NOTA:::: Colocar la propiedad currentTime sin que exista source del video causa error en explorer 11 y para la ejecución del curso
                      */
                      /*$window.video1.pause();              
                      $window.video1.currentTime = 0;
                      $window.video1.style.display = "none";*/

                      // Para sonidos
                      createjs.Sound.stop();
                        
                    }
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

                   if (scope.stage) {
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
                       onResize();
                       onResize();
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
                    
               }

               function handleFileLoad(evt) {
                   if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
               }

               function handleComplete(evt, name) {
                    scope.exportRoot = new lib[scope.currentPage]();
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
               }

               function onResize(){
                    // var WIDTHSIZE = lib.properties.width;
                    // var HEIGHTSIZE = lib.properties.height;
                    console.log("RESIZE CURSO Canvas");
                    var WIDTHSIZE = 1024;
                    var HEIGHTSIZE = 638;                                           

                    var gameWidth = $window.innerWidth;                    
                    var gameHeight = $window.innerHeight-(50 + $('header').height());

                    // especial para que se muestren las flechas de navegación
                    if( $('.snapjs-left').length ){
                        // resto el tamaño del menu izquierdo
                         gameWidth = gameWidth - $('snap-content').offset().left;
                         //console.log("esta abierto el menu izquierdo!! offset:" + $('snap-content').offset().left + " position:"  +$('snap-content').position().left );
                    }
                    $('snap-content').width(gameWidth + "px");
                    //console.log($('snap-content').width() + " < 880");
                    $('.hidden-xs').css("display",$('snap-content').width()<880 ? "none":"block");
                    
                    //// hasta aqui especial

                    //var canvas = $("#canvas").html();
                    //var canvas = document.getElementById("canvas");
                    var scaleToFitX = gameWidth / WIDTHSIZE;
                    var scaleToFitY = gameHeight / HEIGHTSIZE;

                    var currentScreenRatio = gameWidth / gameHeight;
                    var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
                    

                    /*if (currentScreenRatio >= 1.76 && currentScreenRatio <= 1.77) {
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
                    }*/
         
                        var isResp = true;
                        var respDim = 'both';
                        var isScale = true;
                        var scaleType = 1;

                        var lastW, lastH, lastS=1;      
                            var w = WIDTHSIZE, h = HEIGHTSIZE;            
                            var iw = gameWidth, ih=gameHeight;          
                            var pRatio = $window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;          
                            if(isResp) {                
                                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                                    sRatio = lastS;                
                                }               
                                else if(!isScale) {                 
                                    if(iw<w || ih<h)                        
                                        sRatio = Math.min(xRatio, yRatio);              
                                }               
                                else if(scaleType==1) {                 
                                    sRatio = Math.min(xRatio, yRatio);              
                                }               
                                else if(scaleType==2) {                 
                                    sRatio = Math.max(xRatio, yRatio);              
                                }           
                            }           
                            canvas.width = w*pRatio*sRatio;         
                            canvas.height = h*pRatio*sRatio;
                            //console.log("width1:: " + (w*pRatio*sRatio));
                            canvas.style.width = w*sRatio+'px';               
                            canvas.style.height = h*sRatio+'px';
                            //console.log("width2:: " + (w*sRatio+'px'));
                            console.log("scope.stage:: " + scope.stage);
                            scope.stage.scaleX = pRatio*sRatio;           
                            scope.stage.scaleY = pRatio*sRatio; 
                                     
                            scope.stage.update();


                    /// centrar animacion
                    canvas.style.marginLeft = ((gameWidth - parseInt(canvas.style.width)) / 2) + "px";
                    //canvas.style.marginTop = ((gameHeight - parseInt(canvas.style.height)) / 2) + "px";

                    $window.header.style.width = parseInt(canvas.style.width) + "px";
                    $window.footer.style.width = parseInt(canvas.style.width) + "px";

                    //canvas.style.marginTop = ((gameHeight - parseInt(canvas.height)) / 2) + "px";

                    $window.video1.style.left = ((gameWidth - parseInt($window.video1.style.width)) / 2) + "px"; 
                    //if(parseInt(canvas.style.marginTop)>0){
                    $window.video1.style.top = ((gameHeight - parseInt($window.video1.style.height)) / 2) + "px";
                    //}                    
               }

               $window.playSound = function(id, loop) {
                    createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
                };
               
                $window.onresize = function(){
                	onResize();
                	onResize();
                    onResize();
                    onResize();
                    scope.$apply();
                };

           }
       };
   });
    

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


    plantillaApp.service('videoService', function() {

        var scope;
        var video_completo=false;

        this.init = function($scope) {
            scope = $scope;
        };

        this.playVideo = function(index){
            console.log('play video: ' + index);
            if(scope){
                video_completo=false;
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

