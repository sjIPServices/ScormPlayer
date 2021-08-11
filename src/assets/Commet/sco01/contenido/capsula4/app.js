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
        "com.2fdevs.videogular.plugins.buffering"
        ]);

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

    plantillaApp.controller('plantillaAppController', function($scope, $window, PagesService, $rootScope, snapRemote, scormService, gradeFactory, GradeService, ModalsService, $sce, videoService, $timeout, textosService){
        textosService.init();
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

		$scope.url_recurso = "";

        $scope.grade = 0;

        $scope.response = 'false';

        $scope.courseTitle = PagesService.getCourseTitle();

        // Video 

        $scope.videoVisible = false;

        $scope.state = null;
        $scope.API = null;
        $scope.currentVideo = 0;

        $scope.videos = [
   
            {
            }
        ];

        $scope.config = {
                preload: 'auto',
                autoplay: false,
                sources: $scope.videos[0].sources,
                theme: "bower_components/videogular-themes-default/videogular.css",
                plugins: {
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
                console.log('Video is completed');
                //$scope.pagesService.brilla();
        };

        $scope.setVideo = function(index) {
                $scope.API.stop();
                $scope.videoVisible = true;
                $scope.isCompleted = false;
                $scope.currentVideo = index;
                $scope.config.sources = $scope.videos[index].sources;
                $timeout($scope.API.play.bind($scope.API), 500);
                /*$timeout( function () {
                    console.log('play');
                    //$scope.API.play.bind($scope.API);
                    $scope.API.stop();
                }, 1000);*/
        };

        $scope.stopVideo = function() {
                $scope.API.stop();
                $scope.videoVisible = false;
                $scope.isCompleted = false;
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
            }   */         
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
            $scope.url_recurso = "contenido/ayuda/ayuda.html";
            snapRemote.close();
        };

        $scope.openGlossary = function(){
            $scope.openGlosarioModal = true;
            $scope.url_recurso = "contenido/glosario/glosario.html";
            snapRemote.close();
        };

        $scope.openTemario = function(){
            $scope.openTemarioModal = true;
            $scope.url_recurso = "contenido/temario/temario.html";
            snapRemote.close();
        };

        $scope.openSeguros = function(){
            /*$scope.openSegurosModal = true;
            $scope.url_recurso = "contenido/BBVA_CF_Productos_083_090/BBVA_CF_Productos_083_090.html";
            PagesService.detenerSeguros();
			// ESPECIAL PARA CONSUMER ::::
			if(PagesService.getCurrentPage()==11){
				PagesService.brilla();   
			}
            
            snapRemote.close();*/
        };

        $scope.openBookMark = function(){
            console.log("openBOKMARK:::::");
            $scope.openBookMarkModal = true;
            $scope.url_recurso = "contenido/bookmark/bookmark.html";
            snapRemote.close();
        };	
        
        $scope.closeModal = function(){
            $scope.openTemarioModal = false;
            $scope.openHelpModal = false;
            $scope.openGlosarioModal = false;
            $scope.openSegurosModal = false;
            $scope.openQuitModal = false;
            $scope.openBookMarkModal = false;
            $scope.url_recurso = "contenido/blank/blank.html";
            snapRemote.close();
        };

        $scope.openQuit = function(){
            /*$scope.openQuitModal = true;
            $scope.url_recurso = "contenido/salir/salir.html";
            snapRemote.close();*/
            //$window.location.href = "contenido/salir/salir.html";
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

    plantillaApp.service('PagesService', function ($http, $rootScope, scormService, $window, textosService) {
        var _title = "";
        var _subtitle = "";
        var _currentPage = "";
        var _pagesArray = [];
        var _pagesLength = _pagesArray.length;
        var _nextEnabled = false;
        var _brillando = false;
        ////// especial para curso CONSUMER
        var _seguros = false;

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
                if(_pagesArray[j].califtotales!=undefined && _pagesArray[j].califtotales!=""){
                    cadena += "-"+(_pagesArray[j].califtotales);
                }
                if(_pagesArray[j].califcorrectas!=undefined && _pagesArray[j].califcorrectas!=""){
                    cadena += "-"+(_pagesArray[j].califcorrectas);
                }
                    
                if(j<_pagesArray.length-1){
                    cadena += "|";
                }
            }

            //scormService.saveLocation(cadena + "&&" + _currentPage); 
            scormService.saveLocation(cadena + "&&" + _currentPage + "&&" + textosService.getValor(2));
            //_broadcastStatus();          
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
                //var location = scormService.getLocation();
                var location = "";

                /* Actualiza Suspend data en JSON*/
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
                            _pagesArray[j].califtotales=_str_array[4];
                            _pagesArray[j].califcorrectas=_str_array[5];
                        }else{
                            _pagesArray[j].done = (cadena_array[j]==1);
                        }
                        
                    }
                    textosService.setValor(1, arreglo_cadena[2]);
                }   
                /* Hasta aqui suspend */
                
                
                if(location){
                    _currentPage = parseInt(location);
                }
                
                _broadcast();
                
                /*if(location){
                    _currentPage = parseInt(location);
                    //console.log($rootScope);
                    //$rootScope.openBookMark();  
                    window.verBookmark();
                    
                }else{
                    _broadcast();                    
                }*/
                
                
            });
        }

        function getCurrentPage () {
            return _currentPage;
        }

        function getCurrentPageStatus () {
            return _pagesArray[_currentPage - 1].done;
        }
        //
        function getCurrentPageStatusTitle (tit) { 
            var done_ = false;
            for (var j = 0; j < _pagesArray.length; j++) {
                if(_pagesArray[j].title == String(tit)){
                    done_ = _pagesArray[j].done;
                    break;
                }
                
            }
            return done_;
        }
        //
        function getPageStatus (num) {
            var valor=false;
            console.log(num);
            if(_pagesArray && num>0){
                valor = _pagesArray[num - 1].done;
            }
            return valor;
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
            _seguros = false;

            /*if(_currentPage==12){
                _currentPage=7;
            }*/
            _currentPage--;
            //_subtitle = _pagesArray[_currentPage - 1].name;
            _broadcast ();
        }

       function nextPage() {
            console.log(_currentPage +" === " + _pagesArray.length);
            _brillando = false;
            _seguros = false;
            if(_currentPage === _pagesArray.length){
                //scormService.Continue();
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
            _brillando = false;
            _seguros = false;
            //_subtitle = _pagesArray[_currentPage - 1].name;
            _broadcast ();
        }
        function goToPageTitle(tit){ 
            _brillando = false; 
            _seguros = false;    
            for (var j = 0; j < _pagesArray.length; j++) {
                if(_pagesArray[j].title == String(tit)){
                    _currentPage = j+1;
                    break;
                }
                
            }
            console.log("Ir a pagina: " + _currentPage);            
            _broadcast ();

        }

        function brilla(page) {
            console.log('brilla');
            _pagesArray[_currentPage-1].done = true;
            _brillando = true;
            /*_seguros = false;*/

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
                if(_pagesArray[j].califtotales!=undefined && _pagesArray[j].califtotales!=""){
                    cadena += "-"+(_pagesArray[j].califtotales);
                }
                if(_pagesArray[j].califcorrectas!=undefined && _pagesArray[j].califcorrectas!=""){
                    cadena += "-"+(_pagesArray[j].califcorrectas);
                }
                    
                if(j<_pagesArray.length-1){
                    cadena += "|";
                }
            }

            //scormService.saveLocation(cadena + "&&" + _currentPage); 
            scormService.saveLocation(cadena + "&&" + _currentPage + "&&" + textosService.getValor(2));

            
            if(_currentPage>=_pagesArray.length){
                scormService.saveGrade("","",true);
            }
            
            
            _broadcastStatus();
        }
        
        /*Funciones adicionales*/
        function setCalif(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].calif = valor;
            }else{
                _pagesArray[_currentPage - 1].calif = valor;
            }
        }
        function getCalif(num){
            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].calif!=undefined && _pagesArray[num - 1].calif!=null){
                    return _pagesArray[num - 1].calif;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].calif!=undefined && _pagesArray[_currentPage - 1].calif!=null){
                    return _pagesArray[_currentPage - 1].calif;
                }
            }
        }
        
        function setTiempo(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].tiempo = valor;
            }else{
                _pagesArray[_currentPage - 1].tiempo = valor;
            }
        }
        function getTiempo(num){
            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].tiempo!=undefined && _pagesArray[num - 1].tiempo!=null){
                    return _pagesArray[num - 1].tiempo;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].tiempo!=undefined && _pagesArray[_currentPage - 1].tiempo!=null){
                    return _pagesArray[_currentPage - 1].tiempo;
                }
            }
        }
        
        function setIntentos(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].intentos = valor;
            }else{
                _pagesArray[_currentPage - 1].intentos = valor;
            }
        }
        function getIntentos(num){
            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].intentos!=undefined && _pagesArray[num - 1].intentos!=null){
                    return _pagesArray[num - 1].intentos;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].intentos!=undefined && _pagesArray[_currentPage - 1].intentos!=null){
                    return _pagesArray[_currentPage - 1].intentos;
                }
            }
        }
        
        function setCalifTotales(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].califtotales = valor;
            }else{
                _pagesArray[_currentPage - 1].califtotales = valor;
            }
            console.log("_pagesArray[_currentPage - 1].califtotales :: "  + _pagesArray[_currentPage - 1].califtotales);
        }
        function getCalifTotales(num){
            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].califtotales!=undefined && _pagesArray[num - 1].califtotales!=null){
                    return _pagesArray[num - 1].califtotales;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].califtotales!=undefined && _pagesArray[_currentPage - 1].califtotales!=null){
                    return _pagesArray[_currentPage - 1].califtotales;
                }
            }
        }
        
        function setCalifCorrectas(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].califcorrectas = valor;
            }else{
                _pagesArray[_currentPage - 1].califcorrectas = valor;
            }
        }
        function getCalifCorrectas(num){
            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].califcorrectas!=undefined && _pagesArray[num - 1].califcorrectas!=null){
                    return _pagesArray[num - 1].califcorrectas;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].califcorrectas!=undefined && _pagesArray[_currentPage - 1].califcorrectas!=null){
                    return _pagesArray[_currentPage - 1].califcorrectas;
                }
            }
        }
        /*Hast aqui funciones*/
        
        function brillaSeguros(){
            _seguros = true;
            _broadcastStatus();
        }
        function detenerSeguros(){
            _seguros = false;
            //_broadcastStatus();
        }
        function getSeguros(){
            return _seguros;
        }
        function getBrillar(){
            return _brillando;
        }
        /*Extra*/
        function setCurrentPage(num){
            //console.log("actualiza currentPage---- "  + num);
            if($window.parent){
                $window.parent.setCurrentPage(num);
            }
            
        }
        
        function regresaBDPreguntas(){    
            console.log("REGRESA::: " + bd_preguntas);
            //console.log("REGRESA::: " + $window.bd_preguntas);
            return bd_preguntas;
        }
        /* */

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
            goToPageTitle:goToPageTitle,
            getBrillar: getBrillar,
            brillaSeguros: brillaSeguros,
            getSeguros: getSeguros,
            detenerSeguros: detenerSeguros,
            setCalif: setCalif,
            getCalif: getCalif,
            setTiempo: setTiempo,
            getTiempo: getTiempo,
            setIntentos: setIntentos,
            getIntentos: getIntentos,
            regresaBDPreguntas: regresaBDPreguntas,
            setCalifTotales: setCalifTotales,
            getCalifTotales: getCalifTotales,
            setCalifCorrectas: setCalifCorrectas,
            getCalifCorrectas: getCalifCorrectas,
            getCurrentPageStatusTitle: getCurrentPageStatusTitle
            
        };
    });

    plantillaApp.controller('navController', function($scope, PagesService){

        $scope.title = PagesService.getCourseTitle();
        $scope.currentPage = "";
        $scope.pagesLength = PagesService.getPages().length;
        $scope.currentPageStatus = false;
        $scope.brillar = false;
        $scope.brillar_seguros = false;

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
            $scope.brillar_seguros = PagesService.getSeguros();
            //$scope.$apply();
        });

        $scope.$on('page_event_status', function(event) {
            //console.log('page_event_status');
            $scope.currentPageStatus = PagesService.getCurrentPageStatus();
            $scope.brillar = PagesService.getBrillar();
            $scope.brillar_seguros = PagesService.getSeguros();
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
            /*this.log("Finding API EMPTY...");
            scormWrapper.setAPIVersion('2004');
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
            /*this.log('Finish Course EMPTY');
            if(api){

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
            return result;*/
            var value = 0;
            if($window.parent){
                value = $window.parent.getGrade();
            }
            return value;           
        };

        this.saveGrade = function(grade, num_intentos) {
            /*var result;
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
            return result;*/
            var valor_bookmark = "";
			
            if($window.parent){                
				valor_bookmark = $window.parent.getBookmark();
            }
			
            return valor_bookmark;
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
            }*/
            if($window.parent){
                $window.parent.setBookmark(location);
            }
            
        };

        this.getSuspend = function() {
           /* var result;
            this.log('getSuspend');
            if(api){
                // es igual en 1.2 y 2004
                result = scormWrapper.doLMSGetValue('cmi.suspend_data');
                if(result) {
                    this.log('suspend_data: ' + result);
                }
            }
            return result;*/
            
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
            return result;*/
            
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
            }*/
            
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

    plantillaApp.directive('canvasLoader', function (angularLoad, $window, scormWrapper, PagesService, usSpinnerService, ModalsService, GradeService, videoService, textosService) {

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
                   
                   videoService.stopVideo();
                   
                   
                    if (scope.stage) {
                      scope.stage.autoClear = true;
                      scope.stage.removeAllChildren();
                      console.log("PAGE_EVENT:::");
                      /*
                      NOTA:::: Colocar la propiedad currentTime sin que exista source del video causa error en explorer 11 y para la ejecución del curso
                      */
                     /* $window.video1.pause();
                      $window.video1.style.display = "none";*/
                      /*$window.video1.pause();
                      $window.video1.currentTime = 0;                       
                      $window.video1.style.display = "none";
                        //console.log("video1::: " + $window.video1);
                      $window.video2.pause();
                      $window.video2.currentTime = 0;
                      $window.video2.style.display = "none";
                        
                      $window.video3.pause();
                      $window.video3.currentTime = 0;
                      $window.video3.style.display = "none"; */   
                        
                      //$window.textos1.style.display = "none";

                      textosService.ocultarTextos(1);
                      textosService.ocultarTextos(2);

                      
                    console.log("Checa objeto AdobeAn::");
                        //$window.btn_salida.
                        if(AdobeAn.compositions){
                            AdobeAn.compositions = null;
                        }
                      createjs.Sound.stop();
                    }
                    //angularLoad.loadScript('contenido/' + page.name + '/' + page.name + '.js').then(function() {
                    console.log("Abrir: contenido/" + page.name + '/' + page.name + '.js?'+(Math.floor(Math.random()*10000)));
                    angularLoad.loadScript('contenido/' + page.name + '/' + page.name + '.js?'+(Math.floor(Math.random()*10000))).then(function() { 
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
                   }
                   /* AJUSTE PARA QUE ACEPTE CUALQUIER VERSIÓN de ANIMATE*/
                   console.log(scope.currentPage + " Compositon:: " + AdobeAn.compositions);
                    var composition_;
                    if(AdobeAn.compositions){
                        console.log("si hay " + AdobeAn.compositions);
                        for (var key in AdobeAn.compositions) {
                           console.log(' name=' + key + ' value=' + AdobeAn.compositions[key]);
                           composition_ = key
                        }
                        var comp=AdobeAn.getComposition(composition_);
                        var lib2=comp.getLibrary();
                        
                        loader = new createjs.LoadQueue(false);
                        loader.installPlugin(createjs.Sound);

                        if(lib2.properties.manifest.length === 0){
                            handleComplete({},comp);
                        } else {
                            loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
                            loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
                            var lib2=comp.getLibrary();
                            loader.loadManifest(lib2.properties.manifest, true, "contenido/" + scope.currentPage + "/");
                        }

                    }else{
                        console.log("NO hay " + AdobeAn.compositions);
                        console.log("lib " , lib);
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
                   
                    
               }

               function handleFileLoad(evt, comp) {
                    /* AJUSTE PARA QUE ACEPTE CUALQUIER VERSIÓN de ANIMATE*/
                    console.log("handleFileLoad::: ");
                    if(AdobeAn.compositions){
                        console.log("si hay " + AdobeAn.compositions);
                        var images2=comp.getImages();    
                        if (evt && (evt.item.type == "image")) { images2[evt.item.id] = evt.result; }  
                    }else{
                        console.log("NO hay " + AdobeAn.compositions + " evt: " + images);
                        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
                    }  
               }

               function handleComplete(evt, comp) {
                   console.log("COMPLETE");

                    /* AJUSTE PARA QUE ACEPTE CUALQUIER VERSIÓN de ANIMATE*/
                   if(AdobeAn.compositions){
                        console.log("si hay " + AdobeAn.compositions);
                        var lib2=comp.getLibrary();
                        var ss2=comp.getSpriteSheet();
                        var queue = evt.target;
                        var ssMetadata = lib2.ssMetadata;
                        console.log("ssMetadata:: " , ssMetadata);
                        for(var i=0; i<ssMetadata.length; i++) {                            
                            ss2[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
                        }
                        //exportRoot = new lib.interfase_scorm01();
                    }else{
                        console.log("NO hay " + AdobeAn.compositions);
                        if(lib.ssMetadata!=null && lib.ssMetadata!=""){
                            var queue = evt.target;
                            var ssMetadata = lib.ssMetadata;
                            for(var i=0; i<ssMetadata.length; i++) {
                                console.log(ssMetadata[i].name);
                                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
                            }
                        }
                    }

                        console.log(scope.currentPage);
                      if(AdobeAn.compositions){
                        scope.exportRoot = new lib2[scope.currentPage]();
                      }else{
                        scope.exportRoot = new lib[scope.currentPage]();
                      }

                    scope.exportRoot.scormService = scormService;
                    scope.exportRoot.pagesService = PagesService;
                    scope.exportRoot.ModalsService = ModalsService;
                    scope.exportRoot.GradeService = GradeService;
                    scope.exportRoot.videoService = videoService;
                    scope.exportRoot.scope = scope;

                    scope.exportRoot.textosService = textosService;

                    //scope.stage = new createjs.Stage(scope.canvas);
                    scope.stage.addChild(scope.exportRoot);

                    sponge = scope.stage;
                    //console.log(scope.stage);
                    //console.log(scope.exportRoot);
                    scope.stage.update();
                    usSpinnerService.stop('spinner');

                    //createjs.Ticker.setFPS(lib.properties.fps);
                    //console.log("lib.properties.fps:: " + lib.properties.fps);
                    createjs.Ticker.setFPS(30);
                    createjs.Ticker.addEventListener("tick", scope.stage);
                    // llama a onResize
                    //createjs.Ticker.addEventListener("tick", onResize);
               }

               function onResize(){
                    // var WIDTHSIZE = lib.properties.width;
                    // var HEIGHTSIZE = lib.properties.height;
                    var WIDTHSIZE = 1024;
                    var HEIGHTSIZE = 638;                                                  

                    var gameWidth = $window.innerWidth;
                    var gameHeight = $window.innerHeight-55;

                    // especial para que se muestren las flechas de navegación
                    /*if( $('.snapjs-left').length ){
                        // resto el tamaño del menu izquierdo
                         gameWidth = gameWidth - $('snap-content').offset().left;
                         //console.log("esta abierto el menu izquierdo!! offset:" + $('snap-content').offset().left + " position:"  +$('snap-content').position().left );
                    }
                    $('snap-content').width(gameWidth + "px");
                    //console.log($('snap-content').width() + " < 880");
                    $('.hidden-xs').css("display",$('snap-content').width()<880 ? "none":"block");
                    */
                    //// hasta aqui especial

                    //var canvas = $("#canvas").html();
                    //var canvas = document.getElementById("canvas");
                    var scaleToFitX = gameWidth / WIDTHSIZE;
                    var scaleToFitY = gameHeight / HEIGHTSIZE;

                    var currentScreenRatio = gameWidth / gameHeight;
                    var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
                    
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
                            scope.stage.scaleX = pRatio*sRatio;           
                            scope.stage.scaleY = pRatio*sRatio; 
                                     
                            scope.stage.update();


                    /// centrar animacion
                    canvas.style.marginLeft = ((gameWidth - parseInt(canvas.style.width)) / 2) + "px";
                    //canvas.style.marginTop = ((gameHeight - parseInt(canvas.style.height)) / 2) + "px";

                    $window.footer.style.width = parseInt(canvas.style.width) + "px";

                    //canvas.style.marginTop = ((gameHeight - parseInt(canvas.height)) / 2) + "px";

                    //$window.video1.style.left = ((gameWidth - parseInt($window.video1.style.width)) / 2) + "px"; 
                    $window.textos1.style.left = parseInt(canvas.style.marginLeft) + (435 * sRatio) + "px";
                    $window.textos1.style.top = (160 * sRatio) + "px";
                    $window.textos1.style.width = (345 * sRatio) + "px";
                    $window.textos1.style.height = (50 * sRatio) + "px";
                    $window.textos1.style.fontSize = (16 * sRatio) + "px";
                    $window.textos1.style.textAlign = "left";
                    $window.textos1.style.border = "0px solid #fff";
                    $window.textos1.style.verticalAlign = "text-top";
                    $window.textos1.style.color = "#000";
				   
                    $window.textos2.style.left = parseInt(canvas.style.marginLeft) + (435 * sRatio) + "px";
                    $window.textos2.style.top = (218 * sRatio) + "px";
                    $window.textos2.style.width = (345 * sRatio) + "px";
                    $window.textos2.style.height = (50 * sRatio) + "px";
                    $window.textos2.style.fontSize = (16 * sRatio) + "px";
                    $window.textos2.style.textAlign = "left";
                    $window.textos2.style.border = "0px solid #fff";
                    $window.textos2.style.verticalAlign = "text-top";
                    $window.textos2.style.color = "#000";				  
                   
                    //if(parseInt(canvas.style.marginTop)>0){
                   if(gameWidth<=1024 || gameHeight<=693){
                       $window.footer.style.height = (55 * sRatio) + "px";
					   $window.logo1.style.width = (145 * sRatio) + "px";
					   $window.logo1.style.height = (55 * sRatio) + "px";	
					   $window.titulo.style.width = (302 * sRatio) + "px";
					   $window.titulo.style.height = (55 * sRatio) + "px";
                       
                       $window.tema1.style.width = (63 * sRatio) + "px";
					   $window.tema1.style.height = (55 * sRatio) + "px";
                       
                       $window.tema2.style.width = (63 * sRatio) + "px";
					   $window.tema2.style.height = (55 * sRatio) + "px";
                       
                       $window.tema3.style.width = (63 * sRatio) + "px";
					   $window.tema3.style.height = (55 * sRatio) + "px";
                       
                       $window.tema4.style.width = (63 * sRatio) + "px";
					   $window.tema4.style.height = (55 * sRatio) + "px";
                       
                       $window.tema5.style.width = (63 * sRatio) + "px";
					   $window.tema5.style.height = (55 * sRatio) + "px";
					   //$window.titulo.style.fontSize = (24 * sRatio) + "px";
					   //$window.titulo.style.marginLeft = (10 * sRatio) + "px";
                       //$window.titulo.style.marginRight = (15 * sRatio) + "px";					  					  				   					   					   
					  /* 
					   $window.btn_audio.style.width = (63 * sRatio) + "px";
                       $window.btn_audio_off.style.width = (63 * sRatio) + "px";
                                             
					   
					   $window.linea2.style.width = (6 * sRatio) + "px";
                       $window.botonera_avance.style.height = (55 * sRatio) + "px"; 	
					   
                       $window.paginadoTxt.style.lineHeight = (1 * sRatio);
                       $window.paginadoTxt.style.fontSize = (12 * sRatio) + "px";
                       $window.paginadoTxt1.style.lineHeight = (1 * sRatio);
                       $window.paginadoTxt1.style.fontSize = (12 * sRatio) + "px";
                       */                       
                       
                       $window.btn_audio.style.width = (63 * sRatio) + "px";
                       $window.btn_audio_off.style.width = (63 * sRatio) + "px";
                       //$window.btn_ayuda.style.width = (63 * sRatio) + "px"; 
                       $window.btn_salida.style.width = (63 * sRatio) + "px";
                       
                       $window.btn_back.style.height = (55 * sRatio) + "px";
                       $window.btn_back.style.width = (48 * sRatio) + "px";
                       
                       $window.btn_next2.style.height = (55 * sRatio) + "px";
					   $window.btn_next2.style.width = (54 * sRatio) + "px";
                       
                       $window.paginadoTxt1.style.lineHeight = (1 * sRatio);
                       $window.paginadoTxt1.style.fontSize = (12 * sRatio) + "px";
                       
                       $window.botonera_avance.style.height = (55 * sRatio) + "px"; 
                       /*$window.botonera_avance.style.width = (150 * sRatio) + "px"; */
                       
                   }else{
                       $window.footer.style.height = (55 * 1) + "px";
					   $window.logo1.style.width = (145 * 1) + "px";
					   $window.logo1.style.height = (55 * 1) + "px";
					   $window.titulo.style.width = (302 * 1) + "px";
					   $window.titulo.style.height = (55 * 1) + "px";
                       
                       $window.tema1.style.width = (63 * 1) + "px";
					   $window.tema1.style.height = (55 * 1) + "px";
                       
                       $window.tema2.style.width = (63 * 1) + "px";
					   $window.tema2.style.height = (55 * 1) + "px";
                       
                       $window.tema3.style.width = (63 * 1) + "px";
					   $window.tema3.style.height = (55 * 1) + "px";
                       
                       $window.tema4.style.width = (63 * 1) + "px";
					   $window.tema4.style.height = (55 * 1) + "px";
                       
                       $window.tema5.style.width = (63 * 1) + "px";
					   $window.tema5.style.height = (55 * 1) + "px";
                       //$window.titulo.style.fontSize = (24 * 1) + "px";
					   //$window.titulo.style.marginLeft = (10 * 1) + "px";							   
                       //$window.titulo.style.marginRight = (15 * 1) + "px";							   
					   //$window.linea1.style.width = (6 * 1) + "px";					  				   					   					   
					   //$window.btn_home.style.width =  (48 * 1) + "px";
					   $window.btn_audio.style.width = (63 * 1) + "px";
					   $window.btn_audio_off.style.width = (63 * 1) + "px";
					   //$window.btn_ayuda.style.width = (63 * 1) + "px";
					   $window.btn_salida.style.width = (63 * 1) + "px";
					   //$window.linea2.style.width = (6 * 1) + "px";
					   $window.botonera_avance.style.height = (55 * 1) + "px"; 
					   $window.btn_back.style.height = (55 * 1) + "px";
                       $window.paginadoTxt.style.lineHeight = 1;
                       $window.paginadoTxt.style.fontSize = (12 * 1) + "px";
                       $window.paginadoTxt1.style.lineHeight = 1;
                       $window.paginadoTxt1.style.fontSize = (12 * 1) + "px";					   
                       
                       $window.btn_back.style.height = (55 * 1) + "px";
                       $window.btn_back.style.width = (48 * 1) + "px";
                       
                       $window.btn_next2.style.height = (55 * 1) + "px";
					   $window.btn_next2.style.width = (54 * 1) + "px";
				   }
                   /* VIDEO GULAR */
                    $window.video_player.style.width = 902*sRatio+'px';
                    $window.video_container.style.width = 902*sRatio+'px';

                    $window.video_player.style.height = 488*sRatio+'px';
                    $window.video_container.style.height = 488*sRatio+'px';

                    $window.video_player.style.top = 75*sRatio+'px';
                    //$window.video_container.style.top = 160*sRatio+'px';
                   
                    var centro = parseInt(canvas.style.width) - parseInt($window.video_player.style.width);                   
                    $window.video_player.style.left = parseInt(canvas.style.marginLeft) + (centro/2) + "px";
                    /*$window.videototal.style.marginLeft = (512* sRatio) + "px";*/
                   // $window.video1.style.top = ((gameHeight - parseInt($window.video1.style.height)) / 2) + "px";
                    //}                    
               }

               $window.playSound = function(id, loop) {
                    createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
                };
               
                $window.onresize = function(){onResize();scope.$apply();};

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
        this.stopVideo = function(index){
			scope.stopVideo();
		}
        this.videoTerminado=function(){           
            //return video_completo;
        }
        this.fin_video = function(){
             //video_completo=true;
        }

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


    plantillaApp.service('textosService', function ($window) {
        var scope;
        //var mi_texto;
        var indice_actual;
        var correo_rol_ = 0;
        //var aciertos = [0, 0, 0, 0, 0, 0, 0, 0];
        //var reactivos = [0, 0, 0, 0, 0, 0, 0, 0];
        //var aciertos = [0, 3, 3, 3, 3, 3, 3, 3];
        //var reactivos = [0, 3, 3, 3, 4, 3, 3, 3];

        this.init = function ($scope) {
            scope = $scope;
        };


        this.mostrarTextos = function (numero) {
            /*if(scope){
                scope.verTextos();
            } else {
                console.log('Service not initialized');
            }*/
            indice_actual = numero;
            console.log("ver textos" + numero);
            if ($window["textos" + numero]) {
                $window["textos" + numero].style.display = "block";
                $window["textos" + numero].focus();
                /*$window["textos"+numero].addEventListener("keydown",hazListener);
                function hazListener(e){
                    console.log("click TEXTO: " + e.currentTarget.value);
                    //mi_texto = e.value;
                }*/
            }
        };

        this.ocultarTextos = function (numero) {
            if (numero != undefined && numero != null) {
                if ($window["textos" + numero]) {
                    $window["textos" + numero].style.display = "none";
                }
            } else {
                if ($window["textos" + indice_actual]) {
                    $window["textos" + indice_actual].style.display = "none";
                }
            }

        };

        this.getValor = function (numero) {
            if ($window["textos" + numero]) {
                console.log("Regresa: " + $window["textos" + numero].value);
                return $window["textos" + numero].value;
            }
        }

        this.setValor = function (numero, str) {
            if ($window["textos" + numero]) {
                console.log("Regresa: " + $window["textos" + numero].value);
                $window["textos" + numero].value = str;
            }
        }

        this.setReadWrite = function (numero) {
            if ($window["textos" + numero]) {
                //console.log("Regresa: " + $window["textos"+numero].value);
                $window["textos" + numero].readOnly = false;
            }
        }

        this.setReadOnly = function (numero) {
            console.log("Pasar a solo lectura textos" + numero);
            if ($window["textos" + numero]) {
                $window["textos" + numero].readOnly = true;
            }
        }
        //////////// ESPECIAL PARA DATA
        this.existeValor = function(numero){
            if ($window["textos" + numero]) {
                //console.log("Regresa: " + $window["textos" + numero].value);
                var valor_ = $window["textos" + numero].value;
                // busca en el js de correos si existe el correo o no 
                var existe_ = this.iteraJson(bd_usuarios, valor_);
                //console.log("existe::: " + existe_);
                return existe_;
            }
        }
        
        this.iteraJson=function(json, valor){
            
            for(var vari in json){
                //console.log(vari + " :: " + json[vari]);
                if(json[vari].length>0){
                    this.iteraJson(json[vari], valor);
                }else{
                    console.log(json[vari].correo + " == " + valor);
                    if(json[vari].correo == valor){
                        console.log("::::::BINGO:::::: " + json[vari].num_rol);
                        correo_rol_ = json[vari].num_rol;
                        break;
                    }
                }
            }
            
            return correo_rol_;
        }
        
        this.setEval = function (num, cal, react) {
            aciertos[num] = cal;
            reactivos[num] = react;
            console.log(aciertos);
            console.log(reactivos);
        }

        this.getAciertos = function (num) {
            return aciertos;
        }

        this.getReactivos = function (num) {
            return reactivos;
        }

    });


})();

